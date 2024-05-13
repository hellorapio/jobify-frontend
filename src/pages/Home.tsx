import HeroText from "@/components/home/HeroText";
import JobSearch from "@/components/home/JobSearch";
import UserAccBtn from "@/components/home/UserAccBtn";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <div className="container h-[calc(100vh-64px)] flex flex-col justify-center text-center items-center -translate-y-10">
      <HeroText />
      <div className="flex gap-6">
        <Button asChild>
          <Link to="/jobs">Browse Jobs &rarr;</Link>
        </Button>
        <UserAccBtn />
      </div>
      <JobSearch />
    </div>
  );
};

export default Home;
