// src/components/ui/Card.tsx
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  shadow?: "sm" | "md" | "lg" | "xl";
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = false,
  padding = "md",
  shadow = "lg",
}) => {
  const baseClasses = "bg-white rounded-2xl border border-blue-100";
  
  const hoverClasses = hover
    ? "hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    : "";
  
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };
  
  const shadowClasses = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };
  
  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;