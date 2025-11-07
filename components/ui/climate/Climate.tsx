"use client"

import Image from "next/image"

export default function Climate() {
  return (
    <section className="bg-green-50 py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
        CLIMATE - SMART LEARNING MATERIALS
      </h2>

      {/* Intro Text */}
      <div className="max-w-2xl mx-auto mb-12 space-y-2">
        <p className="text-lg text-gray-700">
          Building knowledge through stories, science, and creativity
        </p>
        <p className="text-gray-600">
          AgriShine develops textbooks, storybooks, and activity guides that
          integrate sustainability into everyday subjects. Key publications
          include:
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
        {/* Eco Clubs Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <Image
            src="/logo.jpg"
            width={200}
            height={150}
            alt="Eco Clubs"
            className="rounded-md mb-4"
          />
          <p className="text-green-700 font-semibold">
            Climate-Smart Agriculture Series (Primary–SSS)
          </p>
          <h3 className="text-gray-700 mt-2">
            Focus on recycling, planting, and conservation.
          </h3>
        </div>

        {/* Agrivoltaic Clubs Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <Image
            src="/logo.jpg"
            width={200}
            height={150}
            alt="Agrivoltaic Clubs"
            className="rounded-md mb-4"
          />
          <p className="text-green-700 font-semibold">
            Agrivoltaic Clubs (SSS)
          </p>
          <h3 className="text-gray-700 mt-2">
            Engage in smart farming, renewable energy projects, and
            competitions.
          </h3>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <Image
            src="/logo.jpg"
            width={200}
            height={150}
            alt="Agrivoltaic Clubs"
            className="rounded-md mb-4"
          />
          <p className="text-green-700 font-semibold">
            Agrivoltaic Clubs (SSS)
          </p>
          <h3 className="text-gray-700 mt-2">
            Engage in smart farming, renewable energy projects, and
            competitions.
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
