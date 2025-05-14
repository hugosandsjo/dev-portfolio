import { Case } from "@/types/caseType";

export const cases: Case[] = [
  {
    id: 1,
    title: "Full koll",
    slug: "fullkoll",
    description:
      "Together with Gullersgrupp, I developed a set of illustrations and visual identity for the County Administrative Board and the Full Koll campaign. Intended to inform teenage parents about setting boundaries around alcohol and drugs and the importance of talking about the subject.",
    imagePath: "/fullkoll/fullkoll_main.jpg",
    category: "Illustration",
    additionalImages: [
      "/fullkoll/fullkoll_01.jpg",
      "/fullkoll/fullkoll_02.jpg",
      "/fullkoll/fullkoll_03.jpg",
      "/fullkoll/fullkoll_04.jpg",
      "/fullkoll/fullkoll_05.jpg",
      "/fullkoll/fullkoll_06.jpg",
      "/fullkoll/fullkoll_07.jpg",
      "/fullkoll/fullkoll_08.jpg",
      "/fullkoll/mobile_01.jpg",
      "/fullkoll/mobile_02.jpg",
      "/fullkoll/mobile_03.jpg",
      // Add more images when available
    ],
    aspectRatio: "4/5",
  },
  {
    id: 2,
    title: "Dum keramik",
    slug: "dumkeramik",
    description:
      "A web development project focused on creating an online presence for a ceramic arts studio, showcasing their work and design philosophy.",
    imagePath: "/dumkeramik/dumkeramik_logo.svg",
    category: "Web Development",
    additionalImages: [
      "/dumkeramik/dumkeramik_01.png",
      "/dumkeramik/dumkeramik_02.png",
      "/dumkeramik/dumkeramik_03.png",
      // Add more images when available
    ],
    aspectRatio: "16/10",
    website: "dumkeramik.se",
    url: "https://dumkeramik.se/",
  },
  {
    id: 3,
    title: "Motion reel",
    slug: "motionreel",
    description:
      "A collection of motion graphics and animations showcasing various techniques and styles for different contexts.",
    imagePath: "/reel/Instagram_birdandgirl.gif",
    category: "Animation",
    additionalImages: [
      "/reel/Instagram_birdandgirl.gif",
      // Add more images when available
    ],
    aspectRatio: "16/10",
  },
];
