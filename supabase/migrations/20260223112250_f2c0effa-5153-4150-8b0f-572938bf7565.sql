
DROP POLICY IF EXISTS "No public read" ON public.newsletter_subscribers;
CREATE POLICY "No public read" ON public.newsletter_subscribers FOR SELECT USING (false);

DROP POLICY IF EXISTS "Anyone can subscribe" ON public.newsletter_subscribers;
CREATE POLICY "Anyone can subscribe" ON public.newsletter_subscribers FOR INSERT TO anon, authenticated WITH CHECK (true);
