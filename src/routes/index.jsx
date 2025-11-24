import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import AddPanelPage from "../pages/AddPanelPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";


const router = createBrowserRouter([
    {
        path: "*",
        element: <div>Routes Not Found!</div>,
    },
    {
        element: <MainLayout />,
        children: [
        // {
        //     path: "/",
        //     element: <HomePage />,
        // },
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "/addPanel",
            element: <AddPanelPage />,
        },
        ],
    },
]);

const AppRouter = () => {
    return (
        <>
            <Toaster position="top-center" richColors />
            <RouterProvider router={router} />
        </>
    );
};

export default AppRouter;