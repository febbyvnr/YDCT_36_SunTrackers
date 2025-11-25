import { Outlet, useLocation } from "react-router-dom";
import DynamicPageTitle from "../components/DynamicPageTitle";
import SideBar from "../pages/SideBar";

const MainLayout = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    if (isLoginPage) {
        return (
            <div className="w-full h-screen">
                <DynamicPageTitle />
                <Outlet />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-[16rem,1fr] h-screen">
            {/* Sidebar */}
            <div className="fixed left-0 top-0 w-64 h-screen z-50">
                <SideBar />
            </div>

            {/* Main Content */}
            <div className="col-start-2 flex flex-col">
                <DynamicPageTitle />
                
                {/* CURRENT PAGE */}
                <div className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </div>

                <footer className="border-t pt-6 text-center text-gray-500 mt-auto">
                    © 2025 by Team 36
                </footer>
            </div>
        </div>
    );
};

export default MainLayout;