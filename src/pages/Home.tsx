import UserAccBtn from "@/components/UserAccBtn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <div className="container h-[calc(100vh-64px)] flex flex-col justify-center text-center items-center -translate-y-10">
      <span
        className="text-muted-foreground italic text-sm relative before:bg-primary 
      before:absolute before:w-1/4 after:w-1/4 sm:before:w-3/4 sm:after:w-3/4 md:before:w-full before:h-1 before:right-full before:top-1/2 after:absolute after:bg-primary 
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

      <div className="bg-secondary p-4 flex flex-col w-3/4 md:flex-row md:w-fit gap-4 mt-10 rounded-lg">
        <div className="flex items-center relative">
          <Search className="text-muted-foreground absolute left-2" />
          <Input placeholder="Job Keyword" className="pl-10" />
        </div>
        <div className="flex items-center relative">
          <MapPin className="text-muted-foreground absolute left-2" />
          <Input placeholder="City" className="pl-10" />
        </div>
        <Button>Find Job</Button>
      </div>
    </div>
  );
};

export default Home;
