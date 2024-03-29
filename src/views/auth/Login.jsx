import { Button } from "../../components/Base/Button";
import { Input } from "../../components/Base/Input";
import { useLoginMutation } from "../../services/auth";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "../../components/Base/Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { enqueueSnackbar } from "notistack";

const loginValidation = z.object({
  username: z.string().min(1, "Username required."),
  password: z.string().min(1, "Password required."),
});

export const Login = () => {
  const [login, response] = useLoginMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginValidation),
  });

  useEffect(() => {
    if (response.isSuccess) {
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      navigate("/");
    }
    if (response.isError) {
      enqueueSnackbar(response?.error?.data?.error, { variant: "error" });
    }
  }, [response, navigate]);

  const handleLogin = (data, event) => {
    event.preventDefault();
    login(data);
  };

  return (
    <>
      {response.isLoading && <Spinner />}
      <div className="bg-gray-300 p-10 text-slate-800">
        <form onSubmit={handleSubmit(handleLogin)}>
          <div>
            <h2 className="text-2xl text-center font-bold">
              Welcome to My System
            </h2>
            <p className="text-center mb-6">It is a small accounting app</p>
          </div>
          <div className="mb-2">
            <div className="text-left">Username:</div>
            <Input
              type="text"
              {...register("username")}
              error={errors.username}
            />
          </div>
          <div className="mb-8">
            <div>Password:</div>
            <Input
              type="password"
              {...register("password")}
              error={errors.password}
            />
          </div>
          <div className="text-center">
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    </>
  );
};
