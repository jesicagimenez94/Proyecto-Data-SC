
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

  // definición de variantes de estilo para el botón
  const variants = {
    primary: "bg-[#a33cfa] text-white",
    outline: "bg-[#08030d0d] text-[#08030d]",
  };

  // combinación de estilos base y variantes, más clases adicionales
  const buttonClasses = `${baseStyles} ${variants[variant] || ""} ${className || ""}`;

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
