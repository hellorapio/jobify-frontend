import { Home, ListTodo, Package } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

// import Notifications from "../Nav/Notifications";
import Logo from "../shared/Logo";
import { Button } from "../ui/button";
import { useAuthContext } from "@/hooks/auth/useAuthContext";

export default function DashboardNav() {
  const { user } = useAuthContext();
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 justify-center items-center p-8 lg:p-10">
          <Logo />
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary bg-muted"
                  : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              }
            >
              <Home className="h-4 w-4" />
              Dashboard
            </NavLink>
            <NavLink
              to="/dashboard/applications"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary bg-muted"
                  : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              }
            >
              <ListTodo className="h-4 w-4" />
              Applications
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </NavLink>

            {user.role !== "worker" && (
              <>
                <NavLink
                  to="/dashboard/my-jobs"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary bg-muted"
                      : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  }
                >
                  <Package className="h-4 w-4" />
                  Jobs
                </NavLink>
                <Button size={"sm"} className="mt-2">
                  <Link to="/dashboard/new-job">Post New Job</Link>
                </Button>
              </>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}
