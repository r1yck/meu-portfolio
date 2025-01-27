import React from "react";

interface InputProps {
  placeholder: string;
  isLarge?: boolean;
}

export default function Input({ placeholder, isLarge }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`box-border bg-white border-4 border-[#4C70EF] text-black text-base p-3 w-full ${
        isLarge ? "h-[394px]" : "h-[53px]"
      }`}
    />
  );
}
