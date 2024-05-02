import Logo from "../shared/Logo";
import MobileNav from "./MobileNav";
import UserStatus from "./UserStatus";
import NavItems from "./NavItems";
import { Separator } from "../ui/separator";
import { Menu } from "lucide-react";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className=" sticky z-40 top-0 inset-x-0 h-16">
      <div className="relative border-b-[1px]">
        <div className="container">
          <div className="flex h-16 items-center lg:gap-6">
            <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="flex">
              <button
                type="button"
                onClick={() => setIsOpen((s) => !s)}
                className="lg:hidden relative -ml-5 rounded-md text-inherit"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

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
      </div>
    </nav>
  );
};

export default Nav;
