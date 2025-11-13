"use client";
import { useState } from "react";

interface SelectClientProps {
  options: string[];
  defaultSelection: string;
}

export default function SelectClient({
  defaultSelection,
  options,
}: SelectClientProps) {
  const [selectedOption, setSelectedOption] =
    useState<string>(defaultSelection);
  return (
    <div className="cursor-pointer border-b border-[#404040] bg-[#1a1a1a] px-4 py-3 md:px-6">
      <span className="text-xs [line-height:1] md:text-sm">
        {selectedOption}
      </span>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="cursor-pointer bg-[#1a1a1a] text-xs outline-none md:text-base"
      >
        {options.map((option, i) => (
          <option key={option + i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
