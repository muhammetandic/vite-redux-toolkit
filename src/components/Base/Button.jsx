export const Button = (props) => {
  const { className, children, onClick, ...rest } = props;
  return (
    <button
      className={`bg-slate-600 text-slate-200 px-4 py-2 rounded 
        hover:transition duration-150 ease-in-out 
        active:transition-transform active:duration-0 transform active:scale-95
        ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
