import React from "react";
import { Link } from "react-router-dom";

const isHashLink = (value) =>
  typeof value === "string" && value.startsWith("#");

const isExternalLink = (value) =>
  typeof value === "string" &&
  (value.startsWith("http") ||
    value.startsWith("mailto:") ||
    value.startsWith("tel:"));

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

  const link = to || href;

  // 1️⃣ Same-page hash scroll (#section)
  if (isHashLink(link)) {
    return (
      <a href={link} className={classes} {...props}>
        {content}
      </a>
    );
  }

  // 2️⃣ External / protocol links
  if (isExternalLink(link)) {
    return (
      <a
        href={link}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  // 3️⃣ Internal route (React Router)
  if (link) {
    return (
      <Link to={link} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  // 4️⃣ Normal button
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
