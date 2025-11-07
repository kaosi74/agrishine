"use client";

import Achievement from "../achievement/Achievement";
import Climate from "../climate/Climate";
import Clubes from "../clubes/Clubes";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Programs from "../program/Programs";
import TeacherClimateAcademy from "../Teacher/TeacherClimateAcademy";

export default function Home() {
  return (
    <main>
        <Navbar />
        <Hero />
        <Programs />
        <TeacherClimateAcademy />
        <Achievement />
        <Clubes />
        <Climate />
        <Climate />
        <TeacherClimateAcademy />
    </main>
  )
}
