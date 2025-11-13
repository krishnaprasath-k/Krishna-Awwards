import { Fragment } from "react";
import ResponsiveMaskTextVariant from "@/components/Client/ResponsiveMaskTextVariant";
import ResponsiveMarquee from "@/components/Client/ResponsiveMarquee";
import SustainableRetreatClient from "@/components/Client/SustainableRetreatClient";

export default function Skills() {
  return (
    <div id="skills" className="relative bg-[#1a1a1a] text-[#e0e0e0]">
      {/* Large Background Text - Always Visible */}
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden py-20 md:py-32">
        <h2
          className="text-center text-[20vw] font-light leading-none tracking-tighter text-white/5 md:text-[15vw]"
          style={{
            fontFamily: "inherit",
            textTransform: "uppercase",
          }}
        >
          Skills
        </h2>
      </div>

      {/* Content Section - Comes after scrolling */}
      <div className="relative px-4 pb-20 md:px-16 md:pb-32">
        <ResponsiveMarquee
          animationConfig={{
            mobile: {
              max: "-887px",
              speed: 50,
            },
            desktop: {
              max: "-88.7%",
              speed: 5,
            },
          }}
          className="mb-12 text-white/80 md:mb-20"
        >
          {"Skills & Technologies • Skills & Technologies • Skills & Technologies • "}
        </ResponsiveMarquee>

        <div className="mb-12 md:mb-20">
          <ResponsiveMaskTextVariant
            desktop={[
              <Fragment key="d-0">
                I specialize in modern web development,
              </Fragment>,
              <Fragment key="d-1">
                combining cutting-edge technologies with
              </Fragment>,
              <Fragment key="d-2">
                creative solutions to build exceptional
              </Fragment>,
              <Fragment key="d-3">
                digital experiences that users love.
              </Fragment>,
            ]}
            mobile={[
              <Fragment key="m-0">
                I specialize in modern web
              </Fragment>,
              <Fragment key="m-1">
                development, combining cutting-
              </Fragment>,
              <Fragment key="m-2">
                edge technologies with creative
              </Fragment>,
              <Fragment key="m-3">
                solutions to build exceptional digital
              </Fragment>,
              <Fragment key="m-4">experiences that users love.</Fragment>,
            ]}
            className="max-w-4xl text-base leading-relaxed md:text-lg"
          />
        </div>

        <SustainableRetreatClient />
      </div>
    </div>
  );
}
