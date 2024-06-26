export default function HeroText() {
  return (
    <>
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
        where opportunities await! Whether you're a seasoned professional
        or just starting out, our platform offers a wide array of career
        paths to explore
      </p>
    </>
  );
}
