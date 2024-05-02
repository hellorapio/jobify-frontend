import Logo from "./shared/Logo";
import MobileNav from "./MobileNav";
import UserStatus from "./shared/UserStatus";
import NavItems from "./NavItems";
import { Separator } from "./ui/separator";

const Nav = () => {
  return (
    <nav className=" sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative border-b-2">
        <div className="container">
          <div className="flex h-16 items-center gap-6">
            <MobileNav />

            <div className="ml-4 flex lg:ml-0 ">
              <Logo />
            </div>

            <Separator orientation="vertical" className="h-1/2 hidden lg:inline" />

            <div className="hidden z-50 lg:block">
              <NavItems />
            </div>

            <div className="ml-auto flex items-center h-full">
              <div className="hidden lg:flex lg:flex-1 lg:items-center h-full lg:justify-end lg:space-x-6">
                <UserStatus />
              </div>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Nav;
