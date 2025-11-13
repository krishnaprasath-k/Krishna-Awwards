import { Fragment } from "react";
import ResponsiveMaskTextVariant from "@/components/Client/ResponsiveMaskTextVariant";
import ResponsiveMarquee from "@/components/Client/ResponsiveMarquee";
import SustainableRetreatClient from "@/components/Client/SustainableRetreatClient";

export default function SustainableRetreat() {
  return (
    <div className="bg-[#1a1a1a] py-36 text-[#e0e0e0] md:py-60">
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
      >
        {"My Approach • My Approach • My Approach • "}
      </ResponsiveMarquee>

      <div className="mt-18 flex flex-col gap-y-14 px-8-25 md:mt-26 md:grid md:grid-cols-3 md:grid-rows-[auto_auto] md:gap-y-24 md:px-16">
        <div className="flex flex-col gap-14 md:col-span-2 md:col-start-2 md:flex-row">
          <ResponsiveMaskTextVariant
            desktop={[
              <Fragment key="d-0">
                In my projects, I believe in creating
              </Fragment>,
              <Fragment key="d-1">
                meaningful connections, building scalable
              </Fragment>,
              <Fragment key="d-2">
                architectures, fostering clean code
              </Fragment>,
              <Fragment key="d-3">
                practices, and prioritizing user-centered
              </Fragment>,
              <Fragment key="d-4">
                design. These values shape every aspect of
              </Fragment>,
              <Fragment key="d-5">
                the personalized development experience.
              </Fragment>,
            ]}
            mobile={[
              <Fragment key="m-0">
                In my projects, I believe in creating
              </Fragment>,
              <Fragment key="m-1">
                meaningful connections, building scalable
              </Fragment>,
              <Fragment key="m-2">
                architectures, fostering clean code
              </Fragment>,
              <Fragment key="m-3">
                practices, and prioritizing user-centered
              </Fragment>,
              <Fragment key="m-4">
                design. These values shape every aspect
              </Fragment>,
              <Fragment key="m-5">of the personalized development</Fragment>,
              <Fragment key="m-6">experience.</Fragment>,
            ]}
            className="text-base [line-height:1.33] md:text-lg"
          />

          <ResponsiveMaskTextVariant
            desktop={[
              <Fragment key="d2-0">
                I envision a digital world where code,
              </Fragment>,
              <Fragment key="d2-1">
                design, and user experience thrive in
              </Fragment>,
              <Fragment key="d2-2">
                harmony, fostering connections between
              </Fragment>,
              <Fragment key="d2-3">
                technology and people, redefining digital
              </Fragment>,
              <Fragment key="d2-4">excellence beyond aesthetics.</Fragment>,
            ]}
            mobile={[
              <Fragment key="m2-0">
                I envision a digital world where code,
              </Fragment>,
              <Fragment key="m2-1">
                design, and user experience thrive in
              </Fragment>,
              <Fragment key="m2-2">
                harmony, fostering connections between
              </Fragment>,
              <Fragment key="m2-3">
                technology and people, redefining digital
              </Fragment>,
              <Fragment key="m2-4">excellence beyond aesthetics.</Fragment>,
            ]}
            className="text-base [line-height:1.33] md:text-lg"
          />
        </div>
        <SustainableRetreatClient />
      </div>
    </div>
  );
}
