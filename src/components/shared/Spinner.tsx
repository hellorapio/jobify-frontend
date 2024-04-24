import { FC } from "react";

const Spinner: FC = () => {
  return (
    <div className="flex space-x-2 justify-center items-center  h-[calc(100vh-64px)] bg-inherit">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 bg-black dark:bg-white rounded-full animate-bounce [animation-delay:-0.2s]"></div>
      <div className="h-8 w-8 bg-black dark:bg-white rounded-full animate-bounce [animation-delay:-0.1s]"></div>
      <div className="h-8 w-8 bg-black dark:bg-white rounded-full animate-bounce"></div>
    </div>
  );
};

export default Spinner;
