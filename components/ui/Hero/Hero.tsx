import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <section className="bg-green-100 py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight">
            Growing Future Leaders Through Climate - Smart Education
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            Our Programs focuses on three pillar of impact empowering schools,
            teachers and Students to lead the movement for Food - Energy - Water
            security.
          </p>
          <div className="flex gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-md shadow hover:bg-green-700 transition">
              Get involved
            </button>
            <button className="bg-white border border-green-600 text-green-600 px-6 py-3 rounded-md shadow hover:bg-green-50 transition">
              Sign up
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/logo.jpg"
            alt="Hero Image"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
