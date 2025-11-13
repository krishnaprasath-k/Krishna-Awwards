"use client";
import { useIsMobile } from "@/app/providers";
import MaskText from "../Server/MaskText";
import cn from "@/utils/cn";
import { CSSProperties, ReactNode } from "react";

interface ResponsiveMaskTextVariantProps {
  mobile: ReactNode[];
  desktop: ReactNode[];
  className?: string;
  style?: CSSProperties;
}
export default function ResponsiveMaskTextVariant({
  desktop,
  mobile,
  className,
  style,
}: ResponsiveMaskTextVariantProps) {
  const isMobile = useIsMobile();
  if (typeof isMobile !== "boolean") {
    return null;
  }
  const lines = isMobile ? mobile : desktop;
  return (
    <MaskText
      lines={lines}
      className={cn(
        "font-light text-nowrap text-[#e0e0e0] [&_span]:text-[#808080]",
        className,
      )}
      style={{ ...style }}
    />
  );
}
