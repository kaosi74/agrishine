"use client";

import Image from "next/image";

export default function Programs() {
  return (
    <section className="text-center px-22 py-8 leading-7">
      <div className="flex flex-row justify-center items-center mb-8 mt-6 gap-x-2">
        <h2 className="font-bold text-3xl my-6">OUR PROGRAMS</h2>
        <p className="text-md"> - What we Do</p>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-6">
          “Turning Classrooms into Living Laboratories.”
        </h3>
        <p className="text-md leading-7">
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
      <div className="mt-8">
        <p className="font-bold text-lg my-6">School Demonstration Hubs</p>
        <p className="text-md leading-7">
          Turning classrooms into living laboratories. Every participating
          school establishes a small, functional demonstration hub — a space
          where students grow vegetables, compost waste, harvest rainwater, and
          even experiment with solar-powered irrigation.
        </p>
        <p className="font-bold text-lg my-12">Each hub includes:</p>
      </div>
      <div className="flex flex-row gap-x-22 justify-center mt-12">
        <Image
          src="/7ad60ba4a7d7932c59df119436166a5c (1) 1.png"
          width={400}
          height={400}
          alt="logo"
          className="rounded-lg shadow-lg"
        />
        <Image
          src="/9f3b5693db278ed76eafa047f60863c1 1.png"
          width={400}
          height={400}
          alt="logo"
          className="rounded-lg shadow-lg"
        />
      </div>
      <p className="text-md mt-9">
        These hubs bring science, agriculture, and ethics to life — helping
        students understand the balance between food, energy, and water systems.
      </p>
      <button className="bg-primary rounded-lg px-4 py-2 shadow-md hover:primary/70 hover:cursor-pointer text-background font-medium mt-6">
        Start a Demonstration Hub!
      </button>
    </section>
  );
}
