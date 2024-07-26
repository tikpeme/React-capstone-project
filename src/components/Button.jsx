const Button = ({ children, className, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` bg-primary  rounded-8 px-4 py-1 categories w-fit  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
