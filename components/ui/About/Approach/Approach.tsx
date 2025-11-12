import React from "react";

const initiatives = [
  {
    title: "LEARN",
    description:
      "Through customized sustainability books, digital lessons, and practical guides.",
  },
  {
    title: "SHARE",
    description:
      "Through inter-school challenges, exhibitions, and national recognition programs.",
  },
  {
    title: "PRACTICE",
    description:
      "Via gardens, green labs, and agrivoltaic demonstration hubs within schools.",
  },
];

export default function Approach() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-center">
      <h2 className="font-bold text-3xl my-8" data-aos="fade-up">
        OUR APPROACH - The Agrishine Model
      </h2>
      <p className="text-lg font-bold">
        AgriShine adopts a three-tier learning framework:
      </p>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        {initiatives.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center transform transition duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-bold uppercase text-gray-800 mb-4">
              {item.title}
            </h3>
            <p className="text-surface">{item.description}</p>
          </div>
        ))}
      </div>
      <p className="text-md mt-12">
        This model ensures that learning is both experiential and
        transformative.
      </p>
    </section>
  );
}
