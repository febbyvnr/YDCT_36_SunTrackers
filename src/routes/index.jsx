import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import MapView from "../pages/MapView.jsx";
// import Analytics from "../pages/AnalyticsPage.jsx";
import AddPanelPage from "../pages/AddPanelPage";
// import SettingsPage from "../pages/SettingsPage.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";


const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
        {
            path: "/",
            element: <DashboardPage />,
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "/addPanel",
            element: <AddPanelPage />,
        },
        {
            path: "/mapView",
            element: <MapView />,
        },
        // {
        //     path: "/analytics",
        //     element: <AnalyticsPage />,
        // },
        // {
        //     path: "/settings",
        //     element: <SettingsPage />,
        // },
        ],
    },
    {
        path: "*",
        element: <div>Routes Not Found!</div>,
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