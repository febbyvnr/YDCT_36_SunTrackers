import { Outlet, useLocation } from "react-router-dom";
import DynamicPageTitle from "../components/DynamicPageTitle";
import SideBar from "../pages/SideBar";

const MainLayout = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    return (
        <div className="flex w-full h-screen">
            <div className={isLoginPage ? "w-full" : "ml-64 flex-1 overflow-y-auto"}>
                <DynamicPageTitle />
                
                {/* Sidebar */}
                {!isLoginPage && (
                    <div className="w-64 h-screen fixed left-0 top-0 z-50">
                        <SideBar />
                    </div>
                )}

                {/* CURRENT PAGE */}
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
