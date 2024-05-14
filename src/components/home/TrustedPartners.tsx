const images = [
  {
    id: 1,
    src: "netflix-trusted.png",
    alt: "Google",
  },
  {
    id: 2,
    src: "paypal-trusted.png",
    alt: "Paypal",
  },
  {
    id: 3,
    src: "facebook-trusted.png",
    alt: "Facebook",
  },
  {
    id: 4,
    src: "amazon-trusted.png",
    alt: "Amazon",
  },
  {
    id: 5,
    src: "spotify-trusted.png",
    alt: "Spotify",
  },
  {
    id: 6,
    src: "airbnb-trusted.png",
    alt: "Airbnb",
  },
];

export default function TrustedPartners() {
  return (
    <section className="pt-8 pb-8">
      <div className="container flex justify-center">
        <h2
          className="text-2xl md:text-3xl font-bold text-center relative 
          before:absolute before:w-14 before:bg-primary before:h-1 before:-top-1
          after:absolute after:w-14 after:bg-primary after:h-1 after:-bottom-1 after:right-0"
        >
          Our Trusted <span className="text-primary">Partners</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-16 md:gap-12 container py-12">
        {images.map((image) => (
          <img
            src={image.src}
            key={image.id}
            alt={image.alt}
            className="grayscale hover:grayscale-0 transition-all duration-300 w-3/5 md:w-3/4 lg:w-full mx-auto"
          />
        ))}
      </div>
    </section>
  );
}
