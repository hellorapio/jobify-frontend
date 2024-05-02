import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MobileNavItems from "./MobileNavItems";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const MobileNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (s: boolean) => void;
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

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
    <div className="mr-4 bg-background z-[20]">
      {isOpen && (
        <div
          className={cn(
            "lg:hidden fixed right-0 -top-16 overscroll-y-none inset-0 flex",
            {
              "bg-background": isOpen,
            }
          )}
        >
          <div className="w-4/5">
            <div className="relative flex w-full max-w-sm flex-col overflow-y-auto ">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="lg:hidden absolute top-2 left-5 p-2 rounded-md text-inherit"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>

              {isOpen && <MobileNavItems clickHandler={closeOnCurrent} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
