import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function JobSearch() {
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  async function handleClick() {
    if (!keyword && !city) return;
    navigate(`/jobs?keyword=${keyword}&city=${city}`);
  }

  return (
    <div className="bg-secondary p-4 flex flex-col w-full sm:w-3/4 md:flex-row md:w-fit gap-4 mt-10 rounded-lg">
      <div className="flex items-center relative">
        <Search className="text-muted-foreground absolute left-2" />
        <Input
          placeholder="Job Keyword"
          className="pl-10"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <div className="flex items-center relative">
        <MapPin className="text-muted-foreground absolute left-2" />
        <Input
          placeholder="City"
          className="pl-10"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <Button onClick={handleClick}>Find Jobs</Button>
    </div>
  );
}
