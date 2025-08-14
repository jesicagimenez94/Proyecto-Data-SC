
const Button = ({
  variant = "primary",
  href,
  iconLeft,
  iconRight,
  className,
  children,
  ...props
}) => {
  // estilos base comunes para los botones
  const baseStyles = "px-5 py-2 rounded-[100px] font-medium flex items-center justify-center gap-2 transition-all duration-300 border-transparent";
  
  // combinación de estilos base y variantes, más clases adicionales
  const buttonClasses = `${baseStyles} ${className || ""}`;

  // si se pasa un href, renderiza un enlace <a>
  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {iconLeft && <span>{iconLeft}</span>}
        {children}
        {iconRight && <span>{iconRight}</span>}
      </a>
    );
  }

  // si no hay href, renderiza un <button>
  return (
    <button className={buttonClasses} {...props}>
      {iconLeft && <span>{iconLeft}</span>}
      {children}
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
};

export default Button;
