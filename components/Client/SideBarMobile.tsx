import StyledLink from "@/components/Server/StyledLink";
import * as motion from "motion/react-client";
import NavigateSVG from "@/components/SVGComponents/NavigateSVG";
import ContactUs from "../Server/ContactUs";
import { AnimatePresence } from "motion/react";
interface LinkItem {
  href: string;
  link: string;
}
export default function SideBarMobile() {
  const links: LinkItem[] = [
    { href: "#", link: "Home" },
    {
      href: "#projects",
      link: "Projects",
    },
    { href: "#resume", link: "Resume" },
  ];
  return (
    <div className="fixed top-0 z-[30] h-screen w-full overflow-x-hidden">
      <AnimatePresence>
        <motion.div
          variants={{
            initial: { x: "100%" },
            exit: { x: "100%" },
            animate: { x: "0%" },
          }}
          initial="initial"
          animate="animate"
          transition={{
            ease: [0.24, 0.43, 0.15, 0.97],
            duration: 0.8,
          }}
          className="h-screen overflow-y-scroll bg-[#2a2a2a] px-3-75 pt-12000svh"
        >
          <span className="text-sm text-[#b0b0b0]">Discover Pages</span>
          <div className="my-3200svh text-[#ffffff]">
            {links.map(({ link, href }, i) => (
              <StyledLink
                className="mb-750svh text-lg font-light"
                key={link}
                href={href}
                underlineColor="#ffffff"
                arrowFill="#FFFFFF"
                active={i == 0}
              >
                {link}
              </StyledLink>
            ))}
            <motion.button
              className="mt-14 flex w-full cursor-pointer items-center justify-between px-6 py-5 text-lg font-light text-[#ffffff]"
              initial={{ backgroundColor: "#000000" }}
              whileHover={{ backgroundColor: "#1a1a1a" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <span>Hire me</span>
              <NavigateSVG fill="#FFFFFF" />
            </motion.button>
          </div>
          <ContactUs className="gap-y-8 text-base text-[#ffffff] max-md:mt-16 md:hidden [&>:first-child]:text-sm [&>:first-child]:text-[#b0b0b0] [&>div]:gap-x-5" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
