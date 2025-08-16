import Image from "next/image";
import Container from "./Container";

const services = [
  {
    key: "licensing",
    title: "Licensing (M365 & Google)",
    img: "/images/licensing.webp",
    points: [
      "Consolidated billing and cost reporting",
      "Right-size seats to cut waste",
      "Governance guidance and security baseline",
    ],
  },
  {
    key: "daas",
    title: "Device as a Service",
    img: "/images/daas.webp",
    points: [
      "Standardized Windows/Mac builds & zero-touch setup",
      "Bitdefender protection, patching & updates",
      "Lifecycle: procurement, warranty, refresh",
    ],
  },
  {
    key: "ai",
    title: "AI & Automation",
    img: "/images/ai.webp",
    points: [
      "Copilot readiness, rollout & training",
      "Automate 2–3 high-leverage workflows first",
      "Integrations with Power Automate / Logic Apps",
    ],
  },
  {
    key: "helpdesk",
    title: "IT Helpdesk Support",
    img: "/images/helpdesk.webp",
    points: [
      "Responsive support with clear SLAs",
      "On/Off-boarding & access requests",
      "Monitoring and monthly optimization",
    ],
  },
];

export default function Services() {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">What we provide</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Four core services to stabilize your IT and unlock AI-powered productivity.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.key} className="rounded-2xl border bg-background p-6 md:p-8">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-muted">
                <Image
                  src={s.img}
                  alt={`${s.title} illustration`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={s.key === "licensing"} // eager-load first card to reduce LCP
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {s.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
