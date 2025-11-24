import { Outlet } from "react-router-dom";
import DynamicPageTitle from "../components/DynamicPageTitle";

const routes = [
    {
        path: "/",
        name: "Home",
    },
    {
        path: "/login",
        name: "Dashboard",
    },
];

const MainLayout = () => {
    return (
        <div className="mt-4 pt-5">
            <DynamicPageTitle />
            <Outlet />
            <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-3 mb-md-0 text-body-secondary">© 2025 by Team 36</span>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
