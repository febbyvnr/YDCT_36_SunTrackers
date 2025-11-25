import { Outlet, useLocation } from "react-router-dom";
import DynamicPageTitle from "../components/DynamicPageTitle";
import SideBar from "../pages/SideBar";

const MainLayout = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    return (
        <div className="flex w-full h-screen">
            
            {/* Sidebar */}
            {!isLoginPage && (
                <div className="w-64 h-full fixed left-0 top-0">
                    <SideBar />
                </div>
            )}

            {/* CONTENT */}
            <div className={isLoginPage ? "w-full" : "ml-64 flex-1 overflow-y-auto p-8"}>
                <DynamicPageTitle />
                <Outlet />

                {!isLoginPage && (
                    <footer className="mt-20 border-t pt-6 text-center text-gray-500">
                        © 2025 by Team 36
                    </footer>
                )}
            </div>
        </div>
    );
};

export default MainLayout;
