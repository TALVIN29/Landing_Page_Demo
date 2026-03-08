import type { RealtimeChannel } from '@supabase/supabase-js'

interface UseSupabaseOptions {
  table: string
  select?: string
  filters?: Record<string, any>
  orderBy?: { column: string; ascending?: boolean }
  limit?: number
  single?: boolean
}

interface UseSupabaseReturn<T> {
  data: Ref<T | null>
  error: Ref<Error | null>
  loading: Ref<boolean>
  refresh: () => Promise<void>
  subscribe: (callback: (payload: any) => void) => RealtimeChannel | null
}

export function useSupabaseData<T = any>(
  options: UseSupabaseOptions
): UseSupabaseReturn<T> {
  const supabase = useSupabaseClient()
  const data = ref<T | null>(null) as Ref<T | null>
  const error = ref<Error | null>(null)
  const loading = ref(false)
  const channel = ref<RealtimeChannel | null>(null)

  const fetchData = async () => {
    loading.value = true
    error.value = null

    try {
      let query = supabase
        .from(options.table)
        .select(options.select || '*')

      // Apply filters
      if (options.filters) {
        Object.entries(options.filters).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            query = query.in(key, value)
          } else if (typeof value === 'object' && value !== null) {
            // Handle range queries, etc.
            if (value.gte !== undefined) query = query.gte(key, value.gte)
            if (value.lte !== undefined) query = query.lte(key, value.lte)
            if (value.gt !== undefined) query = query.gt(key, value.gt)
            if (value.lt !== undefined) query = query.lt(key, value.lt)
            if (value.like !== undefined) query = query.ilike(key, `%${value.like}%`)
          } else {
            query = query.eq(key, value)
          }
        })
      }

      // Apply ordering
      if (options.orderBy) {
        query = query.order(options.orderBy.column, {
          ascending: options.orderBy.ascending ?? true,
        })
      }

      // Apply limit
      if (options.limit) {
        query = query.limit(options.limit)
      }

      // Get single result or array
      if (options.single) {
        const { data: result, error: supabaseError } = await query.single()
        
        if (supabaseError) throw supabaseError
        data.value = result as T
      } else {
        const { data: result, error: supabaseError } = await query
        
        if (supabaseError) throw supabaseError
        data.value = result as T
      }
    } catch (err) {
      error.value = err as Error
      console.error(`Error fetching from ${options.table}:`, err)
    } finally {
      loading.value = false
    }
  }

  const subscribe = (callback: (payload: any) => void): RealtimeChannel | null => {
    if (!supabase) return null

    channel.value = supabase
      .channel(`${options.table}-changes`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: options.table,
        },
        (payload) => {
          callback(payload)
          // Refresh data on changes
          fetchData()
        }
      )
      .subscribe()

    return channel.value
  }

  // Fetch data on mount
  onMounted(() => {
    fetchData()
  })

  // Cleanup subscription on unmount
  onUnmounted(() => {
    if (channel.value) {
      channel.value.unsubscribe()
    }
  })

  return {
    data,
    error,
    loading,
    refresh: fetchData,
    subscribe,
  }
}

/**
 * Insert data into a table
 */
export function useSupabaseInsert() {
  const supabase = useSupabaseClient()
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const insert = async <T = any>(
    table: string,
    data: Partial<T> | Partial<T>[]
  ): Promise<T | T[] | null> => {
    loading.value = true
    error.value = null

    try {
      const { data: result, error: supabaseError } = await supabase
        .from(table)
        .insert(data)
        .select()

      if (supabaseError) throw supabaseError
      return result as T | T[]
    } catch (err) {
      error.value = err as Error
      console.error(`Error inserting into ${table}:`, err)
      return null
    } finally {
      loading.value = false
    }
  }

  return {
    insert,
    loading: readonly(loading),
    error: readonly(error),
  }
}

/**
 * Update data in a table
 */
export function useSupabaseUpdate() {
  const supabase = useSupabaseClient()
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const update = async <T = any>(
    table: string,
    id: string | number,
    data: Partial<T>
  ): Promise<T | null> => {
    loading.value = true
    error.value = null

    try {
      const { data: result, error: supabaseError } = await supabase
        .from(table)
        .update(data)
        .eq('id', id)
        .select()
        .single()

      if (supabaseError) throw supabaseError
      return result as T
    } catch (err) {
      error.value = err as Error
      console.error(`Error updating ${table}:`, err)
      return null
    } finally {
      loading.value = false
    }
  }

  return {
    update,
    loading: readonly(loading),
    error: readonly(error),
  }
}

/**
 * Delete data from a table
 */
export function useSupabaseDelete() {
  const supabase = useSupabaseClient()
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const remove = async (
    table: string,
    id: string | number
  ): Promise<boolean> => {
    loading.value = true
    error.value = null

    try {
      const { error: supabaseError } = await supabase
        .from(table)
        .delete()
        .eq('id', id)

      if (supabaseError) throw supabaseError
      return true
    } catch (err) {
      error.value = err as Error
      console.error(`Error deleting from ${table}:`, err)
      return false
    } finally {
      loading.value = false
    }
  }

  return {
    remove,
    loading: readonly(loading),
    error: readonly(error),
  }
}

/**
 * Upload file to Supabase Storage
 */
export function useSupabaseStorage() {
  const supabase = useSupabaseClient()
  const loading = ref(false)
  const error = ref<Error | null>(null)
  const progress = ref(0)

  const upload = async (
    bucket: string,
    path: string,
    file: File
  ): Promise<{ path: string; publicUrl: string } | null> => {
    loading.value = true
    error.value = null
    progress.value = 0

    try {
      const { data, error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(path, file, {
          cacheControl: '3600',
          upsert: false,
        })

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(data.path)

      return { path: data.path, publicUrl }
    } catch (err) {
      error.value = err as Error
      console.error(`Error uploading to ${bucket}:`, err)
      return null
    } finally {
      loading.value = false
    }
  }

  const remove = async (bucket: string, path: string): Promise<boolean> => {
    loading.value = true
    error.value = null

    try {
      const { error: deleteError } = await supabase.storage
        .from(bucket)
        .remove([path])

      if (deleteError) throw deleteError
      return true
    } catch (err) {
      error.value = err as Error
      console.error(`Error deleting from ${bucket}:`, err)
      return false
    } finally {
      loading.value = false
    }
  }

  return {
    upload,
    remove,
    loading: readonly(loading),
    error: readonly(error),
    progress: readonly(progress),
  }
}