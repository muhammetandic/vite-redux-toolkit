import { createBrowserRouter } from "react-router-dom";
import { Login } from "./views/auth/Login.jsx";
import { AppLayout } from "./layout/App.jsx";
import { AuthLayout } from "./layout/Auth.jsx";
import { Dashboard } from "./views/app/Dashboard.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <Dashboard />
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
