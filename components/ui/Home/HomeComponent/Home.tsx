"use client";

import Achievement from "../achievement/Achievement";
import Climate from "../climate/Climate";
import Clubes from "../clubes/Clubes";
import CommunityEngagement from "../communityEngagement/CommunityEngagement";
import Hero from "../Hero/Hero";
import Programs from "../program/Programs";
import StudentInnovation from "../StudentInnovation/StudentInnovation";
import TeacherClimateAcademy from "../Teacher/TeacherClimateAcademy";
import { hero } from "@/lib/Hero";
import { communityEngagementContent } from "@/lib/CommunityEngagement";

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
      <CommunityEngagement {...communityEngagementContent} />
    </main>
  );
}
