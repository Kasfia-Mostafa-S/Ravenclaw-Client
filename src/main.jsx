import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Main/Main";
import HomePage from "./Home/HomePage/HomePage";
import Login from "./Layout/Login/Login";
import Register from "./Layout/Register/Registration";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import DashboardPage from "./Pages/Dashboard/DashBoardPage/DashboardPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Apartments from "./Pages/Apartments/Apartments";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "allApartments",
        element: <Apartments />,
        loader: () => fetch(`"http://localhost:5000/apartmentsCount`),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </QueryClientProvider>
  </AuthProvider>
);
