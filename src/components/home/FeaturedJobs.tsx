import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";

const cardsObj = [
  {
    title: "Senior Front-end Engineer",
    description: "Remote",
    image: "google.png",
    content:
      "Google is hiring a Senior Front-end Engineer to work on their new project.",
  },
  {
    title: "Junior Back-end Engineer",
    description: "Part-time",
    image: "amazon.png",
    content:
      "Amazon is hiring a Junior Back-end Engineer to work on their new project.",
  },
  {
    title: "UI/UX Engineer",
    description: "Full-time",
    image: "microsoft.png",
    content:
      "Microsoft is hiring a UI/UX Engineer to work on their new project. ",
  },
];

export default function FeaturedJobs() {
  return (
    <section className="bg-secondary py-8 border-b-[6px] border-primary">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Featured <span className="text-primary">Jobs</span>
        </h2>
      </div>
      <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mt-6">
        {cardsObj.map((card) => (
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-6">
                <div>
                  <img
                    src={card.image}
                    className="w-12 rounded-3xl"
                    alt="google"
                  />
                </div>
                <div>
                  <CardTitle className="text-lg md:text-xl">{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-muted-foreground flex-auto">
              {card.content}
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Apply Now &rarr;</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
