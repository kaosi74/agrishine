"use client";

import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

export default function StudentInnovation() {
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
        STUDENTS COMPETITION AND INNOVATION CHALLENGE
      </h2>

      {/* Intro Text */}
      <div
        className="max-w-2xl mx-auto mb-12 space-y-2"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h3 className="text-lg font-bold">
          Inspiring the next generation of problem solvers.
        </h3>
        <p className="text-surface">
          Every year, AgriShine organizes student contests that combine
          creativity, science, and teamwork:
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
            src="/Rectangle_4.png"
            width={800}
            height={400}
            alt="Eco Clubs"
            className="rounded-md mb-4 w-full h-auto"
          />
          <p className="text-primary font-semibold">
            Eco-Art & Essay Competitions
          </p>
          <p className="text-surface mt-2">
            Merging creativity with environmental awareness
          </p>
        </div>

        {/* Agrivoltaic Clubs Card */}
        <div
          className="bg-white shadow-lg rounded-lg pb-6 flex flex-col items-center"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <Image
            src="/Rectangle_5.png"
            width={800}
            height={400}
            alt="Agrivoltaic Clubs"
            className="rounded-md mb-4 w-full h-auto"
          />
          <p className="text-primary font-semibold">
            Solar-Innovation Bootcamp
          </p>
          <p className="text-surface mt-2">
            For young inventors designing renewable solutions
          </p>
        </div>

        {/* Green School Challenge Card */}
        <div
          className="bg-white shadow-lg rounded-lg pb-6 flex flex-col items-center"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <Image
            src="/Rectangle_6.png"
            width={800}
            height={400}
            alt="Agrivoltaic Clubs"
            className="rounded-md mb-4 w-full h-auto"
          />
          <p className="text-primary font-semibold">Green School Challenge</p>
          <p className="text-surface mt-2">
            Nationwide inter-school sustainability contest
          </p>
        </div>
      </div>

      <p
        className="text-surface mb-10"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        These activities nurture critical thinking, leadership, and innovation
        for a climate-smart generation.
      </p>

      {/* Call to Action Button */}
      <div data-aos="fade-up" data-aos-delay="1200">
        <button className="bg-primary text-white px-8 py-3 rounded-md shadow hover:bg-primary/90 transition-transform duration-500 ease-in-out hover:scale-105">
          Start a Club in your School
        </button>
      </div>
    </section>
  );
}
