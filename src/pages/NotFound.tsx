import { useMoveBack } from "../hooks/useMoveBack";

export default function NotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="h-screen flex items-center justify-center p-20">
      <div className="text-center p-20 rounded-lg border-x-slate-300 ">
        <h1 className="mb-14">
          The page you are looking for could not be found 😢
        </h1>
        <button onClick={moveBack}>&larr; Go back</button>
      </div>
    </main>
  );
}
