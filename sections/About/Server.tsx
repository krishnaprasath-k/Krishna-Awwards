import Image from "next/image";
import { Fragment } from "react";
import AboutImage from "@/public/wellness-sanctuary.png";
import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import SectionTitle from "@/components/Server/SectionTitle";
import MaskText from "@/components/Server/MaskText";
import StyledLink from "@/components/Server/StyledLink";
import ResponsiveImage from "@/components/Client/ResponsiveImage";
export default function About() {
  const textLines = {
    desktop: [
      <Fragment key="desktop-1">
        <span>Innovative</span> development,
      </Fragment>,
      <Fragment key="desktop-2">creativity, and technology</Fragment>,
      <Fragment key="desktop-3">meet in harmony</Fragment>,
    ],
    mobile: [
      <Fragment key="mobile-1">
        <span>Innovative</span> development,
      </Fragment>,
      <Fragment key="mobile-2">creativity, and technology meet</Fragment>,
      <Fragment key="mobile-3">in harmony</Fragment>,
    ],
  };

  return (
    <div className="flex flex-col bg-[#1a1a1a] text-[#e0e0e0] md:grid md:grid-cols-2">
      <ResponsiveImage parallaxAmount={20}>
        <Image
          src={AboutImage}
          alt="about-image"
          className="h-auto w-full"
        />
      </ResponsiveImage>
      <div className="flex flex-col justify-center px-3-75 py-40 md:py-0">
        <div className="flex flex-col gap-12 md:ml-36 md:w-fit md:gap-16">
          <SectionTitle>Development Philosophy</SectionTitle>
          <ResponsiveMaskText
            {...textLines}
            className="text-24 [line-height:1] md:text-40"
          />
          <MaskText
            lines={[
              <>In my work, I use a holistic development</>,
              <>approach that considers user experience,</>,
              <>performance optimization, and clean code</>,
              <>principles to deliver outstanding digital</>,
              <>solutions that exceed expectations.</>,
            ]}
            className="text-lg [line-height:1.3] font-normal"
          />
          <StyledLink href="#">
            View My Projects
          </StyledLink>
        </div>
      </div>
    </div>
  );
}
