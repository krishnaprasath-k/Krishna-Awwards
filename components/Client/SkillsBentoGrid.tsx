"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Skill {
  title: string;
  category: string;
  description: string;
  color: string;
  bgGradient: string;
  image1: string;
  image2: string;
}

interface SkillsBentoGridProps {
  skills: Skill[];
}

export default function SkillsBentoGrid({ skills }: SkillsBentoGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set initial state - cards are hidden
    gsap.set(cardsRef.current, {
      opacity: 0,
      scale: 0.8,
    });

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Define different entry directions for variety
        const directions = [
          { x: -200, y: 0 },    // From left
          { x: 200, y: 0 },     // From right
          { x: 0, y: 200 },     // From bottom
          { x: -200, y: 0 },    // From left
          { x: 200, y: 0 },     // From right
          { x: 0, y: 200 },     // From bottom
        ];

        const direction = directions[index % directions.length];

        // Set initial position outside viewport
        gsap.set(card, {
          x: direction.x,
          y: direction.y,
        });

        // Animate from outside viewport into position
        gsap.to(card, {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
            toggleActions: "play none none reverse",
            scrub: 1, // Smooth scroll-linked animation
          },
        });

        // Number badge animation
        const badge = card.querySelector(".number-badge");
        if (badge) {
          gsap.set(badge, {
            scale: 0,
            rotation: -360,
          });

          gsap.to(badge, {
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [skills]);

  return (
    <div ref={containerRef} className="w-full">
      {/* SVG Filter for glass effect */}
      <svg className="hidden">
        <defs>
          <filter id="lensFilter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>
      </svg>

      {/* Simple Square Grid Layout */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => {
          return (
            <div
              key={skill.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="glass-container group relative overflow-hidden rounded-2xl shadow-lg"
              style={{
                background: "transparent",
              }}
            >
              {/* Hover Image Overlay - Image 2 appears on hover */}
              <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <Image
                  src={skill.image2}
                  alt={`${skill.title} hover`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Base Image - Image 1 visible by default */}
              <div className="absolute inset-0 z-0 opacity-100 transition-opacity duration-500 group-hover:opacity-0">
                <Image
                  src={skill.image1}
                  alt={skill.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="glass-content relative z-10 flex aspect-square flex-col justify-end p-6 opacity-100 transition-opacity duration-500 group-hover:opacity-0 md:p-8">
                {/* Number Badge */}
                <div
                  className="number-badge absolute right-4 top-4 flex size-10 items-center justify-center rounded-full border border-white/40 md:right-6 md:top-6 md:size-12"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                    boxShadow:
                      "0 4px 6px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <span
                    className="text-base font-light md:text-lg"
                    style={{ color: skill.color }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Category */}
                <div
                  className="mb-2 text-xs font-normal uppercase tracking-wider"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  {skill.category}
                </div>

                {/* Title */}
                <h3
                  className="mb-3 text-2xl font-light leading-tight text-white md:text-3xl"
                  style={{
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {skill.title}
                </h3>

                {/* Description */}
                <p
                  className="text-xs leading-relaxed md:text-sm"
                  style={{ color: "rgba(255, 255, 255, 0.9)" }}
                >
                  {skill.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-3 opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                    style={{
                      filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
                    }}
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
