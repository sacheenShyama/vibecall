import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "@/features/auth/pages/Login";
import Register from "@/features/auth/pages/Register";
import MainLayout from "../layouts/MainLayout";
import Dasbhoard from "@/features/dashboard/pages/Dasbhoard";
import Profile from "@/features/profile/pages/Profile";
import ProtectedRoute from "../ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    element: <ProtectedRoute />,
    children:[
        {element: <MainLayout />,
            children:[
                {path:'dasboard',element: <Dasbhoard />},
                {path:'profile',element: <Profile />}
            ]
        }
    ]
  }
]);
