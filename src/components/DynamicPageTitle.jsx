import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const DynamicPageTitle = () => {
    const location = useLocation();

    const switchPageTitle = (path) => {
        switch (path) {
            case "/":
                return "HomePage";
            case "/login":
                return "LoginPage";
            case "/dashboard":
                return "DashboardPage";
            default:
                return "DefaultPage";
        }
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>{switchPageTitle(location.pathname)} | SunTrackers</title>
                <meta name="description" content="SunTrackers" />
            </Helmet>
        </HelmetProvider>
    );
};

export default DynamicPageTitle;