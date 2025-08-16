export type SiteDetails = {
  siteName: string;
  siteUrl: string;
  metadata: { title: string; description: string };
  language: string;
  locale: string;
  siteLogo: string;
  googleAnalyticsId: string;
  contactEmail?: string;
  contactPhone?: string;
};

export const siteDetails: SiteDetails = {
  siteName: "Temrink",

  // Swap to your SWA URL after deploy; update to custom domain later.
  siteUrl: "https://temrink.com",

  metadata: {
    title: "Temrink — AI, Automation & IT Helpdesk for SMBs",
    description:
      "We manage Microsoft 365 & Google Workspace licensing, run your IT helpdesk and device management, and deploy Copilot + custom automations so your team moves faster with less overhead.",
  },

  language: "en-us",
  locale: "en-CA",

  siteLogo: "/images/temrink-logo.png",
  googleAnalyticsId: "",

  // Contact details
  contactEmail: "consulting@temrink.com",
  contactPhone: "+1 289-327-2015",
};
