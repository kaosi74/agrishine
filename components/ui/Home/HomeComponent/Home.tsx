"use client";

import Achievement from "../achievement/Achievement";
import Climate from "../climate/Climate";
import Clubes from "../clubes/Clubes";
import CommunityEngagement from "../communityEngagement/CommunityEngagement";
import Footer from "../../footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../../Navbar/Navbar";
import Programs from "../program/Programs";
import StudentInnovation from "../StudentInnovation/StudentInnovation";
import TeacherClimateAcademy from "../Teacher/TeacherClimateAcademy";
import { hero } from "@/lib/Hero";

export default function Home() {
  return (
    <main>
      <Hero {...hero} />
      <Programs />
      <TeacherClimateAcademy />
      <Achievement />
      <Clubes />
      <Climate />
      <StudentInnovation />
      <CommunityEngagement />
    </main>
  );
}
