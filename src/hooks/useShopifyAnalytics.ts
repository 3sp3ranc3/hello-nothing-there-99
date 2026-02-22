import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useShopifyCookies } from "@shopify/hydrogen-react";
import { trackPageView } from "@/lib/shopify-analytics";

/**
 * Hook that initialises Shopify analytics cookies and sends
 * a page_view event on every route change.
 * Place once in your app shell (e.g. AppContent).
 */
export function useShopifyPageAnalytics() {
  // Sets _shopify_y (unique token) and _shopify_s (session token) cookies
  useShopifyCookies({ hasUserConsent: true });

  const location = useLocation();

  useEffect(() => {
    // Small delay to ensure the page has rendered
    const timer = setTimeout(() => {
      trackPageView(window.location.href);
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);
}
