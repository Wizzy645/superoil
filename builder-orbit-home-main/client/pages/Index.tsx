import { useState } from "react";
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
} from "lucide-react";

export default function Index() {
  const [email, setEmail] = useState("");

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

        {/* Service Cards Overlay */}
        <div className="absolute top-[527px] left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Oil Extraction Card */}
            <div className="bg-white text-center w-72 overflow-hidden">
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

            {/* Pipelines Building Card */}
            <div className="bg-white text-center w-72 overflow-hidden">
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

            {/* Oil Refinement Card */}
            <div className="bg-white text-center w-72 overflow-hidden">
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
          <div className="flex items-center mb-12">
            <h2 className="text-white text-4xl font-medium">Our Projects</h2>
            <div className="w-14 h-1 bg-energy-yellow-dark ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "https://api.builder.io/api/v1/image/assets/TEMP/48bc919086a1514ff55f1eb94121935346dba033?width=615",
              "https://api.builder.io/api/v1/image/assets/TEMP/786b04b1cbf7572518d4a3f61fa5661054293053?width=615",
              "https://api.builder.io/api/v1/image/assets/TEMP/577dd626e0b8cd0c65801a73239c14a6918163bc?width=615",
              "https://api.builder.io/api/v1/image/assets/TEMP/926790a377e25fb369addd651e2374ac9a107fe3?width=615",
            ].map((imageSrc, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={imageSrc}
                  alt="Project"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Frozen Trees In A Lake
                  </h3>
                  <p className="text-sm text-gray-600">
                    DESIGN- INTERIOR OFFICE
                  </p>
                </div>
              </div>
            ))}
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
      <section className="py-16 bg-gray-50 mt-5">
        <div className="container mx-auto px-8 lg:px-16 max-w-4xl text-center">
          <h2 className="text-energy-dark text-4xl lg:text-5xl font-bold mb-4">
            Got any Question?
          </h2>
          <p className="text-energy-dark text-xl font-semibold mb-8">
            Reach out to us . Call us at +1 (347) 849-9047
          </p>

          <form
            onSubmit={handleContactSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-energy-yellow"
              required
            />
            <button
              type="submit"
              className="bg-energy-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Contact us
            </button>
          </form>
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
