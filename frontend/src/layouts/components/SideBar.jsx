import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import routes from "@/config/routes";
import {
  LayoutDashboard,
  ChartNoAxesCombined,
  Search,
} from "lucide-react";

import GoIcon from "@/assets/golden_owl.svg?react";

const navigation = [
  { name: "Dashboard", to: routes.dashboard, icon: LayoutDashboard },
  { name: "Search Scores", to: routes.search, icon: Search },
  { name: "Report", to: routes.report, icon: ChartNoAxesCombined },
];
function Sidebar() {
  return (
    <div className="h-screen bg-background border-r border-border flex flex-col">
      <div className="p-6">
        <Link to={routes.dashboard} className="flex items-center space-x-2">
          <div className="w-12 h-12 p-1 bg-blue-800 rounded-lg flex items-center justify-center">
            <GoIcon />
          </div>
          <span className="text-xl font-bold">Golden Owl</span>
        </Link>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {navigation.map((item) => (
          <NavLink key={item.name} to={item.to} className={({ isActive }) =>
            isActive
              ? "bg-primary/20 text-primary dark:bg-primary/20"
              : "hover:bg-gray-100 dark:hover:bg-gray-800"
          }>
            <Button
              variant="ghost"
              className="w-full justify-start h-11 font-bold flex"
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Button>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;