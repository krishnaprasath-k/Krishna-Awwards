"use client";
import SkillsBentoGrid from "@/components/Client/SkillsBentoGrid";

interface Skill {
  title: string;
  category: string;
  description: string;
  color: string;
  bgGradient: string;
  image1: string;
  image2: string;
}

export default function SustainableRetreatClient() {
  const skills: Skill[] = [
    {
      title: "React",
      category: "Frontend Framework",
      description: "Building dynamic, responsive user interfaces with modern React patterns, hooks, and performance optimization techniques.",
      color: "#61DAFB",
      bgGradient: "linear-gradient(135deg, #61DAFB 0%, #21A1F1 100%)",
      image1: "/wellness-sanctuary.png",
      image2: "/wellness-sanctuary.png",
    },
    {
      title: "Python",
      category: "Backend Development",
      description: "Crafting scalable server-side applications, APIs, and data processing solutions with clean, maintainable code.",
      color: "#3776AB",
      bgGradient: "linear-gradient(135deg, #3776AB 0%, #FFD43B 100%)",
      image1: "/wellness-sanctuary.png",
      image2: "/wellness-sanctuary.png",
    },
    {
      title: "GSAP",
      category: "Animation Library",
      description: "Creating smooth, professional animations and interactive experiences that bring designs to life with precision timing.",
      color: "#88CE02",
      bgGradient: "linear-gradient(135deg, #88CE02 0%, #0AE448 100%)",
      image1: "/wellness-sanctuary.png",
      image2: "/wellness-sanctuary.png",
    },
    {
      title: "TypeScript",
      category: "Programming Language",
      description: "Ensuring type safety and code quality with advanced TypeScript patterns for robust, maintainable applications.",
      color: "#3178C6",
      bgGradient: "linear-gradient(135deg, #3178C6 0%, #007ACC 100%)",
      image1: "/wellness-sanctuary.png",
      image2: "/wellness-sanctuary.png",
    },
    {
      title: "Next.js",
      category: "Full-Stack Framework",
      description: "Building performant, SEO-friendly web applications with server-side rendering and modern routing capabilities.",
      color: "#FFFFFF",
      bgGradient: "linear-gradient(135deg, #000000 0%, #333333 100%)",
      image1: "/wellness-sanctuary.png",
      image2: "/wellness-sanctuary.png",
    },
    {
      title: "Node.js",
      category: "Runtime Environment",
      description: "Building scalable backend services and RESTful APIs with efficient server-side JavaScript execution.",
      color: "#339933",
      bgGradient: "linear-gradient(135deg, #339933 0%, #66CC66 100%)",
      image1: "/wellness-sanctuary.png",
      image2: "/wellness-sanctuary.png",
    },
  ];

  return (
    <div className="w-full md:col-span-3">
      <SkillsBentoGrid skills={skills} />
    </div>
  );
}
