import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BaseLayout from "./BaseLayout";
import About from "./About";
import Home from "./Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
