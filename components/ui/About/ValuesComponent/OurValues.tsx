import Image from "next/image";
import React from "react";

interface OurValuesProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ourValues: OurValuesProps[] = [
  {
    imageSrc: "/61d603fd420e83ccbdab80288c3471da 1.png",
    title: "Sustainability",
    description:
      "Embedding climate-smart practices in classrooms and communities.",
  },
  {
    imageSrc: "/61d603fd420e83ccbdab80288c3471da 1.png",
    title: "Innovation",
    description:
      "Encouraging creative problem- solving through agrivoltaics and smart farming",
  },
  {
    imageSrc: "/61d603fd420e83ccbdab80288c3471da 1.png",
    title: "Inclusion",
    description:
      "Ensuring all students, schools, and teachers can participate and benefit.",
  },
  {
    imageSrc: "/61d603fd420e83ccbdab80288c3471da 1.png",
    title: "Accountability",
    description: "Upholding transparency and integrity in all our programs.",
  },
  {
    imageSrc: "/61d603fd420e83ccbdab80288c3471da 1.png",
    title: "Teamwork",
    description:
      "Reflecting the Lichipu spirit — collective learning and collaboration.",
  },
  {
    imageSrc: "/61d603fd420e83ccbdab80288c3471da 1.png",
    title: "Collaboration",
    description:
      "Partnering with governments, NGOs, and families to achieve shared goals",
  },
];

export default function OurValues() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto mb-12 w-full max-w-5xl">
        {ourValues.map((value, index) => (
          <div
            key={index}
            className="w-full md:w-80 bg-white shadow-lg rounded-lg flex flex-col items-center p-4 "
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="relative w-full h-64 rounded-md mb-4">
              <Image
                src={value.imageSrc}
                alt={value.title}
                width={700}
                height={900}
                className="object-cover rounded-md"
                priority
              />
            </div>
            <p className="text-primary font-semibold">{value.title}</p>
            <h3 className="text-surface mt-2 mb-6 text-center">
              {value.description}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
