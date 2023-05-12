import { useState } from "react";

export const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (key) => (event) => {
    setState({ ...state, [key]: event.target.value });
  };

  const handleSubmit = () => {
    console.log(state);
  };

  return (
    <div className="bg-gray-300 p-10 text-slate-800">
      <div>
        <div className="mb-2">
          <div className="text-left">Username:</div>
          <input
            className="w-full p-2 rounded"
            id="username"
            type="text"
            value={state.username}
            onChange={handleChange("username")}
          />
        </div>
        <div className="mb-8">
          <div>Password:</div>
          <input
            className="w-full p-2 rounded"
            type="password"
            value={state.password}
            onChange={handleChange("password")}
          />
        </div>
      </div>
      <div className="text-center">
        <button
          className="bg-slate-600 text-slate-200 px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
};
