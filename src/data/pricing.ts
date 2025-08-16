import { IPricing } from "@/types";

export const tiers: IPricing[] = [
  {
    name: "Microsoft 365 Business Basic",
    price: 8.10, // CAD per user/month, annual (plus tax)
    features: [
      "User and access management for up to 300 users",
      "Web & mobile versions of Word, Excel, PowerPoint and Outlook",
      "Business email with custom domain",
      "Microsoft Teams for chat, online meetings and calling",
      "1 TB OneDrive cloud storage per user",
      "Core business apps (Bookings, Planner, Forms, etc.)",
      "Built-in AI assistance for chat, writing and data insights",
      "Spam/malware filtering",
      "Phone and web support",
    ],
  },
  {
    name: "Microsoft 365 Business Standard",
    price: 17.0, // CAD per user/month, annual (plus tax)
    features: [
      "Everything in Business Basic",
      "Desktop apps for Word, Excel, PowerPoint & Outlook (plus web & mobile)",
      "Webinars with registration and attendee reporting",
      "Collaborative workspaces with Microsoft Loop",
      "Video editing & design tools with Microsoft Clipchamp",
    ],
  },
  {
    name: "Microsoft 365 Business Premium",
    price: 29.80, // CAD per user/month, annual (plus tax)
    badge: "Most popular", // <<< highlight this plan
    features: [
      "Everything in Business Standard",
      "Advanced identity & access management",
      "Device and endpoint security",
      "Protection against phishing and other cyberthreats",
      "Information protection and data-loss controls (discovery, classification, DLP)",
    ],
  },
  {
    name: "Microsoft 365 Apps for business",
    price: 11.70, // CAD per user/month, annual (plus tax)
    features: [
      "Desktop versions of Word, Excel, PowerPoint & Outlook",
      "Licensed for up to 300 users",
      "1 TB OneDrive storage per user",
      "Phone and web support",
      "Does not include business email or Teams chat/calling",
    ],
  },
];
