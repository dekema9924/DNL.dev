import mangaverse from "../assets/mockupImages/mangaverse.png";
import brainwave from "../assets/mockupImages/brainwave.png";
import stackApply from "../assets/mockupImages/stackApply.png";
import plutoai from "../assets/mockupImages/pluto.ai.png";
import aichatbot from "../assets/mockupImages/aichatbot.png";

export type ProjectType = {
  title: string;
  description: string;
  image: string;
  live: string;
  github: string;
};

export const projectsData: ProjectType[] = [


  {
    title: "Mangaverse",
    description: "A modern MangaReading website with a sleek design.",
    image: mangaverse,
    live: "https://manga.devwithdaniel.com",
    github: "https://github.com/dekema9924/MangaVerse",
  },
  {
    title: "Brainwave",
    description: "AI-powered frontend platform.",
    image: brainwave,
    live: "https://br0inwave.netlify.app",
    github: "https://github.com/dekema9924/AIBRAINWAVE",
  },
  {
    title: "Stack Apply",
    description: "A  job board platform with live API data.",
    image: stackApply,
    live: "https://stackapply.netlify.app",
    github: "https://github.com/dekema9924/StackApply",
  },
  {
    title: "Pluto.ai",
    description: "AI-powered frontend platform.",
    image: plutoai,
    live: "https://plutoa1.netlify.app/",
    github: "https://github.com/dekema9924/pluto.ai"
  },
  {
    title: "AI Chatbot",
    description: "AI-powered chatbot for customer support.",
    image: aichatbot,
    live: "https://cybrs.netlify.app/",
    github: "https://github.com/dekema9924/AIChatBot"
  },
];
