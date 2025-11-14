"use client";
import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";

export default function VisionComponent() {
  useEffect(() => {
    Aos.init({
      duration: 2300,
      once: false,
      offset: 60,
    });
  });
  return (
    <section className="py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div data-aos="zoom-in">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4 text-black">Our Vision</h2>
            <p className="text-surface mb-6">
              To transform every school into a living classroom where students
              learn to grow food, harness clean energy, and protect the planet —
              fostering a generation of sustainability minded citizens.
            </p>
          </div>

          <div className="relative w-full rounded-lg shadow-lg">
            <Image
              src="/6622a4b743e6007c7fb61d1e8ebd23bb3e8327d4.jpg"
              alt="Students gardening - Our Vision"
              width={800}
              height={600}
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        <div data-aos="zoom-out">
          <div className="relative w-full rounded-lg shadow-lg">
            <Image
              src="/bacf65953ad5603805d15019c2893828775ae649.jpg"
              alt="Hands holding plant - Our Mission"
              width={800}
              height={600}
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-surface mb-6">
              To integrate climate-smart farming, agrivoltaics, and
              environmental ethics into Nigeria’s education system through
              practical learning, digital tools, teacher empowerment, and
              student-led clubs that inspire innovation, teamwork, and
              leadership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
