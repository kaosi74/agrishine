import { aboutHero } from "@/lib/Hero";
import Hero from "../../Home/Hero/Hero";

interface OurStoryProps {
  title: string;
  description: string;
}

const ourStoryContent: OurStoryProps = {
  title: "Our Story and Philosophy: From Textbooks to Transformation",
  description: `
  AgriShine began with a single belief — that sustainability must be lived, not just taught. 
  What started as the development of Climate-Smart Agriculture Textbooks for Primary, Junior Secondary, and Senior Secondary Schools soon grew into a movement. These books provided a foundation for students to understand sustainable farming, soil health, and energy systems. From there, the vision expanded into School Demonstration Hubs — green learning spaces where students grow food, compost, recycle, and experiment with agrivoltaic systems that merge solar energy with agriculture.
  To deepen learning, AgriShine created the Sun & Soil Series, an educational collection that explores how sunlight, soil, and sustainability work together to feed the world. The series inspires students to see the planet as a living system — where every
  small action matters. Launched officially in Abuja on July 24, 2025, and endorsed by the FCT Secondary Education Board (SEB) and Department of Science, Technology & Innovation (DSTI), AgriShine continues to grow as a national model for climate-smart education. AgriShine connects schools directly to LIFEWS’ four-pillar vision: AgriShine (Education), AgriNext (Youth Innovation), AgriAble (Women & Inclusion), and AgriRoots
  (Community Resilience). Together, these initiatives nurture a holistic ecosystem of sustainable learning — preparing today’s students to become tomorrow’s green innovators and ethical leaders.`,
};
export default function OurStory() {
  return (
    <section className="text-center">
      <h2 className="font-bold text-2xl mx-8 md:mx-0 md:text-3xl md:my-6">
        Our Story and Philosophy: From Textbooks to Transformation
      </h2>
      <div className="space-y-3 text-surface/90 leading-relaxed text-left mx-4 max-w-5xl md:mx-auto my-6">
        <p className="whitespace-pre-line">{ourStoryContent.description}</p>
      </div>
      <Hero {...aboutHero} />
    </section>
  );
}
