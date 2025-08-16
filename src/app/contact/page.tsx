import type { Metadata } from "next";
import Container from "@/components/Container";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
  title: "Contact — Temrink",
  description:
    "Book a discovery call or email Temrink for support, pricing, and rollout questions.",
};

const DEFAULT_EMAIL = "consulting@temrink.com";
const DEFAULT_PHONE = "+1 289-327-2015";

export default function ContactPage() {
  const email = siteDetails.contactEmail ?? DEFAULT_EMAIL;
  const hasEmail = typeof email === "string" && email.includes("@");
  const phone = DEFAULT_PHONE;

  return (
    <section className="pt-28 md:pt-40 pb-16">
      <Container>
        <h1 className="text-3xl md:text-4xl font-bold">Contact Temrink</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Book a discovery call to review your environment and plan your Copilot + automation rollout.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Book a call */}
          <div className="rounded-2xl border p-6 bg-background">
            <h2 className="text-xl font-semibold">Book a discovery call</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We’ll assess licensing, security baseline, and top automation opportunities.
            </p>
            <a
              href="#cta"
              className="mt-4 inline-block rounded-full bg-primary px-6 py-3 text-black hover:bg-primary-accent"
            >
              Book now
            </a>
          </div>

          {/* Email / Phone */}
          <div className="rounded-2xl border p-6 bg-background">
            <h2 className="text-xl font-semibold">Email or call us</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Prefer email or phone? We’ll reply within one business day.
            </p>

            {hasEmail && (
              <a
                href={`mailto:${email}`}
                className="mt-4 inline-block rounded-full border px-6 py-3 hover:bg-muted"
              >
                {email}
              </a>
            )}

            <div className="mt-3">
              <a
                href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                className="inline-block rounded-full border px-6 py-3 hover:bg-muted"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
