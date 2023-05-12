import { createBrowserRouter } from "react-router-dom";
import Todos from "./views/app/Todos.jsx";
import { Login } from "./views/auth/Login.jsx";
import { AppLayout } from "./layout/App.jsx";
import { AuthLayout } from "./layout/Auth.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <Todos />
      </AppLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthLayout>
        <Login />
      </AuthLayout>
    ),
  },
]);
