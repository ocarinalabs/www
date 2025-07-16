import React from "react";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <span className={`font-mono text-white inline ${className}`}>
      ⊨
    </span>
  );
};

export default Logo;
