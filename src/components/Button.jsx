const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  styles,
  className,
  iconClassName
}) => {
  return (
    <button
      className={`
      flex group justify-center items-center gap-2
      px-7 py-4
      font-montserrat text-lg leading-none
      rounded-full
      transition-all duration-300 ease-in-out
      ${backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} ${className}`
          : "bg-black text-white border border-white/20 hover:bg-white hover:text-black hover:border-white"
        }

      hover:scale-105 hover:shadow-lg

      ${fullWidth ? "w-full" : ""}
      ${styles}
      `}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="icon"
          className={`
          ml-2
          w-5 h-5
          transition-all duration-300
          group-hover:translate-x-2
          group-hover:scale-110
          group-hover:rotate-6

          ${iconClassName}
      `}
        />
      )}
    </button>
  );
};

export default Button;