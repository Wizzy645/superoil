import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Globe,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

export default function Index() {
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(3); // Default to slide 4 (0-indexed)
  const serviceCarouselRef = useRef<HTMLDivElement>(null);
  const projectCarouselRef = useRef<HTMLDivElement>(null);

  const heroSlides = [
    {
      title: "Powering Tomorrow with",
      highlight: "Clean Energy",
      description: "Leading the transition to sustainable energy solutions with cutting-edge technology and innovative approaches.",
      backgroundImage: "https://api.builder.io/api/v1/image/assets/TEMP/203d29105ef71ea84a5836f3c52e99a1b753c426?width=3421"
    },
    {
      title: "Renewable Solutions for",
      highlight: "Better Future",
      description: "Harnessing the power of wind, solar, and hydro energy to create a cleaner, more sustainable world.",
      backgroundImage: "https://api.builder.io/api/v1/image/assets/TEMP/203d29105ef71ea84a5836f3c52e99a1b753c426?width=3421"
    },
    {
      title: "Innovation Meets",
      highlight: "Sustainability",
      description: "Combining advanced engineering with environmental responsibility to deliver exceptional energy solutions.",
      backgroundImage: "https://api.builder.io/api/v1/image/assets/TEMP/203d29105ef71ea84a5836f3c52e99a1b753c426?width=3421"
    },
    {
      title: "Welcome To The",
      highlight: "Super Energy ltd.",
      description: "The official plug for all your renewable resourses, made with love with people who knows how - The natives!!!",
      backgroundImage: "https://api.builder.io/api/v1/image/assets/TEMP/203d29105ef71ea84a5836f3c52e99a1b753c426?width=3421"
    },
    {
      title: "Energy Infrastructure",
      highlight: "Excellence",
      description: "Building robust energy networks and pipelines that power communities and drive economic growth.",
      backgroundImage: "https://api.builder.io/api/v1/image/assets/TEMP/203d29105ef71ea84a5836f3c52e99a1b753c426?width=3421"
    },
    {
      title: "Smart Grid Solutions for",
      highlight: "Modern World",
      description: "Implementing intelligent energy distribution systems that optimize efficiency and reduce environmental impact.",
      backgroundImage: "https://api.builder.io/api/v1/image/assets/TEMP/203d29105ef71ea84a5836f3c52e99a1b753c426?width=3421"
    },
    {
      title: "Oil & Gas Expertise",
      highlight: "Redefined",
      description: "Applying decades of industry knowledge with modern sustainable practices for responsible energy extraction.",
      backgroundImage: "https://api.builder.io/api/v1/image/assets/TEMP/203d29105ef71ea84a5836f3c52e99a1b753c426?width=3421"
    }
  ];

  const scrollServicePrev = () => {
    if (serviceCarouselRef.current) {
      let scrollAmount = 280; // Mobile default
      if (window.innerWidth >= 1536) scrollAmount = 408; // 2xl: w-96 + spacing
      else if (window.innerWidth >= 1280) scrollAmount = 376; // xl: w-88 + spacing
      else if (window.innerWidth >= 1024) scrollAmount = 344; // lg: w-80 + spacing
      else if (window.innerWidth >= 768) scrollAmount = 308; // md: w-72 + spacing
      else if (window.innerWidth >= 640) scrollAmount = 280; // sm: w-64 + spacing

      serviceCarouselRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollServiceNext = () => {
    if (serviceCarouselRef.current) {
      let scrollAmount = 280; // Mobile default
      if (window.innerWidth >= 1536) scrollAmount = 408; // 2xl: w-96 + spacing
      else if (window.innerWidth >= 1280) scrollAmount = 376; // xl: w-88 + spacing
      else if (window.innerWidth >= 1024) scrollAmount = 344; // lg: w-80 + spacing
      else if (window.innerWidth >= 768) scrollAmount = 308; // md: w-72 + spacing
      else if (window.innerWidth >= 640) scrollAmount = 280; // sm: w-64 + spacing

      serviceCarouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollProjectPrev = () => {
    if (projectCarouselRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 280 : 320;
      projectCarouselRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollProjectNext = () => {
    if (projectCarouselRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 280 : 320;
      projectCarouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
    console.log("Contact form submitted:", email);
  };

  // Auto-advance hero slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 sm:px-8 lg:px-16 py-4 bg-white relative z-50">
        <div className="flex items-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/49b060efff12e31ab432a3d5633b7a80c6d84c5f?width=209"
            alt="Super Energy Logo"
            className="h-8 sm:h-10 lg:h-12 w-auto"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/884b9ca052e00751a7602d624809b8eb499ff42d?width=209"
            alt="Super Energy Text"
            className="h-6 sm:h-7 lg:h-8 w-auto ml-2"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="/" className="text-energy-yellow font-semibold text-lg">
            Home
          </a>
          <a
            href="#projects"
            className="text-energy-brown hover:text-energy-orange transition-colors text-lg"
          >
            Our Projects
          </a>
          <a
            href="#investors"
            className="text-energy-brown hover:text-energy-orange transition-colors text-lg"
          >
            Investors
          </a>
          <a
            href="#sustainability"
            className="text-energy-brown hover:text-energy-orange transition-colors text-lg"
          >
            Sustainability
          </a>
          <a
            href="#business"
            className="text-energy-brown hover:text-energy-orange transition-colors text-lg"
          >
            Our Business
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center text-energy-brown hover:text-energy-orange transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
               onClick={() => setIsMenuOpen(false)} />
        )}

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold text-energy-dark">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-energy-brown hover:text-energy-orange transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col p-6 space-y-6">
            <a
              href="/"
              className="text-energy-yellow font-semibold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-energy-brown hover:text-energy-orange transition-colors text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Projects
            </a>
            <a
              href="#investors"
              className="text-energy-brown hover:text-energy-orange transition-colors text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Investors
            </a>
            <a
              href="#sustainability"
              className="text-energy-brown hover:text-energy-orange transition-colors text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Sustainability
            </a>
            <a
              href="#business"
              className="text-energy-brown hover:text-energy-orange transition-colors text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Business
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="hero-section relative min-h-screen sm:h-screen flex items-center justify-start bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage:
            `linear-gradient(0deg, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)), linear-gradient(105deg, rgba(0, 0, 0, 0.50) 41.07%, rgba(0, 0, 0, 0.35) 102.67%), url("${heroSlides[currentHeroSlide].backgroundImage}")`,
        }}
      >
        {/* Hero Content */}
        <div className="hero-content container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-7xl py-12 sm:py-16 md:py-0">
          <div className="max-w-2xl md:max-w-3xl xl:max-w-4xl" style={{ marginTop: "-60px" }}>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 transition-all duration-500">
              {heroSlides[currentHeroSlide].title}{" "}
              <span className="text-energy-yellow ml-[13px]">{heroSlides[currentHeroSlide].highlight}</span>
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-10 leading-relaxed transition-all duration-500">
              {heroSlides[currentHeroSlide].description}
            </p>
            <button className="flex items-center gap-2 bg-energy-yellow text-black px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 xl:py-5 rounded-lg font-bold text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl hover:bg-energy-yellow-dark transition-colors shadow-lg">
              Contact us
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
            </button>

            {/* Social Media Icons */}
            <div className="social-media-links flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 mt-5 sm:mt-6 md:mt-7 lg:mt-8 xl:mt-10">
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-white rounded-full flex items-center justify-center">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-energy-orange" />
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-white rounded-full flex items-center justify-center">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-energy-orange" />
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-white rounded-full flex items-center justify-center">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-energy-orange" />
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-white rounded-full flex items-center justify-center">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-energy-orange" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Pagination Dots */}
        <div className="hero-pagination absolute bottom-2 md:bottom-3 lg:bottom-4 xl:bottom-5 2xl:bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 lg:space-x-3 xl:space-x-4" style={{ top: "340.323px" }}>
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`pagination-dot rounded-full border border-white sm:border-2 transition-all duration-300 hover:scale-110 ${
                index === currentHeroSlide
                  ? 'w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 bg-energy-yellow'
                  : 'w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 hover:bg-white/20'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="pb-12 sm:pb-16 lg:pb-20 bg-gray-50" style={{ marginTop: '-5px' }}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-7xl" style={{ top: '5px', margin: '-8px auto 0' }}>
          {/* Service Carousel Container */}
          <div className="service-carousel-container relative">
            {/* Service Carousel */}
            <div
              className="service-carousel overflow-x-auto scrollbar-hide pb-3 sm:pb-4 md:pb-5 lg:pb-6"
              ref={serviceCarouselRef}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', marginTop: '-100px' }}
            >
              <div className="service-cards-wrapper flex space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 xl:space-x-7 2xl:space-x-8" style={{ width: 'max-content' }}>
                {/* Oil Extraction Service Card */}
                <div className="service-card flex-none w-56 sm:w-64 md:w-72 lg:w-80 xl:w-88 2xl:w-96">
                  <div className="bg-white text-center overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/917c2e8db40b350608c1932347a054662f563488?width=751"
                      alt="Oil Extraction"
                      className="w-full h-36 sm:h-40 md:h-44 lg:h-48 xl:h-52 2xl:h-56 object-cover"
                    />
                    <div className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 flex-1 flex flex-col">
                      <h3 className="service-title text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-black mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-4 uppercase">
                        Oil Extraction
                      </h3>
                      <p className="service-description text-black text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg leading-relaxed flex-1">
                        As the world's largest green and clean energy specialist of
                        the printing and typesetting industry. Lorem has been the
                        industry.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pipelines Building Service Card */}
                <div className="service-card flex-none w-56 sm:w-64 md:w-72 lg:w-80 xl:w-88 2xl:w-96">
                  <div className="bg-white text-center overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/d335c9a17b2b6891d555bdbd58dfe146dc1ad382?width=749"
                      alt="Pipelines Building"
                      className="w-full h-36 sm:h-40 md:h-44 lg:h-48 xl:h-52 2xl:h-56 object-cover"
                    />
                    <div className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7">
                      <h3 className="service-title text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-black mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-4 uppercase">
                        Pipelines Building
                      </h3>
                      <p className="service-description text-black text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg leading-relaxed">
                        As the world's largest green and clean energy specialist of
                        the printing and typesetting industry. Lorem has been the
                        industry.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Oil Refinement Service Card */}
                <div className="service-card flex-none w-56 sm:w-64 md:w-72 lg:w-80 xl:w-88 2xl:w-96">
                  <div className="bg-white text-center overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/1db2cc0680337e8a3edbfec599a2945f2bf4d880?width=751"
                      alt="Oil Refinement"
                      className="w-full h-36 sm:h-40 md:h-44 lg:h-48 xl:h-52 2xl:h-56 object-cover"
                    />
                    <div className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7">
                      <h3 className="service-title text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-black mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-4 uppercase">
                        Oil Refinement
                      </h3>
                      <p className="service-description text-black text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg leading-relaxed">
                        As the world's largest green and clean energy specialist of
                        the printing and typesetting industry. Lorem has been the
                        industry.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Energy Consulting Service Card */}
                <div className="service-card flex-none w-56 sm:w-64 md:w-72 lg:w-80 xl:w-88 2xl:w-96">
                  <div className="bg-white text-center overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/917c2e8db40b350608c1932347a054662f563488?width=751"
                      alt="Energy Consulting"
                      className="w-full h-36 sm:h-40 md:h-44 lg:h-48 xl:h-52 2xl:h-56 object-cover"
                    />
                    <div className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7">
                      <h3 className="service-title text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-black mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-4 uppercase">
                        Energy Consulting
                      </h3>
                      <p className="service-description text-black text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg leading-relaxed">
                        Expert consultation services to optimize your energy infrastructure and maximize efficiency across all operations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Renewable Solutions Service Card */}
                <div className="service-card flex-none w-56 sm:w-64 md:w-72 lg:w-80 xl:w-88 2xl:w-96">
                  <div className="bg-white text-center overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/d335c9a17b2b6891d555bdbd58dfe146dc1ad382?width=749"
                      alt="Renewable Solutions"
                      className="w-full h-36 sm:h-40 md:h-44 lg:h-48 xl:h-52 2xl:h-56 object-cover"
                    />
                    <div className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7">
                      <h3 className="service-title text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-black mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-4 uppercase">
                        Renewable Solutions
                      </h3>
                      <p className="service-description text-black text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg leading-relaxed">
                        Sustainable energy solutions including solar, wind, and hydro power systems for a cleaner future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Carousel Navigation */}
            <button
              onClick={scrollServicePrev}
              className="service-nav-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-2 md:-translate-x-3 lg:-translate-x-4 xl:-translate-x-5 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-energy-dark" />
            </button>
            <button
              onClick={scrollServiceNext}
              className="service-nav-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-2 md:translate-x-3 lg:translate-x-4 xl:translate-x-5 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-energy-dark" />
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 bg-energy-dark mt-2 sm:-mt-12">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 max-w-6xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4">
            <div className="flex items-center">
              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-medium">Our Projects</h2>
              <div className="w-10 sm:w-14 h-1 bg-energy-yellow-dark ml-2 sm:ml-4"></div>
            </div>

            {/* Project Carousel Navigation */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={scrollProjectPrev}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-energy-yellow rounded-full flex items-center justify-center hover:bg-energy-yellow-dark transition-colors"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-energy-dark" />
              </button>
              <button
                onClick={scrollProjectNext}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-energy-yellow rounded-full flex items-center justify-center hover:bg-energy-yellow-dark transition-colors"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-energy-dark" />
              </button>
            </div>
          </div>

          {/* Project Carousel */}
          <div
            className="overflow-x-auto scrollbar-hide pb-4"
            ref={projectCarouselRef}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex space-x-4 sm:space-x-6" style={{ width: 'max-content' }}>
              {[
                {
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/48bc919086a1514ff55f1eb94121935346dba033?width=615",
                  title: "Offshore Wind Farm",
                  category: "RENEWABLE ENERGY"
                },
                {
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/786b04b1cbf7572518d4a3f61fa5661054293053?width=615",
                  title: "Solar Power Plant",
                  category: "SOLAR TECHNOLOGY"
                },
                {
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/577dd626e0b8cd0c65801a73239c14a6918163bc?width=615",
                  title: "Pipeline Infrastructure",
                  category: "OIL & GAS"
                },
                {
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/926790a377e25fb369addd651e2374ac9a107fe3?width=615",
                  title: "Hydroelectric Dam",
                  category: "HYDRO POWER"
                },
                {
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/48bc919086a1514ff55f1eb94121935346dba033?width=615",
                  title: "Geothermal Plant",
                  category: "GEOTHERMAL ENERGY"
                },
                {
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/786b04b1cbf7572518d4a3f61fa5661054293053?width=615",
                  title: "Energy Storage Facility",
                  category: "BATTERY TECHNOLOGY"
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className="flex-none w-64 sm:w-72 lg:w-80"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <div className="mb-2">
                        <span className="text-xs font-semibold text-energy-orange bg-energy-yellow/20 px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-4">
                        Innovative energy solutions designed for maximum efficiency and sustainability.
                      </p>
                      <button className="text-energy-orange font-semibold hover:text-energy-yellow transition-colors flex items-center space-x-1">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6 sm:mb-8">
                <h2 className="text-black text-2xl sm:text-3xl lg:text-4xl font-medium">
                  About our industry
                </h2>
                <div className="w-10 sm:w-14 h-1 bg-energy-yellow-dark ml-2 sm:ml-4"></div>
              </div>
              <div className="space-y-4 sm:space-y-6 text-black text-base sm:text-lg lg:text-xl leading-relaxed">
                <p>
                  As the world's largest green and clean energy specialist of
                  the printing and typesetting industry. Lorem has been the
                  industry. As the world's largest green and cleanenergy
                  specialist of the printing and typesetting industry. Lorem has
                  been the industry.
                </p>
                <p>
                  As the world's largest green and clean energy specialist of
                  the printing and typesetting industry. Lorem has been the
                  industry. As the world's largest green and clean energy
                  specialist of the printing and typesetting industry. Lorem has
                  been the industry. As the world's largest green.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/341893051c3299b3f8d32ccee45043e2ec930d57?width=1122"
                alt="Industry"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 mt-5 overflow-hidden">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-energy-yellow/5 to-energy-orange/5"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-energy-yellow/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-80 sm:h-80 bg-energy-orange/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="relative container mx-auto px-4 sm:px-8 lg:px-16 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

            {/* Left side - Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-energy-yellow/20 rounded-full mb-4 sm:mb-6">
                  <span className="text-energy-orange font-semibold text-sm sm:text-base">Get In Touch</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-energy-dark leading-tight mb-4 sm:mb-6">
                  Let's Build Something
                  <span className="text-energy-orange"> Amazing</span> Together
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Ready to transform your energy needs? Our team of experts is here to help you harness the power of sustainable solutions.
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-energy-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-energy-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-energy-dark text-sm sm:text-base">Call us directly</p>
                    <p className="text-energy-orange font-medium text-sm sm:text-base">+1 (347) 849-9047</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-energy-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-energy-dark text-sm sm:text-base">Send us an email</p>
                    <p className="text-energy-orange font-medium text-sm sm:text-base break-all">hello@superenergy.ng</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Modern Form */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/30">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-energy-dark mb-2">Start Your Journey</h3>
                <p className="text-gray-600 text-sm sm:text-base">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-energy-yellow focus:border-transparent transition-all text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-energy-yellow focus:border-transparent transition-all text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john.doe@example.com"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-energy-yellow focus:border-transparent transition-all text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-energy-yellow focus:border-transparent transition-all text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">How can we help you?</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project or questions..."
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-energy-yellow focus:border-transparent transition-all resize-none text-sm sm:text-base"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-energy-yellow to-energy-orange text-energy-dark font-bold py-3 sm:py-4 px-6 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </form>

              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                <p className="text-center text-xs sm:text-sm text-gray-500">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative py-12 sm:py-16 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://api.builder.io/api/v1/image/assets/TEMP/d72df0e28f28ffe70127e0ece67141c805babf14?width=2832")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto px-4 sm:px-8 lg:px-16 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Headquarters */}
            <div>
              <h3 className="text-white text-lg sm:text-xl font-bold mb-2">
                Headquarters
              </h3>
              <div className="w-12 h-1 bg-energy-yellow mb-4"></div>
              <p className="text-white text-sm mb-2 uppercase">ABUJA</p>
              <div className="flex items-start text-white text-sm mb-2">
                <Phone className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span className="break-words">+234-09-2914307, +234-01-2272383</span>
              </div>
              <div className="flex items-start text-white text-sm mb-2">
                <Globe className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span className="break-all">www.superenergy.ng</span>
              </div>
              <div className="flex items-start text-white text-sm">
                <Mail className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span className="break-all">www.superenergy.ng</span>
              </div>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-white text-lg sm:text-xl font-bold mb-2">Locations</h3>
              <div className="w-12 h-1 bg-energy-yellow mb-4"></div>
              <p className="text-white text-sm uppercase mb-2">LOCATIONS</p>
              <div className="flex items-start text-white text-sm">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>5, John smith street, off richard samuel Street, wuse, abuja,
                Nigeria</span>
              </div>
            </div>

            {/* Get in Touch */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-white text-lg sm:text-xl font-bold mb-2">
                Get in Touch
              </h3>
              <div className="w-12 h-1 bg-energy-yellow mb-4"></div>
              <p className="text-white text-sm uppercase mb-2">GET IN TOUCH</p>
              <p className="text-white text-base sm:text-lg lg:text-xl font-semibold mb-4 uppercase">
                Follow Our Activities
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-energy-yellow rounded-full flex items-center justify-center">
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-energy-yellow rounded-full flex items-center justify-center">
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-energy-yellow rounded-full flex items-center justify-center">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-energy-yellow rounded-full flex items-center justify-center">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
