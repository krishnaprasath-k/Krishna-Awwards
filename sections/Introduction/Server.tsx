import { Fragment } from "react";
import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import MaskText from "@/components/Server/MaskText";
import SectionTitle from "@/components/Server/SectionTitle";
import IntroductionImage from "@/public/introduction-image.png";
import * as motion from "motion/react-client";
import Image from "next/image";
import ResponsiveImage from "@/components/Client/ResponsiveImage";

export default function IntroductionServer() {
  return (
    <div className="grid grid-rows-[auto_auto_auto] gap-y-12 bg-[#0a0a0a] px-3-75 pt-42-5 pb-35 text-[#e0e0e0] md:grid-cols-[1fr_1.9fr] md:grid-rows-[auto_auto] md:gap-y-32 md:px-15 md:pt-56-25 md:pb-50">
      <motion.div className="mb-2 md:col-span-2 md:col-start-2 md:mb-0">
        <ResponsiveImage parallaxAmount={8}>
          <Image
            src={IntroductionImage}
            alt="introduction-image"
            className="w-full object-cover max-md:aspect-[1.18] md:h-auto"
          />
        </ResponsiveImage>
      </motion.div>

      <SectionTitle className="md:col-start-1 md:row-start-2">
        Introduction
      </SectionTitle>

      <div className="flex flex-col gap-12 md:col-span-2 md:col-start-2 md:gap-20">
        <ResponsiveMaskText
          mobile={[
            <Fragment key="m-1">Welcome to my portfolio of</Fragment>,
            <Fragment key="m-2">
              <span>creative and technical</span> excellence.
            </Fragment>,
            <Fragment key="m-3">I am KrishnaPrasath, where you will</Fragment>,
            <Fragment key="m-4">discover innovative web</Fragment>,
            <Fragment key="m-5">development solutions and</Fragment>,
            <Fragment key="m-6">stunning digital experiences</Fragment>,
            <Fragment key="m-7">crafted with passion and</Fragment>,
            <Fragment key="m-8">precision.</Fragment>,
          ]}
          desktop={[
            <Fragment key="d-1">
              Welcome to my portfolio of <span>creative and</span>
            </Fragment>,
            <Fragment key="d-2">
              <span>technical</span> excellence. I am KrishnaPrasath,
            </Fragment>,
            <Fragment key="d-3">
              where you will discover innovative web
            </Fragment>,
            <Fragment key="d-4">
              development solutions and stunning digital
            </Fragment>,
            <Fragment key="d-5">
              experiences crafted with passion
            </Fragment>,
            <Fragment key="d-6">and precision.</Fragment>,
          ]}
          className="text-24 [line-height:1] md:text-40 [&>:first-child]:indent-23"
        />

        <MaskText
          lines={[
            <Fragment key="l-1">As a full-stack developer, I use modern</Fragment>,
            <Fragment key="l-2">technologies and best practices that</Fragment>,
            <Fragment key="l-3">
              consider user experience, performance,
            </Fragment>,
            <Fragment key="l-4">
              and scalability to create exceptional
            </Fragment>,
            <Fragment key="l-5">web applications.</Fragment>,
          ]}
          className="text-base [line-height:1.3] font-normal md:text-lg"
        />
      </div>
    </div>
  );
}
