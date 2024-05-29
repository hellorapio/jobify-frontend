import constants from "@/constants";
import { Link } from "react-router-dom";
import SmallSpinner from "../shared/SmallSpinner";

export default function NavItems() {
  return (
    <ul className="flex gap-10 items-center font-semibold">
      {constants.navItems.map((item) => (
        <li key={item.name}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}
