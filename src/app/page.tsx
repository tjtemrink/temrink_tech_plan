import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Pricing from "@/components/Pricing/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Stats from "@/components/Stats";
// REMOVE: import CTA from "@/components/CTA";
import MicrosoftBanner from "@/components/MicrosoftBanner";

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero with partner strip */}
      <Hero />

      {/* Core services */}
      <Services />

      {/* Process (linked from the hero CTA) */}
      <Process />

      {/* Pricing + Testimonials (kept inside Container/Section) */}
      <Container>
        <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          <Testimonials />
        </Section>
      </Container>

      {/* Standalone sections render their own containers */}
      <FAQ />
      <Stats />

      {/* Microsoft partner banner replaces the old CTA */}
      <MicrosoftBanner />
    </>
  );
};

export default HomePage;
