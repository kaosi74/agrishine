"use client"

import Aos from "aos";
import Image from "next/image"
import { useEffect } from "react";

export default function Climate() {
  useEffect(() => {
      Aos.init({
        duration: 2300,
        once: false,
        offset: 60, 
      });
    });
  return (
    <section className="py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="font-bold text-3xl my-8" data-aos="fade-up">
        CLIMATE - SMART LEARNING MATERIALS
      </h2>

      {/* Intro Text */}
      <div
        className="max-w-2xl mx-auto mb-12 space-y-2"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h3 className="text-lg font-bold">
          Building knowledge through stories, science, and creativity
        </h3>
        <p className="text-surface">
          AgriShine develops textbooks, storybooks, and activity guides that
          integrate sustainability into everyday subjects. Key publications
          include:
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
        {/* Eco Clubs Card */}
        <div
          className="bg-white shadow-lg rounded-lg pb-6 flex flex-col items-center"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <Image
            src="/Rectangle_3.png"
            width={800}
            height={200}
            alt="Eco Clubs"
            className="rounded-md mb-4"
          />
          <p className="text-primary font-semibold">
            Climate-Smart Agriculture Series (Primary–SSS)
          </p>
          <p className="text-surface mt-2">
            Focus on recycling, planting, and conservation.
          </p>
        </div>

        {/* Agrivoltaic Clubs Card */}
        <div
          className="bg-white shadow-lg rounded-lg pb-6 flex flex-col items-center"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <Image
            src="/Rectangle_2.png"
            width={500}
            height={200}
            alt="Agrivoltaic Clubs"
            className="rounded-md mb-4"
          />
          <p className="text-primary font-semibold">Agrivoltaic Clubs (SSS)</p>
          <p className="text-surface mt-2">
            Engage in smart farming, renewable energy projects, and
            competitions.
          </p>
        </div>

        {/* Third Card */}
        <div
          className="bg-white shadow-lg rounded-lg pb-6 flex flex-col items-center"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <Image
            src="/Rectangle_1.png"
            width={500}
            height={400}
            alt="Agrivoltaic Clubs"
            className="rounded-md mb-4"
          />
          <p className="text-primary font-semibold">Agrivoltaic Clubs (SSS)</p>
          <p className="text-surface mt-2">
            Engage in smart farming, renewable energy projects, and
            competitions.
          </p>
        </div>
      </div>

      {/* Call to Action Button */}
      <div data-aos="fade-up" data-aos-delay="1000">
        <button className="bg-primary text-white px-8 py-3 rounded-md shadow hover:bg-primary/90 transition-transform duration-500 ease-in-out hover:scale-105">
          Start a Club in your School
        </button>
      </div>
    </section>
  );
}
