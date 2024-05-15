import { Button } from "./ui/button";

const categories = [
  {
    name: "Software Development",
  },
  {
    name: "Data Science",
  },
  {
    name: "Design",
  },
  {
    name: "Marketing",
  },
  {
    name: "Customer Support",
  },
  {
    name: "Sales",
  },
  {
    name: "Project Management",
  },
  {
    name: "Business Development",
  },
];

export default function JobCategories() {
  return (
    <main>
      <div className="h-[calc(100vh-64px)]">
        <div className="container flex flex-col items-center h-full mt-16">
          <h1 className="text-3xl md:text-4xl md:w-1/2 lg:text-5xl text-center font-bold">
            Job <span className="text-primary">Categories</span>
          </h1>
          <p className="text-muted-foreground my-6 text-center md:w-1/2 ">
            Discover diverse job categories designed for every skill level
            and career path. Explore exciting opportunities tailored to
            your expertise and interests.
          </p>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4 mt-8 w-3/4 mx-auto">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex flex-col items-center gap-3 bg-background p-4 rounded-lg border-2 border-primary"
              >
                <div className="w-12 h-12 bg-primary rounded-lg"></div>
                <div className="text-lg font-semibold">
                  {category.name}
                </div>
                <Button variant="secondary">View Jobs</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
