import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

import { Badge } from "../ui/badge";

import {
  Menu,
  Home,
  ListTodo,
  Package,
  // Search,
  CircleUser,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import Logo from "../shared/Logo";
import { Button } from "../ui/button";
// import { Input } from "../ui/input";
import { SheetTrigger, SheetContent, Sheet } from "../ui/sheet";

export default function MobileNav() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Logo></Logo>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground bg-muted"
                  : "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              }
            >
              <Home className="h-5 w-5" />
              Dashboard
            </NavLink>
            <NavLink
              to="/dashboard/applications"
              className={({ isActive }) =>
                isActive
                  ? "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground bg-muted"
                  : "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              }
            >
              <ListTodo className="h-5 w-5" />
              Applications
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </NavLink>
            <NavLink
              to="/dashboard/myjobs"
              className={({ isActive }) =>
                isActive
                  ? "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground bg-muted"
                  : "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              }
            >
              <Package className="h-5 w-5" />
              Jobs
            </NavLink>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1"></div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
