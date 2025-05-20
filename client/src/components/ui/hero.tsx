import { Link } from "wouter";

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

const Hero = ({
  backgroundImage,
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: HeroProps) => {
  return (
    <section id="home" className="relative">
      <div
        className="h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4">
              {title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={primaryButtonLink}>
                <a className="bg-secondary hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-md text-center transition duration-300">
                  {primaryButtonText}
                </a>
              </Link>
              <Link href={secondaryButtonLink}>
                <a className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-6 rounded-md text-center transition duration-300">
                  {secondaryButtonText}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
