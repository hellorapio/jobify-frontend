import MobileNav from "@/components/dashboard/MobileNav";
import Nav from "@/components/dashboard/Nav";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Nav />

      <div className="flex flex-col">
        <MobileNav />
        <Outlet />
      </div>
    </div>
  );
}
