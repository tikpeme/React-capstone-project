const Button = ({ children, className }) => {
  return (
    <button
      className={` bg-primary  rounded-8 px-4 py-1 categories w-fit  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
