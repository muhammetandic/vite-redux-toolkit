import { forwardRef } from "react";

const InputComponent = forwardRef((props, ref) => {
  const { id, type, className, value, onChange, ...rest } = props;
  return (
    <input
      className={`w-full p-2 rounded border border-slate-500
        focus:outline-none focus:border focus:border-green-400 ${className}`}
      id={id}
      ref={ref}
      type={type}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
});

export const Input = forwardRef((props, ref) => {
  const { error, ...rest } = props;
  return (
    <div>
      <InputComponent {...rest} ref={ref} />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
});
