-- Dokumentation der über Supabase apply_migration angewendeten Änderung
-- Remote-Migrationsname: add_read_only_learning_catalog
-- Dies ist eine Schema-Dokumentation, kein zusätzlich anzuwendendes Migrationsfile.
create table public.learning_catalog (
  id text primary key check (id in ('path','memory','sum','count','pattern','syllable','compare','odd','sort','rhyme','subtract')),
  title text not null,
  subject text not null,
  description text not null,
  skill text not null,
  source_urls text[] not null default '{}',
  sort_order integer not null,
  published boolean not null default false
);
alter table public.learning_catalog enable row level security;
revoke all on public.learning_catalog from anon, authenticated;
grant select on public.learning_catalog to anon, authenticated;
create policy "Published curriculum is readable" on public.learning_catalog
for select to anon, authenticated using (published = true);
-- Elf veröffentlichte Katalogeinträge wurden mit den Texten aus src/catalog.js
-- und den Originalquell-URLs angelegt. Keine vorhandenen Tabellen verändert.

-- Version 0.3: expand_adventure_catalog erweitert die ID-Prüfung und aktualisiert
-- die elf Katalogtexte; SELECT-Grant und RLS-Policy bleiben bestehen.
