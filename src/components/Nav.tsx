import Logo from "./shared/Logo";
import MobileNav from "./MobileNav";
import UserStatus from "./UserStatus";
import NavItems from "./NavItems";
import { Separator } from "./ui/separator";

const Nav = () => {
  return (
    <nav className=" sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative border-b-[1px]">
        <div className="container">
          <div className="flex h-16 items-center lg:gap-6">
            <MobileNav />

            <div className="ml-4 flex lg:ml-0">
              <Logo />
            </div>

            <Separator
              orientation="vertical"
              className="h-1/2 hidden lg:inline"
            />

            <div className="hidden z-50 lg:block">
              <NavItems />
            </div>

            <div className="ml-auto h-full">
              <div className="lg:flex-1 h-full flex items-center lg:justify-end lg:space-x-6">
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
