import { Outlet, useLocation } from "react-router-dom";
import DynamicPageTitle from "../components/DynamicPageTitle";
import SideBar from "../pages/SideBar";

const MainLayout = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    return (
        <div className="flex">
            {!isLoginPage && <SideBar />}

            <div className={isLoginPage ? "w-full" : "flex-1 mt-4 pt-5"}>
                <DynamicPageTitle />
                <Outlet />

                {!isLoginPage && (
                    <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <div className="col-md-4 d-flex align-items-center">
                            <span className="mb-3 mb-md-0 text-body-secondary">© 2025 by Team 36</span>
                        </div>
                    </footer>
                )}
            </div>
        </div>
    );
};

export default MainLayout;
