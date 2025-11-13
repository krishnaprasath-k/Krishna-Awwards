"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  id: number;
  title: string;
  company: string;
  category: string;
  mediaType: "image" | "video";
  mediaSrc: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Web Development",
    company: "Full Stack",
    category: "Portfolio",
    mediaType: "video",
    mediaSrc: "https://raw.githubusercontent.com/jxlee007/PROJECT-5-Sundown/main/media/converse.mp4",
  },
  {
    id: 2,
    title: "UI/UX Design",
    company: "Creative",
    category: "Portfolio",
    mediaType: "image",
    mediaSrc: "https://raw.githubusercontent.com/jxlee007/PROJECT-5-Sundown/main/media/sohonyc.webp",
  },
  {
    id: 3,
    title: "Animation",
    company: "GSAP",
    category: "Portfolio",
    mediaType: "video",
    mediaSrc: "https://raw.githubusercontent.com/jxlee007/PROJECT-5-Sundown/main/media/afterpay.mp4",
  },
];

export default function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const floatingMediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item) => {
        if (!item) return;

        // Fade in animation on scroll
        gsap.from(item, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Handle mouse move for floating media
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (hoveredIndex !== null && floatingMediaRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        
        gsap.to(floatingMediaRef.current, {
          x: x - floatingMediaRef.current.offsetWidth / 2,
          y: y - floatingMediaRef.current.offsetHeight / 2,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    };

    if (hoveredIndex !== null) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hoveredIndex]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    if (floatingMediaRef.current) {
      gsap.set(floatingMediaRef.current, { display: "flex" });
      gsap.to(floatingMediaRef.current, {
        opacity: 1,
        scale: 1.15,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    if (floatingMediaRef.current) {
      gsap.to(floatingMediaRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          if (floatingMediaRef.current) {
            gsap.set(floatingMediaRef.current, { display: "none" });
          }
        },
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[Grey] py-16 md:py-20"
    >
      {/* Floating Media Preview (Desktop only) */}
      <div
        ref={floatingMediaRef}
        className="pointer-events-none fixed z-50 hidden h-[30vw] w-[24vw] items-center justify-center overflow-hidden rounded-2xl opacity-0 shadow-2xl md:flex"
        style={{
          willChange: "transform, opacity",
          transform: "scale(0.8)",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {hoveredIndex !== null && (
          <>
            {projects[hoveredIndex].mediaType === "video" ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                src={projects[hoveredIndex].mediaSrc}
                className="rounded-2xl"
                style={{ width: "750px" }}
              />
            ) : (
              <div className="relative h-full w-full">
                <Image
                  src={projects[hoveredIndex].mediaSrc}
                  alt={projects[hoveredIndex].title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </>
        )}
      </div>

      {/* Project List */}
      <div className="w-full">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="group relative flex items-center justify-between overflow-hidden border-b border-[#a8a39a] px-4 py-6 transition-all duration-500 md:h-[120px] md:px-8 md:hover:h-[350px]"
          >
            {/* Grey Overlay */}
            <div className="absolute inset-0 -translate-y-full bg-[#c0bbb2] transition-transform duration-300 ease-out group-hover:translate-y-0" />

            {/* Content Wrapper */}
            <div className="relative z-10 flex w-full items-center justify-between md:group-hover:w-1/2">
              {/* Title */}
              <h2 className="text-3xl font-light text-[#3a3a3a] transition-colors duration-300 group-hover:text-[#1a1a1a] md:text-[3vw]">
                {project.title}
              </h2>

              {/* Company & Category */}
              <div className="flex flex-col items-end md:w-[10%]">
                <h3 className="text-sm font-light uppercase text-[#5a5a5a] transition-colors duration-300 group-hover:text-[#2a2a2a] md:text-[1.2vw]">
                  {project.company}
                </h3>
                <h4 className="text-sm font-extralight capitalize text-[#7a7a7a] transition-colors duration-300 group-hover:text-[#4a4a4a] md:text-[1.2vw]">
                  {project.category}
                </h4>
              </div>
            </div>

            {/* Desktop Hover Image - Right Side */}
            <div className="absolute right-8 top-1/2 z-10 hidden h-[80%] w-[45%] -translate-y-1/2 overflow-hidden rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:block">
              {project.mediaType === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={project.mediaSrc}
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={project.mediaSrc}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            {/* Mobile Media - Always visible on mobile */}
            <div className="absolute inset-0 z-0 md:hidden">
              {project.mediaType === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={project.mediaSrc}
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={project.mediaSrc}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
