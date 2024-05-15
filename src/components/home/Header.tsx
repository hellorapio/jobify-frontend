import HeroText from "@/components/home/HeroText";
import JobSearch from "@/components/home/JobSearch";
import UserAccBtn from "@/components/home/UserAccBtn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=" h-[calc(100vh-64px)] border-b-[6px] border-primary">
      <div
        className="container flex flex-col justify-center text-center items-center md:-translate-y-10 h-full
      before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full 
      before:bg-gradient-radial before:from-primary before:to-primary before:blur-2xl before:content-['']  
      before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-20  
      sm:before:w-[480px] before:lg:h-[360px]"
      >
        <HeroText />
        <div className="flex gap-6">
          <Button asChild>
            <Link to="/jobs">Browse Jobs &rarr;</Link>
          </Button>
          <UserAccBtn />
        </div>
        <JobSearch />
      </div>
    </header>
  );
}
