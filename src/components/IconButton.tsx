import React from "react";

interface IconButtonProps {
  alt: string;
  iconPath: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: "small" | "medium" | "large";
}


export const IconButton = ({
  alt,
  iconPath,
  size = "medium",
  onClick
}: IconButtonProps) => {
  return (
    <button className={`text-sm text-primary ${size}` } onClick={onClick}><img src={iconPath} alt={alt} /></button>
  );
}