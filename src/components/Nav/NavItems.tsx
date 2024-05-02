import { Link } from "react-router-dom";

const items = [
  {
    name: "Jobs",
    path: "/jobs",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Companies",
    path: "/companies",
  },
  {
    name: "Top 5 Jobs",
    path: "/top-5-jobs",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

export default function NavItems() {
  return (
    <ul className="flex gap-10 items-center font-semibold">
      {items.map((item) => (
        <li key={item.name}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}
