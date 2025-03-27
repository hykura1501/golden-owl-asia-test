import routes from "@/config/routes";

import Dashboard from "@/pages/Dashboard"
import Report from "@/pages/Report";
import SearchScores from "@/pages/SearchSocres";


const publicRoutes = [
    { path: routes.dashboard, component: Dashboard },
    { path: routes.report, component: Report },
    { path: routes.search, component: SearchScores },
]

export default publicRoutes;