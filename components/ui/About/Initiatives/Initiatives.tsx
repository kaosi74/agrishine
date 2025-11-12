// app/components/Initiatives.tsx (or in your components folder)

import { CheckCircle } from "lucide-react";
import Image from "next/image";

const initiatives = [
  {
    title: "Empowering Schools",
    description:
      "Equip primary and secondary schools with climate-smart textbooks, storybooks, and sustainability toolkits.",
  },
  {
    title: "Transform Learning",
    description:
      "Establish demonstration gardens, solar-powered irrigation systems, and agrivoltaic models that turn theory into practice.",
  },
  {
    title: "Train Teachers",
    description:
      "Build teacher capacity through workshops and online courses on environmental education.",
  },
  {
    title: "Inspire Students",
    description:
      "Create Eco Clubs and Agrivoltaic Clubs where learners lead sustainability projects and national competitions.",
  },
  {
    title: "Foster Collaboration",
    description:
      "Strengthen partnerships between schools, local communities, and international institutions for global impact.",
  },
];

export default function Initiatives() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Our Initiatives</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 md:gap-y-0">
        <div className="space-y-8 relative">
          {initiatives.map((item, index) => (
            <div key={index} className="flex items-start gap-4 relative">
              <CheckCircle className="text-green-500 text-2xl flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-surface">{item.description}</p>
              </div>
              {/* Vertical line */}
              {index !== initiatives.length - 1 && (
                <div className="absolute left-2 top-8 h-full border-l-2 border-green-300"></div>
              )}
            </div>
          ))}
        </div>
        <div>
          <Image src="/Rectangle 99.png" width={800} height={500} alt="image" />
        </div>
      </div>
    </section>
  );
}
