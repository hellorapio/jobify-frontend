type HeadStartProps = {
  title: string;
  description: string;
  special: string;
};

export default function HeadStart({ title, description, special }: HeadStartProps) {
  return (
    <>
      <h1 className="text-3xl md:text-4xl md:w-1/2 lg:text-5xl text-center font-bold">
        {title} <span className="text-primary">{special}</span>
      </h1>
      <p className="text-muted-foreground my-6 text-center md:w-1/2 ">
        {description}
      </p>
    </>
  );
}
