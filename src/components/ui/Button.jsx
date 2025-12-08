import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  icon: Icon,
  iconPosition = "right",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-success text-white hover:bg-accent shadow-sm hover:shadow-lg hover:scale-105 focus:ring-success",
    secondary:
      "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white focus:ring-primary",
    outline:
      "bg-transparent border border-secondary-dark text-primary hover:border-accent hover:text-accent focus:ring-accent",
    ghost: "bg-transparent text-primary hover:bg-secondary",
    dark: "bg-primary text-white hover:bg-primary-light",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="mr-2" size={20} />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="ml-2" size={20} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
