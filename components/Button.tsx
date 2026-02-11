import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'md', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light shadow-lg hover:shadow-xl",
    outline: "border border-primary text-primary hover:bg-primary/10",
    ghost: "text-primary hover:bg-primary/10"
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-8 text-base",
    lg: "h-14 px-10 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
