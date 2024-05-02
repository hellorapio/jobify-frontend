import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { pathname } = useLocation();


  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen)
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="lg:hidden relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-inherit"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>
    );

  return (
    <div>
      <div className="relative z-40 lg:hidden">
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </div>

      <div className="fixed overflow-y-scroll overscroll-y-none inset-0 z-40 flex">
        <div className="w-4/5">
          <div className="relative flex w-full max-w-sm flex-col overflow-y-auto  pb-12 shadow-xl">
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 "
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-2">
              <ul>
                <li>
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-6 border-t border-b-2 px-4 py-6">
              <div className="flow-root">
                <Link
                  onClick={() => closeOnCurrent("/login")}
                  to="/sign-in"
                  className="-m-2 block p-2 font-medium "
                >
                  Login
                </Link>
              </div>
              <div className="flow-root">
                <Link
                  onClick={() => closeOnCurrent("/sign-up")}
                  to="/sign-up"
                  className="-m-2 block p-2 font-medium"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
