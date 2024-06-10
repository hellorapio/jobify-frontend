import HeadStart from "./HeadStart";
import { Button } from "./ui/button";
import {
  Database,
  BadgeDollarSign,
  Paintbrush,
  Braces,
  SquareKanban,
  BriefcaseBusiness,
  Headset,
  SquarePen,
} from "lucide-react";

const categories = [
  {
    name: "Software Development",
    icon: <Braces className="text-primary text-center w-8 h-8" />,
  },
  {
    name: "Data Science",
    icon: <Database className="text-primary text-center w-8 h-8" />,
  },
  {
    icon: <Paintbrush className="text-primary text-center w-8 h-8" />,
    name: "Design",
  },
  {
    name: "Marketing",
    icon: <SquarePen className="text-primary text-center w-8 h-8" />,
  },
  {
    name: "Customer Support",
    icon: <Headset className="text-primary text-center w-8 h-8" />,
  },
  {
    name: "Sales",
    icon: <BadgeDollarSign className="text-primary text-center w-8 h-8" />,
  },
  {
    name: "Project Management",
    icon: <SquareKanban className="text-primary text-center w-8 h-8" />,
  },
  {
    name: "Business Development",
    icon: (
      <BriefcaseBusiness className="text-primary text-center w-8 h-8" />
    ),
  },
];

export default function JobCategories() {
  return (
    <main>
      <div className="md:h-[calc(100vh-64px)] pb-12 md:pb-0">
        <div className="container flex flex-col items-center h-full mt-16">
          <HeadStart
            title="Job"
            special="Categories"
            description="Discover diverse job categories designed for every skill level
            and career path. Explore exciting opportunities tailored to
            your expertise and interests."
          />
          <div className="grid gap-6 grid-cols-1 md:grid-cols-4 mt-8 w-3/4 mx-auto">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex flex-col items-center gap-3 bg-secondary p-4 rounded-lg w-auto"
              >
                <div className="text-center rounded-lg">
                  {category.icon}
                </div>
                <div className="text-lg font-semibold">
                  {category.name}
                </div>
                <Button variant="outline">View Jobs</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
