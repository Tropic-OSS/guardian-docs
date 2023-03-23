// This file contains the site configuration for the theme.

// Metadata, SEO, and Social
export const SITE_TITLE = "Guardian";
export const SITE_DESCRIPTION = "Documentation for the Guardian Discord bot";
export const SITE_URL = "https://guardian.bitecodelabs.com";
export const SITE_DEFAULT_OG_IMAGE = "/assets/guardian.png";

// Docs Sidebar
// Define the left sidebar items here.
// The path should match the folder name in src/content/docs/
export const SIDEBAR_ITEMS = {
  "Getting Started": [
    "/docs/getting-started/introduction",
    "/docs/getting-started/mod",
  ],
  Configuration: [
    "/docs/config/discord",
    "/docs/config/config-file",
    "/docs/config/mod-config-file",
  ],
  Hosting: ["/docs/hosting/self-hosting", "/docs/hosting/pterodactyl"],
  Usage: ["/docs/usage/usage"],
  Maintenance: ["/docs/maintenance/maintenance"],
  Support: ["/docs/support/support"],
  Conclusion: ["/docs/conclusion/conclusion"],
};
