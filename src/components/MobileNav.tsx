import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MobileNavItems from "./MobileNavItems";
import { cn } from "@/lib/utils";

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

  return (
    <div className="mr-4 bg-background">
      <div
        className={cn(
          "lg:hidden fixed overscroll-y-none inset-0 z-[100] flex",
          {
            "bg-background": isOpen,
          }
        )}
      >
        <div className="w-4/5">
          <div className="relative flex w-full max-w-sm flex-col overflow-y-auto ">
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setIsOpen((s) => !s)}
                className="lg:hidden relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-inherit"
              >
                {isOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>

            {isOpen && <MobileNavItems clickHandler={closeOnCurrent} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
