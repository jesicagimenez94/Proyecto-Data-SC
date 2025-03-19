const Button = ({
  variant = "primary",
  href,
  iconLeft,
  iconRight,
  className,
  children,
  ...props
}) => {
  const baseStyles = "px-5 py-2 rounded-[100px] font-medium flex items-center justify-center gap-2 transition-all duration-300 border-transparent";
  const variants = {
    primary: "bg-[#a33cfa] text-white",
    outline: "bg-[#08030d0d] text-[#08030d]",
  };

  const buttonClasses = `${baseStyles} ${variants[variant] || ""} ${className || ""}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {iconLeft && <span>{iconLeft}</span>}
        {children}
        {iconRight && <span>{iconRight}</span>}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {iconLeft && <span>{iconLeft}</span>}
      {children}
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
};

export default Button;
