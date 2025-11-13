import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import { WindowSizeProvider } from "./providers";

const BasisGrotesquePro = localFont({
  src: [
    {
      path: "./fonts/BasisGrotesquePro-Light.woff2",
      weight: "300",
    },
    { path: "./fonts/BasisGrotesquePro-Regular.woff2", weight: "400" },
    { path: "./fonts/BasisGrotesquePro-Medium.woff2", weight: "500" },
  ],
  variable: "--font-grotesque",
});

export const metadata: Metadata = {
  title: "KrishnaPrasath - Web Developer Portfolio",
  description: "Full-stack web developer specializing in modern web technologies, creative solutions, and innovative digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${BasisGrotesquePro.variable} overflow-x-clip antialiased selection:bg-[#404040] selection:text-[#ffffff]`}
        >
          <WindowSizeProvider>{children}</WindowSizeProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
