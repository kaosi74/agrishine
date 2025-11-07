"use client";

import Image from "next/image";

export default function Programs() {
  return (
    <section className="text-center px-12 py-8">
      <div className="flex flex-row justify-center items-center mb-4">
        <h2 className="font-bold text-lg">OUR PROGRAMS </h2>
        <p>- What we Do</p>
      </div>
      <div>
        <h3 className="font-bold text-lg">
          “Turning Classrooms into Living Laboratories.”
        </h3>
        <p>
          The AgriShine Schools Initiative (ASI) transforms schools into hubs of
          sustainability through practical, climate-smart education. Our
          programs focus on three pillars of impact — empowering schools,
          teachers, and students to lead the movement for food–energy–water
          security. Each pillar works hand in hand to connect learning with
          action, guided by the LIFEWS philosophy of Lichipu — “Let’s do it
          together.” “Learning becomes transformation when students can plant,
          see, and grow what they learn.”
        </p>
      </div>
      <div>
        <p>School Demonstration Hubs</p>
        <p>
          Turning classrooms into living laboratories. Every participating
          school establishes a small, functional demonstration hub — a space
          where students grow vegetables, compost waste, harvest rainwater, and
          even experiment with solar-powered irrigation.
        </p>
        <p>Each hub includes:</p>
      </div>
      <div className="flex flex-row gap-x-8 justify-center my-4">
        <Image src="/logo.jpg" width={200} height={200} alt="logo" className="rounded-lg shadow-lg" />
        <Image src="/logo.jpg" width={200} height={200} alt="logo" className="rounded-lg shadow-lg" />
      </div>
      <p>
        These hubs bring science, agriculture, and ethics to life — helping
        students understand the balance between food, energy, and water systems.
      </p>
      <button className="bg-green-600 rounded-lg px-4 py-2 shadow-md hover:bg-green-500 hover:cursor-pointer text-white font-bold">Start a Demonstration Hub!</button>
    </section>
  );
}
