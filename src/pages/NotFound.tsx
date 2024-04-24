import { Button } from "@/components/ui/button";
import { useMoveBack } from "../hooks/useMoveBack";

export default function NotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="h-screen flex items-center justify-center ">
      <div className="text-center p-20 rounded-lg border-x-slate-300 w-full">
        <h1 className="mb-6 sm:text-2xl md:text-4xl font-bold">
          404 Page Not Found
        </h1>
        <h2 className="mb-10 sm:text-xl md:text-2xl font-medium">
          The page you are looking for could not be found
        </h2>
        <Button
          variant={"outline"}
          onClick={moveBack}
          className="p-6 text-lg md:text-xl"
        >
          &larr; Go back
        </Button>
      </div>
    </main>
  );
}
