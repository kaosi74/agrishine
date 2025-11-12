import Approach from "../Approach/Approach";
import Gallery from "../Gallery/Gallery";
import Hero from "../Hero/Hero";
import Initiatives from "../Initiatives/Initiatives";
import OurStory from "../OurStory/OurStory";
import OurValues from "../ValuesComponent/OurValues";
import VisionComponent from "../VisionComponent/VisionComponent";

export default function AboutComponent() {
  return (
    <div>
      <Hero />
      <VisionComponent />
      <OurValues />
      <Initiatives />
      <Approach />
      <OurStory />
      <Gallery />
    </div>
  );
}
