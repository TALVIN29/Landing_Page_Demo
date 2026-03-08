<template>
  <div class="relative">
    <select 
      v-model="selectedLocale"
      @change="changeLocale"
      class="appearance-none bg-transparent border border-secondary-300 rounded-md py-1.5 pl-3 pr-8 text-sm font-medium text-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 cursor-pointer"
      :aria-label="$t('selectLanguage')"
    >
      <option 
        v-for="locale in locales" 
        :key="locale.code" 
        :value="locale.code"
      >
        {{ locale.name }}
      </option>
    </select>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-secondary-500">
      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const selectedLocale = ref(locale.value)

const changeLocale = () => {
  setLocale(selectedLocale.value)
}

// Watch for external locale changes
watch(() => locale.value, (newLocale) => {
  selectedLocale.value = newLocale
})
</script>