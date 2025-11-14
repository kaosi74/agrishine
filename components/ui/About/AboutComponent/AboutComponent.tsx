import { impactAndFutureGoals } from "@/lib/CommunityEngagement";
import CommunityEngagement from "../../Home/communityEngagement/CommunityEngagement";
import Approach from "../Approach/Approach";
import Gallery from "../Gallery/Gallery";
import Hero from "../Hero/Hero";
import Initiatives from "../Initiatives/Initiatives";
import OurStory from "../OurStory/OurStory";
import OurValues from "../ValuesComponent/OurValues";
import VisionComponent from "../VisionComponent/VisionComponent";
import OurPartners from "../OurPartners/OurPartners";
import Movement from "../Movement/Movement";

export default function AboutComponent() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <VisionComponent />
      <OurValues />
      <Initiatives />
      <Approach />
      <OurStory />
      <Gallery />
      <CommunityEngagement {...impactAndFutureGoals} />
      <OurPartners />
      <Movement />
    </div>
  );
}
