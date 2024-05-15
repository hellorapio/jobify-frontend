import { FC } from "react";
import Logo from "./shared/Logo";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import constants from "@/constants";

const Footer: FC = () => {
  return (
    <footer className="pt-6 pb-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-0">
          <div className="col-span-2">
            <Logo />
            <p className="text-sm md:text-md text-gray-500 w-full">
              ©2024 Jobify. All rights reserved.
            </p>
            <p className="text-xs md:text-sm text-gray-500 w-full">
              Made with ❤️ by{" "}
              <span className="text-primary">Abdelrahman Osman</span>
            </p>
          </div>
          <div className="grid col-span-4 md:grid-cols-3 grid-cols-2 gap-8">
            <div className="">
              <h3 className="font-semibold mb-2">Links</h3>
              <ul className="flex flex-col gap-2">
                {constants.links.map((item) => (
                  <li
                    key={item.name}
                    className="text-sm text-muted-foreground underline"
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h3 className="font-semibold mb-2">Help</h3>
              <ul className="flex flex-col gap-2">
                {constants.helpItems.map((item) => (
                  <li
                    key={item.name}
                    className="text-sm text-muted-foreground underline"
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Social Links</h3>
              <div className="flex gap-4 text-primary">
                <Facebook />
                <Instagram />
                <Youtube />
                <Twitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
