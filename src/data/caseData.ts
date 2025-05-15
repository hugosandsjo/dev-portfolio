import { Case } from "@/types/caseType";

export const cases: Case[] = [
  {
    id: 1,
    title: "Full koll",
    slug: "fullkoll",
    description:
      "A web development project focused on creating an online presence for a ceramic arts studio, showcasing their work and design philosophy.",
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
    category: "Code",
    additionalImages: [
      "/dumkeramik/dumkeramik_01.png",
      "/dumkeramik/dumkeramik_02.png",
      "/dumkeramik/dumkeramik_03.png",
    ],
    aspectRatio: "16/10",
    website: "dumkeramik.se",
    url: "https://dumkeramik.com/",
  },
  {
    id: 3,
    title: "Motion reel",
    slug: "motionreel",
    description:
      "A collection of motion graphics and animations showcasing various techniques and styles for different contexts.",
    imagePath: "/reel/Instagram_birdandgirl.gif",
    category: "Motion",
    additionalImages: ["/reel/Instagram_birdandgirl.gif"],
    aspectRatio: "16/10",
  },
  {
    id: 4,
    title: "Axén Petersen Finsnickeri",
    slug: "oscaraxen",
    description:
      "A web development project focused on creating an online presence for a ceramic arts studio, showcasing their work and design philosophy.",
    imagePath: "/axenpetersen/axenpetersen_gif_small.gif",
    category: "Code, Design",
    additionalImages: ["/axenpetersen/axenpetersen_01.png"],
    aspectRatio: "16/10",
  },
];
