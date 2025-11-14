interface HeroProps {
  title: string;
  description: string;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  imageSrc: string;
  imageAlt?: string;
  bgColor?: string;
  textHeading?: string;
  textContent?: string;
}

export const hero: HeroProps = {
  title: "Growing Future Leaders Through Climate‑Smart Education",
  description:
    "Our Programs focus on three pillars of impact, empowering schools, teachers and students to lead the movement for Food‑Energy‑Water security.",
  primaryButtonLabel: "Get involved",
  secondaryButtonLabel: "Sign up",
  imageSrc: "/Rectangle_90.png",
  bgColor: "bg-primary",
  textHeading: "text-background",
};

export const aboutHero: HeroProps = {
  imageSrc: "/37cf1e0eeff2e9ed56861d49f6195f64 2.png",
  title: "Our Philosophy: Lichipu – “Let’s Do It Together",
  description:
    "At the core of AgriShine is the Lichipu philosophy, meaning “Let’s do it together.” We believe that lasting change happens when students, teachers, and communities learn and act collectively. In every AgriShine school, collaboration is the root of growth — from shared gardens to joint projects and inter-school exchanges Through this approach, classrooms become living laboratories, where every child learns to grow food, conserve water, harness clean energy, and build a more sustainable future.",
    bgColor: "bg-white",
    textHeading: "text-black",
    textContent: "text-surface",
};
