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
    name: "Categories",
    path: "/categories",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

export default function MobileNavItems({
  clickHandler,
}: {
  clickHandler: (href: string) => void;
}) {
  return (
    <ul className="container flex gap-5 flex-col font-semibold mt-4 bg-background pb-4 pt-12">
      {items.map((item) => (
        <li key={item.name} className=" pb-1">
          <Link onClick={() => clickHandler(item.path)} to={item.path}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
