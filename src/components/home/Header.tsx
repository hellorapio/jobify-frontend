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
      "
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
