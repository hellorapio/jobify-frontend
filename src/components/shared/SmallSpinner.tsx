import { FC } from "react";

const SmallSpinner: FC = () => {
  return (
    <div className="flex space-x-2 justify-center items-center dark:invert px-2">
      <div className="h-2 w-2 bg-black rounded-full animate-ping [animation-delay:-0.2s]"></div>
      <div className="h-2 w-2 bg-black rounded-full animate-ping [animation-delay:-0.1s]"></div>
      <div className="h-2 w-2 bg-black rounded-full animate-ping"></div>
    </div>
  );
};

export default SmallSpinner;
