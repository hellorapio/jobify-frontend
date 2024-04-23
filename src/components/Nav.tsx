import Logo from "./shared/Logo";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ui/toggle";

const Nav = () => {
  return (
    <nav className="container flex justify-between items-center my-2">
      <div>
        <Logo></Logo>
      </div>
      <ul className="flex gap-10 items-center font-semibold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <ModeToggle />
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
