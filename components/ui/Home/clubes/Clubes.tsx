"use client"

import Image from "next/image";

export default function Clubes() {
  return (
    <section className="py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="font-bold text-3xl my-8" data-aos="fade-up">
        AGRISHINE CLUBS (Eco and Agrivoltic Clubs)
      </h2>

      {/* Intro Text */}
      <div
        className="max-w-2xl mx-auto mb-12 space-y-2"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p className="text-lg font-bold">
          Cultivating leadership through participation
        </p>
        <p className="text-primary">
          Students from primary to senior secondary schools form clubs that
          promote climate action, creativity, and innovation.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mx-auto mb-12 w-full max-w-5xl">
        {/* Eco Clubs Card */}
        <div
          className="w-full md:w-80 bg-white shadow-lg rounded-lg flex flex-col items-center"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="relative w-full h-64 rounded-md mb-4">
            <Image
              src="/61d603fd420e83ccbdab80288c3471da 1.png"
              alt="Eco Clubs"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
          <p className="text-primary font-semibold">
            Eco Clubs (Primary & JSS)
          </p>
          <h3 className="text-surface mt-2 mb-6">
            Focus on recycling, planting, and conservation.
          </h3>
        </div>

        {/* Agrivoltaic Clubs Card */}
        <div
          className="w-full md:w-80 bg-white shadow-lg rounded-lg flex flex-col items-center"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <div className="relative w-full h-64 rounded-md mb-4">
            <Image
              src="/d7262b67d2c768a8a40014a337f6a6cf 1.png"
              alt="Agrivoltaic Clubs"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
          <p className="text-primary font-semibold">Agrivoltaic Clubs (SSS)</p>
          <h3 className="text-surface mt-2 mb-6">
            Focus on solar energy, farming innovation, and sustainability.
          </h3>
        </div>
      </div>

      {/* Call to Action Button */}
      <div data-aos="fade-up" data-aos-delay="800">
        <button className="bg-primary text-white px-8 py-3 rounded-md shadow hover:bg-primary/90 transition-transform duration-[1500ms] ease-in-out hover:scale-105">
          Start a Club in your School
        </button>
      </div>
    </section>
  );
}
