import { useTheme } from "@/hooks/useThemeContext";
import { FC } from "react";
import { Link } from "react-router-dom";

const Logo: FC = () => {
  const theme = useTheme();

  return (
    <Link to="/">
      <img
        src={
          theme.theme === "system"
            ? theme.systemTheme
              ? "logo-dark.png"
              : "logo-light.png"
            : theme.theme === "dark"
            ? "logo-dark.png"
            : "logo-light.png"
        }
        alt="Jobify"
        className="w-36"
      />
    </Link>
  );
};

export default Logo;
