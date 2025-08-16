export type Step = {
  title: string;
  desc: string;
};

export const processIntro = {
  heading: "How we implement AI",
  subheading:
    "A simple, low-risk path from discovery to AI-powered operations.",
};

export const steps: Step[] = [
  {
    title: "Discovery call",
    desc: "Understand your stack, pain points, security posture, and goals.",
  },
  {
    title: "Licensing & baseline",
    desc: "Right-size M365/Google licenses, MFA/SSPR, device standards and backups.",
  },
  {
    title: "Copilot rollout & training",
    desc: "Tenant readiness, governance, pilot users, playbooks, enablement.",
  },
  {
    title: "Automations",
    desc: "Power Automate / Logic Apps and integrations to remove repetitive work.",
  },
  {
    title: "Agentic AI",
    desc: "Custom copilots/agents grounded in your data to run multi-step workflows.",
  },
  {
    title: "Ongoing support",
    desc: "Helpdesk, device mgmt, monitoring, and monthly optimization reviews.",
  },
];
