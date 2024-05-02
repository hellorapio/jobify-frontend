import { Button } from "@/components/ui/button";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="container h-[calc(100vh-64px)] flex flex-col justify-center text-center items-center -translate-y-20">
      <span className="text-muted-foreground italic text-sm">
        Unlock Your Potential with us
      </span>
      <h1 className="text-3xl md:text-4xl md:w-1/2 lg:text-5xl font-bold ">
        With <span className="text-primary">Jobify</span> You can find Your
        Dream Job
        <span className="text-primary"> Easier</span>
      </h1>
      <p className="text-muted-foreground my-6 md:w-1/2 ">
        with instant notifications for new job postings and the ability to
        apply directly from your phone, finding your dream job has never
        been easier.
      </p>
      <div className="flex gap-6">
        <Button>Browse Jobs &rarr;</Button>
        <Button variant="secondary">Don't Have an account ?</Button>
      </div>
    </div>
  );
};

export default Home;
