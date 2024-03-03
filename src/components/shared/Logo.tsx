import { FC } from "react";
import { Link } from "react-router-dom";

const Logo: FC = () => {
  return (
    <Link to="/">
      <img src="logo.png" alt="Jobify" className="w-12"/>
    </Link>
  );
};

export default Logo;
