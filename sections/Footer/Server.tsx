import LogoFull from "../../components/SVGComponents/LogoFull";
import DashedLink from "@/components/Server/DashedLink";
import Link from "next/link";
import ContactUs from "../../components/Server/ContactUs";

interface LinkItem {
  href: string;
  link: string;
}

export default function Footer() {
  const data: LinkItem[] = [
    { href: "", link: "Home" },
    {
      href: "#projects",
      link: "Projects",
    },
    {
      href: "#resume",
      link: "Resume",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] md:px-16">
      <div className="grid grid-rows-[repeat(4,auto)] border-b border-white/50 px-3-75 py-20 text-[#e0e0e0] md:grid-cols-[1fr_1.375fr] md:grid-rows-2 md:px-0 md:pt-36 md:pb-28-75 [&_.animated-underline]:bg-[#e0e0e0]">
        <div>
          <LogoFull className="h-auto w-1/2 [&_path]:[fill:white]" />
          <ContactUs className="mt-17-5 hidden w-fit flex-col gap-y-8 text-base max-md:mt-16 md:flex [&>div]:gap-6 md:[&>div]:gap-4" />
        </div>
        <ol className="mt-20 flex flex-col gap-y-5 text-xl [line-height:1.1] font-light md:mt-0 md:gap-y-6-5 md:text-30">
          {data.map((eachColData, i) =>
            i === 0 ? (
              <div
                key={"list-item-" + (i + 1)}
                className="underline decoration-[#e0e0e0] decoration-[1px] underline-offset-2"
              >
                {eachColData.link}
              </div>
            ) : (
              <Link href={eachColData.href} key={"list-item" + (i + 1)}>
                <DashedLink
                  key={"list-item-" + (i + 1)}
                  className="w-fit [line-height:1] [&_.animated-underline]:bg-[#e0e0e0]"
                >
                  {eachColData.link}
                </DashedLink>
              </Link>
            ),
          )}
        </ol>
        <ContactUs className="gap-y-8 text-base max-md:mt-16 md:hidden [&>div]:gap-x-5" />
      </div>
      <div className="flex flex-col gap-y-4 bg-[#0a0a0a] px-3-75 py-7-5 text-xs text-[#e0e0e0] md:flex-row md:justify-between md:pb-10 md:text-base [&_.animated-underline]:h-px [&_.animated-underline]:bg-[#e0e0e0]">
        <div className="md:flex-1">© 2025 KrishnaPrasath. All Rights Reserved</div>
        <Link href="#privacy">
          <DashedLink className="w-fit cursor-pointer">
            Privacy Policy
          </DashedLink>
        </Link>
        <div className="flex flex-1 justify-end">
          <DashedLink className="w-fit cursor-default">
            Portfolio by KrishnaPrasath
          </DashedLink>
        </div>
      </div>
    </div>
  );
}
