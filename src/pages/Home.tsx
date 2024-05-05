import UserAccBtn from "@/components/UserAccBtn";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <div className="container h-[calc(100vh-64px)] flex flex-col justify-center text-center items-center -translate-y-20">
      <span
        className="text-muted-foreground italic text-sm relative before:bg-primary 
      before:absolute before:w-3/4 after:w-3/4 md:before:w-full before:h-1 before:right-full before:top-1/2 after:absolute after:bg-primary 
      md:after:w-full after:h-1 before:-translate-x-2 after:translate-x-2 after:top-1/2"
      >
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
        <Button asChild>
          <Link to="/jobs">Browse Jobs &rarr;</Link>
        </Button>
        <UserAccBtn />
      </div>
    </div>
  );
};

export default Home;
