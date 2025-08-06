import { useState, useRef } from "react";
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
} from "lucide-react";

export default function Index() {
  const [email, setEmail] = useState("");
  const serviceCarouselRef = useRef<HTMLDivElement>(null);
  const projectCarouselRef = useRef<HTMLDivElement>(null);

  const scrollServicePrev = () => {
    if (serviceCarouselRef.current) {
      serviceCarouselRef.current.scrollBy({
        left: -320,
        behavior: 'smooth'
      });
    }
  };

  const scrollServiceNext = () => {
    if (serviceCarouselRef.current) {
      serviceCarouselRef.current.scrollBy({
        left: 320,
        behavior: 'smooth'
      });
    }
  };

  const scrollProjectPrev = () => {
    if (projectCarouselRef.current) {
      projectCarouselRef.current.scrollBy({
        left: -320,
        behavior: 'smooth'
      });
    }
  };

  const scrollProjectNext = () => {
    if (projectCarouselRef.current) {
      projectCarouselRef.current.scrollBy({
        left: 320,
        behavior: 'smooth'
      });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
    console.log("Contact form submitted:", email);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 lg:px-16 py-4 bg-white relative z-10">
        <div className="flex items-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/49b060efff12e31ab432a3d5633b7a80c6d84c5f?width=209"
            alt="Super Energy Logo"
            className="h-12 w-auto"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/884b9ca052e00751a7602d624809b8eb499ff42d?width=209"
            alt="Super Energy Text"
            className="h-8 w-auto ml-2"
          />
        </div>

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
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-start bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)), linear-gradient(105deg, rgba(0, 0, 0, 0.50) 41.07%, rgba(0, 0, 0, 0.35) 102.67%), url("https://api.builder.io/api/v1/image/assets/TEMP/203d29105ef71ea84a5836f3c52e99a1b753c426?width=3421")',
        }}
      >
        <div className="container mx-auto px-8 lg:px-16 max-w-6xl">
          <div className="max-w-2xl">
            <h1 className="text-white text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Welcome <span className="text-energy-orange">To The</span>
              <br />
              Super Energy ltd.
            </h1>
            <p className="text-white text-xl mb-8 leading-relaxed">
              The official plug for all your renewable resourses, made with love
              with people who knows how - The natives!!!
            </p>
            <button className="flex items-center gap-2 bg-energy-yellow text-black px-8 py-4 rounded-lg font-bold text-xl hover:bg-energy-yellow-dark transition-colors shadow-lg">
              Contact us
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Social Media Icons */}
            <div className="flex items-center gap-6 mt-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Facebook className="w-6 h-6 text-energy-orange" />
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Instagram className="w-6 h-6 text-energy-orange" />
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Twitter className="w-6 h-6 text-energy-orange" />
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-energy-orange" />
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards Carousel Overlay */}
        <div className="absolute top-[527px] left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-8 lg:px-16">
          <div className="relative">
            {/* Service Carousel */}
            <div
              className="overflow-x-auto scrollbar-hide pb-4"
              ref={serviceCarouselRef}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex space-x-6" style={{ width: 'max-content' }}>
                {/* Oil Extraction Card */}
                <div className="flex-none w-72">
                  <div className="bg-white text-center overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/917c2e8db40b350608c1932347a054662f563488?width=751"
                      alt="Oil Extraction"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-black mb-3 uppercase">
                        Oil Extraction
                      </h3>
                      <p className="text-black text-sm leading-relaxed">
                        As the world's largest green and clean energy specialist of
                        the printing and typesetting industry. Lorem has been the
                        industry.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pipelines Building Card */}
                <div className="flex-none w-72">
                  <div className="bg-white text-center overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/d335c9a17b2b6891d555bdbd58dfe146dc1ad382?width=749"
                      alt="Pipelines Building"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-black mb-3 uppercase">
                        Pipelines Building
                      </h3>
                      <p className="text-black text-sm leading-relaxed">
                        As the world's largest green and clean energy specialist of
                        the printing and typesetting industry. Lorem has been the
                        industry.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Oil Refinement Card */}
                <div className="flex-none w-72">
                  <div className="bg-white text-center overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/1db2cc0680337e8a3edbfec599a2945f2bf4d880?width=751"
                      alt="Oil Refinement"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-black mb-3 uppercase">
                        Oil Refinement
                      </h3>
                      <p className="text-black text-sm leading-relaxed">
                        As the world's largest green and clean energy specialist of
                        the printing and typesetting industry. Lorem has been the
                        industry.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Service Cards */}
                <div className="flex-none w-72">
                  <div className="bg-white text-center overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/917c2e8db40b350608c1932347a054662f563488?width=751"
                      alt="Energy Consulting"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-black mb-3 uppercase">
                        Energy Consulting
                      </h3>
                      <p className="text-black text-sm leading-relaxed">
                        Expert consultation services to optimize your energy infrastructure and maximize efficiency across all operations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex-none w-72">
                  <div className="bg-white text-center overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/d335c9a17b2b6891d555bdbd58dfe146dc1ad382?width=749"
                      alt="Renewable Solutions"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-black mb-3 uppercase">
                        Renewable Solutions
                      </h3>
                      <p className="text-black text-sm leading-relaxed">
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
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-energy-dark" />
            </button>
            <button
              onClick={scrollServiceNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-energy-dark" />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full border-2 border-white"></div>
          <div className="w-3 h-3 rounded-full border-2 border-white"></div>
          <div className="w-3 h-3 rounded-full border-2 border-white"></div>
          <div className="w-6 h-6 rounded-full bg-energy-yellow border-2 border-white"></div>
          <div className="w-3 h-3 rounded-full border-2 border-white"></div>
          <div className="w-3 h-3 rounded-full border-2 border-white"></div>
          <div className="w-3 h-3 rounded-full border-2 border-white"></div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-energy-dark mt-[300px]">
        <div className="container mx-auto px-8 lg:px-16 max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center">
              <h2 className="text-white text-4xl font-medium">Our Projects</h2>
              <div className="w-14 h-1 bg-energy-yellow-dark ml-4"></div>
            </div>

            {/* Project Carousel Navigation */}
            <div className="flex items-center space-x-3">
              <button
                onClick={scrollProjectPrev}
                className="w-12 h-12 bg-energy-yellow rounded-full flex items-center justify-center hover:bg-energy-yellow-dark transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-energy-dark" />
              </button>
              <button
                onClick={scrollProjectNext}
                className="w-12 h-12 bg-energy-yellow rounded-full flex items-center justify-center hover:bg-energy-yellow-dark transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-energy-dark" />
              </button>
            </div>
          </div>

          {/* Project Carousel */}
          <div
            className="overflow-x-auto scrollbar-hide pb-4"
            ref={projectCarouselRef}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex space-x-6" style={{ width: 'max-content' }}>
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
                  className="flex-none w-72 lg:w-80"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="text-xs font-semibold text-energy-orange bg-energy-yellow/20 px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-black mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8 lg:px-16 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-8">
                <h2 className="text-black text-4xl font-medium">
                  About our industry
                </h2>
                <div className="w-14 h-1 bg-energy-yellow-dark ml-4"></div>
              </div>
              <div className="space-y-6 text-black text-xl leading-relaxed">
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
            <div>
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
      <section className="relative py-20 mt-5 overflow-hidden">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-energy-yellow/5 to-energy-orange/5"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-energy-yellow/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-energy-orange/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="relative container mx-auto px-8 lg:px-16 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left side - Contact Info */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-energy-yellow/20 rounded-full mb-6">
                  <span className="text-energy-orange font-semibold">Get In Touch</span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-energy-dark leading-tight mb-6">
                  Let's Build Something
                  <span className="text-energy-orange"> Amazing</span> Together
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Ready to transform your energy needs? Our team of experts is here to help you harness the power of sustainable solutions.
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm">
                  <div className="w-12 h-12 bg-energy-yellow rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-energy-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-energy-dark">Call us directly</p>
                    <p className="text-energy-orange font-medium">+1 (347) 849-9047</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm">
                  <div className="w-12 h-12 bg-energy-orange rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-energy-dark">Send us an email</p>
                    <p className="text-energy-orange font-medium">hello@superenergy.ng</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Modern Form */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/30">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-energy-dark mb-2">Start Your Journey</h3>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-energy-yellow focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-energy-yellow focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-energy-yellow focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-energy-yellow focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">How can we help you?</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project or questions..."
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-energy-yellow focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-energy-yellow to-energy-orange text-energy-dark font-bold py-4 px-6 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-center text-sm text-gray-500">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative py-16 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://api.builder.io/api/v1/image/assets/TEMP/d72df0e28f28ffe70127e0ece67141c805babf14?width=2832")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto px-8 lg:px-16 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Headquarters */}
            <div>
              <h3 className="text-white text-xl font-bold mb-2">
                Headquarters
              </h3>
              <div className="w-12 h-1 bg-energy-yellow mb-4"></div>
              <p className="text-white text-sm mb-2 uppercase">ABUJA</p>
              <div className="flex items-center text-white text-sm mb-2">
                <Phone className="w-4 h-4 mr-2" />
                +234-09-2914307, +234-01-2272383
              </div>
              <div className="flex items-center text-white text-sm mb-2">
                <Globe className="w-4 h-4 mr-2" />
                www.superenergy.ng
              </div>
              <div className="flex items-center text-white text-sm">
                <Mail className="w-4 h-4 mr-2" />
                www.superenergy.ng
              </div>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-white text-xl font-bold mb-2">Locations</h3>
              <div className="w-12 h-1 bg-energy-yellow mb-4"></div>
              <p className="text-white text-sm uppercase mb-2">LOCATIONS</p>
              <div className="flex items-start text-white text-sm">
                <MapPin className="w-4 h-4 mr-2 mt-1" />
                5, John smith street, off richard samuel Street, wuse, abuja,
                Nigeria
              </div>
            </div>

            {/* Get in Touch */}
            <div>
              <h3 className="text-white text-xl font-bold mb-2">
                Get in Touch
              </h3>
              <div className="w-12 h-1 bg-energy-yellow mb-4"></div>
              <p className="text-white text-sm uppercase mb-2">GET IN TOUCH</p>
              <p className="text-white text-xl font-semibold mb-4 uppercase">
                Follow Our Activities
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-energy-yellow rounded-full flex items-center justify-center">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-energy-yellow rounded-full flex items-center justify-center">
                  <Twitter className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-energy-yellow rounded-full flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-energy-yellow rounded-full flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
