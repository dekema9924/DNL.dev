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
    description: `
      A sleek, modern manga reading platform.  
      ✨ Powered by the **MangaDex API** for live manga data and chapters.  
      📖 Smooth chapter reader with **pagination** and mobile-optimized UI.  
      ⚡ Built with clean design, **fast performance**, and state management.
    `,
    image: mangaverse,
    live: "https://manga.devwithdaniel.com",
    github: "https://github.com/dekema9924/MangaVerse",
  },
  {
    title: "Brainwave",
    description: `
      An AI-powered frontend experience.  
      🤖 Showcasing **intelligent features** with cutting-edge UI/UX.  
      🎨 Interactive layouts, smooth **Framer Motion animations**, and responsive design.  
      🚀 A glimpse into how **AI transforms user interfaces**.
    `,
    image: brainwave,
    live: "https://br0inwave.netlify.app",
    github: "https://github.com/dekema9924/AIBRAINWAVE",
  },
  {
    title: "Stack Apply",
    description: `
      A dynamic job board platform with live data.  
      💼 Fetches and displays **real-time job listings** from APIs.  
      🔎 Clean filtering and detailed job descriptions.  
      📊 Highlights skills in **API integration, data handling, and responsive UI**.
    `,
    image: stackApply,
    live: "https://stackapply.netlify.app",
    github: "https://github.com/dekema9924/StackApply",
  },
  {
    title: "Pluto.ai",
    description: `
      An experimental AI playground.  
      🌌 A modern interface to explore **AI-driven features**.  
      ⚡ Built for **speed, interactivity, and user engagement**.  
      🎯 Bridges the gap between **AI innovation** and **practical design**.
    `,
    image: plutoai,
    live: "https://plutoa1.netlify.app/",
    github: "https://github.com/dekema9924/pluto.ai",
  },
  {
    title: "AI Chatbot",
    description: `
      An AI-powered customer support assistant.  
      💬 Provides **real-time conversational responses**.  
      🛠 Built for **customer service automation** and smooth interactions.  
      🎨 Clean, accessible UI with **AI integration at the core**.
    `,
    image: aichatbot,
    live: "https://cybrs.netlify.app/",
    github: "https://github.com/dekema9924/AIChatBot",
  },
];
