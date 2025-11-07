"use client"

import Image from "next/image";

export default function Clubes() {
  return (
    <section className="py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="font-bold text-3xl my-8">
        AGRISHINE CLUBS (Eco and Agrivoltic Clubs)
      </h2>

      {/* Intro Text */}
      <div className="max-w-2xl mx-auto mb-12 space-y-2">
        <p className="text-lg font-bold">
          Cultivating leadership through participation
        </p>
        <p className="text-gray-600">
          Students from primary to senior secondary schools form clubs that
          promote climate action, creativity, and innovation.
        </p>
      </div>

      {/* Cards */}
      <div className="flex md:flex-row justify-center items-center gap-x-42 mx-auto mb-12">
        {/* Eco Clubs Card */}
        <div className="w-80 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <div className="relative w-full h-64 rounded-md mb-4">
            <Image
              src="/61d603fd420e83ccbdab80288c3471da 1.png"
              alt="Eco Clubs"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
          <p className="text-green-700 font-semibold">
            Eco Clubs (Primary & JSS)
          </p>
          <h3 className="text-gray-700 mt-2 mb-6">
            Focus on recycling, planting, and conservation.
          </h3>
        </div>

        {/* Agrivoltaic Clubs Card */}
        <div className="w-80 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <div className="relative w-full h-64 rounded-md mb-4">
            <Image
              src="/d7262b67d2c768a8a40014a337f6a6cf 1.png"
              alt="Eco Clubs"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
          <p className="text-green-700 font-semibold">
            Eco Clubs (Primary & JSS)
          </p>
          <h3 className="text-gray-700 mt-2 mb-6">
            Focus on recycling, planting, and conservation.
          </h3>
        </div>
      </div>

      {/* Call to Action Button */}
      <button className="bg-green-600 text-white px-8 py-3 rounded-md shadow hover:bg-green-700 transition">
        Start a Club in your School
      </button>
    </section>
  );
}
