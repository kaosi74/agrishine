import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <section className="bg-primary py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6 md:mr-12">
          <h1 className="text-2xl md:text-3xl font-bold text-background leading-tight">
            Growing Future Leaders Through Climate - Smart Education
          </h1>
          <p className="text-lg text-background max-w-xl">
            Our Programs focuses on three pillar of impact empowering schools,
            teachers and Students to lead the movement for Food - Energy - Water
            security.
          </p>
          <div className="flex gap-4">
            <button className="bg-secondary text-foreground px-6 py-3 rounded-lg shadow hover:bg-secondary/70 font-bold">
              Get involved
            </button>
            <button className="border-2 border-secondary text-background px-6 py-3 rounded-lg shadow transition font-bold">
              Sign up
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/Rectangle 90.png"
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
