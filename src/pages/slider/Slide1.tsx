import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { Award, Shield, TrendingUp } from "lucide-react";
import Background3D from "../../components/3d/Background3D";
import { TiltCard } from "../../components/3d/TiltCard";

const Slide1 = () => {
  const scrollToProducts = () => {
    const section = document.getElementById("products");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      <Background3D />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(26, 54, 93, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 54, 93, 0.5) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }}></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">ISO 9001:2008 Certified</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight font-heading">
                Leading Steel
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary bg-[length:200%_auto] animate-gradient">
                  Pipe Manufacturer
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl"
            >
              Delivering premium quality steel pipes and tubes since 1991. Trusted by industry leaders across Pakistan for excellence and reliability.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">Quality Assured</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">30+ Years Experience</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={scrollToProducts}
                className="group flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg 
                          hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-primary/50 hover:shadow-primary/70 hover:scale-105 font-heading uppercase tracking-wider"
              >
                View Products
                <BsArrowRight className="text-white group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-lg font-bold text-lg border-2 border-white/20
                          hover:bg-white/10 hover:border-primary transition-all duration-300 font-heading uppercase tracking-wider"
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <TiltCard tiltMax={10}>
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-primary/20">
                  <img
                    src="./hero.jpg"
                    alt="Steel Pipes Manufacturing"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-2xl z-10"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white font-heading">500+</div>
                      <div className="text-sm text-gray-300">Happy Clients</div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl"></div>
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </div>

      {/* Add gradient animation keyframes */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Slide1;