"use client";

import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

export default function CommunityEngagement() {
  useEffect(() => {
    Aos.init({
      duration: 2300,
      once: false,
      offset: 60, 
    });
  });
  return (
    <section className="text-center px-10 md:px-22 py-12">
      {/* Heading */}
      <h2 className="font-bold text-3xl my-6" data-aos="fade-up">
        PARTNERSHIP AND COMMUNITY ENGAGEMENT
      </h2>

      {/* Intro Text */}
      <p
        className="text-md mb-1 text-surface"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        “Building together for lasting impact”.
      </p>
      <p
        className="text-md text-surface"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        AgriShine collaborates with governments, NGOs, universities, and
        communities to create shared ownership in sustainable education
      </p>

      {/* Grid + Image */}
      <div className="flex flex-col md:flex-row justify-center items-center my-12 gap-y-4 md:gap-y-0">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 w-full max-w-md md:max-w-none"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <div className="px-4 rounded-xl py-4 shadow-sm" data-aos="flip-up">
            <p>Expand our reach to rural areas</p>
          </div>
          <div
            className="px-4 rounded-xl py-4 shadow-sm"
            data-aos="flip-up"
            data-aos-delay="100"
          >
            <p>Provide materials to under- resourced schools</p>
          </div>
          <div
            className="px-4 rounded-xl py-4 shadow-sm"
            data-aos="flip-up"
            data-aos-delay="200"
          >
            <p>Install solar- powered systems</p>
          </div>
          <div
            className="px-4 rounded-xl py-4 shadow-sm"
            data-aos="flip-up"
            data-aos-delay="300"
          >
            <p>Fund teacher and student programs</p>
          </div>
        </div>

        <Image
          src="/Rectangle_7.png"
          width={500}
          height={500}
          alt="logo"
          className="max-w-full h-auto"
          data-aos="zoom-in"
          data-aos-delay="800"
        />
      </div>

      {/* CTA */}
      <div data-aos="fade-up" data-aos-delay="1000">
        <p className="text-lg">
          “The spirit of Lichipu — Let’s do it together — lives through every
          partnership.”
        </p>
        <button className="bg-primary rounded-lg px-4 py-2 shadow-md hover:bg-primary/90 cursor-pointer text-background font-medium mt-6 transition-transform duration-500 ease-in-out hover:scale-105">
          Become a Partner
        </button>
      </div>
    </section>
  );
}
