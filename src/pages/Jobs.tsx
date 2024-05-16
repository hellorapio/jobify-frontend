import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useJobs from "@/hooks/jobs/useJobs";

export default function Jobs() {
  const { data, isLoading } = useJobs();
  console.log(data);
  return (
    <main>
      <div className=" pb-12">
        <div className="container flex flex-col items-center h-full mt-16">
          <h1 className="text-3xl md:text-4xl md:w-1/2 lg:text-5xl text-center font-bold">
            <span className="text-primary">Jobs</span>
          </h1>
          <p className="text-muted-foreground my-6 text-center md:w-1/2 ">
            Discover diverse job categories designed for every skill level
            and career path. Explore exciting opportunities tailored to
            your expertise and interests.
          </p>
          <div className="grid gap-6 grid-cols-1mt-8 w-3/4 mx-auto">
            {!isLoading
              ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                data.data.jobs.map((job: Record<string, string>) => (
                  <Card className="flex flex-col" key={job.title}>
                    <CardHeader>
                      <div className="flex items-center gap-6">
                        <div>
                          <CardTitle className="text-lg md:text-xl">
                            {job.title}
                          </CardTitle>
                          <CardDescription></CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="text-muted-foreground flex-auto ">
                      {job.description}
                    </CardContent>
                    <CardFooter className="flex justify-end">
                      <Button>Apply Now &rarr;</Button>
                    </CardFooter>
                  </Card>
                ))
              : null}
          </div>
        </div>
      </div>
    </main>
  );
}
