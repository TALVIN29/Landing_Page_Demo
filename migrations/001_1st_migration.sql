-- ============================================================
-- Migration: 001_1st_migration.sql
-- Description: Create contact_submissions table
-- Created: 2026-03-08
-- ============================================================

-- ============================================================
-- TABLE: contact_submissions
-- Stores enquiries submitted via the Contact Us form
-- ============================================================
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT        NOT NULL,
  email       TEXT        NOT NULL,
  phone       TEXT,
  company     TEXT,
  industry    TEXT        CHECK (industry IN ('medical', 'pharmaceutical', 'glove', 'fmcg', 'other', '')),
  message     TEXT        NOT NULL,
  status      TEXT        NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- TRIGGER: auto-update updated_at on row changes
-- ============================================================
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- ============================================================
-- INDEXES: speed up common queries
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status
  ON public.contact_submissions (status);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at
  ON public.contact_submissions (created_at DESC);

-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Visitors (anonymous) can submit the form
CREATE POLICY "Allow public insert"
  ON public.contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated admin users can read submissions
CREATE POLICY "Allow authenticated read"
  ON public.contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated admin users can update (e.g. change status)
CREATE POLICY "Allow authenticated update"
  ON public.contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true);

-- Only authenticated admin users can delete
CREATE POLICY "Allow authenticated delete"
  ON public.contact_submissions
  FOR DELETE
  TO authenticated
  USING (true);
