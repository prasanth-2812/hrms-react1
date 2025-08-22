// src/components/ui/Button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
}) => {
  const baseClasses = "font-semibold rounded-full transition-all duration-300 hover:scale-105";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl",
    secondary: "bg-gray-100 text-gray-900 hover:bg-blue-50 hover:text-blue-600",
    outline: "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2",
    lg: "px-8 py-3 text-lg",
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;