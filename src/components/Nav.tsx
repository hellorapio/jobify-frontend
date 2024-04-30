import Logo from "./shared/Logo";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ui/toggle";
import UserStatus from "./shared/UserStatus";

const Nav = () => {
  return (
    <nav className="container flex justify-between items-center my-2">
      <div>
        <Logo></Logo>
      </div>
      <ul className="flex gap-10 items-center font-semibold">
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <UserStatus />
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
