export interface CommunityEngagementProps {
  heading: string;
  intro: string;
  description: string;
  gridItems: string[];
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
  ctaButtonLabel?: string;
  reverseOrder?: boolean;
}

export const communityEngagementContent: CommunityEngagementProps = {
  heading: "PARTNERSHIP AND COMMUNITY ENGAGEMENT",
  intro: "“Building together for lasting impact”.",
  description:
    "AgriShine collaborates with governments, NGOs, universities, and communities to create shared ownership in sustainable education",
  gridItems: [
    "Expand our reach to rural areas",
    "Provide materials to under-resourced schools",
    "Install solar-powered systems",
    "Fund teacher and student programs",
  ],
  imageSrc: "/Rectangle_7.png",
  imageAlt: "Community Engagement Logo",
  ctaText:
    "“The spirit of Lichipu — Let’s do it together — lives through every partnership.”",
  ctaButtonLabel: "Become a Partner",
};

export const impactAndFutureGoals: CommunityEngagementProps = {
  heading: "OUR IMPACT AND FUTURE GOAL",
  intro: "By 2030, we aim to:",
  description:
    "AgriShine is building a nationwide network of climate-smart schools that bridge education and action. We believe that education is the seed; sustainability is the harvest",
  gridItems: [
    "Train 5,000+ teachers through the Teacher Climate Academy.",
    "Equip 5,000+ schools with climate-smart textbooks and storybooks.",
    "Collaborate with governments, NGOs, and philanthropists to scale sustainable education nationwide",
    "Establish 10,000+ School Demonstration Hubs with gardens, composting, and solar-powered irrigation",
    "Engage 200,000+ students through Eco & Agrivoltaic Clubs.",
  ],
  imageSrc: "/08de6071909ac2ef159a3293e6a19cb90d585666.jpg",
  imageAlt: "“Education is the seed; sustainability is the harvest.”",
};
