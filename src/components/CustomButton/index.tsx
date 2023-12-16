'use client';

import { CustomButtonProps } from "@/Types/CustomButtonProps";

export default function CustomButton({ containerStyles, ...props }: CustomButtonProps) {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      {...props}
    >
      <span className="flex-1">
        {props.title}
      </span>
    </button>
  );

};