import React from "react";

interface InputProps {
  placeholder: string;
  isLarge?: boolean;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  type?: string; 
}

export default function Input({
  placeholder,
  isLarge,
  name,
  value,
  onChange,
  required,
  type = "text", 
}: InputProps) {
  return (
    <input
      type={type} 
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`box-border bg-white border-4 border-textBlue text-black text-base p-3 w-full ${
        isLarge ? "h-[394px]" : "h-[53px]"
      }`}
    />
  );
}
