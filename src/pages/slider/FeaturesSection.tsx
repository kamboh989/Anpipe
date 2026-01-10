import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TiltCard } from "../../components/3d/TiltCard";

const features = [
  {
    title: "Galvanized Excellence",
    description: "Our high-precision G.I. pipes offer superior corrosion resistance and structural longevity, perfect for demanding industrial environments.",
    image: "/iron-pipe.png",
    color: "#3b82f6",
    icon: ArrowRight
  },
  {
    title: "Structural Integrity",
    description: "M.S. pipes engineered for maximum load-bearing capacity, ensuring the safety and stability of large-scale infrastructure projects.",
    image: "/ms-pipe.png",
    color: "#2563eb",
    icon: ArrowRight
  },
  {
    title: "Innovation in Flow",
    description: "Advanced manufacturing techniques that optimize fluid dynamics and pressure management for high-demand conduit systems.",
    image: "/steel-pipe.png",
    color: "#60a5fa",
    icon: ArrowRight
  }
];

export default function FeaturesSection() {
  const scrollToProducts = () => {
    const section = document.getElementById("products");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="features" className="w-full py-32 relative overflow-hidden bg-transparent">
      {/* Structural Background Accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 opacity-[0.03]" style={{
           backgroundImage: 'linear-gradient(rgba(37, 99, 235, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.5) 1px, transparent 1px)',
           backgroundSize: '80px 80px'
         }}></div>
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
         <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header with Cinematic Feel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24 md:mb-40 relative"
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-primary text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] mb-8 md:mb-10"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
            Precision & Innovation
          </motion.div>

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-6 md:mb-8 font-heading uppercase tracking-tighter leading-[1.1] md:leading-[0.9]">
            Engineered for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-blue-400">Peak Performance</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Since 1991, we have been delivering uncompromised quality in steel pipe manufacturing, 
            setting international benchmarks for durability and structural integrity.
          </p>
        </motion.div>

        {/* Features - Premium Industrial Layout */}
        <div className="space-y-32 md:space-y-64">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="relative">
                {/* Visual Connector Line */}
                {index !== features.length - 1 && (
                  <div className={`absolute left-1/2 -bottom-24 md:-bottom-40 w-px h-16 md:h-32 bg-gradient-to-b from-primary/30 to-transparent hidden lg:block`}></div>
                )}

                <div className={`grid lg:grid-cols-12 gap-12 md:gap-20 items-center`}>
                  
                  {/* Content Side */}
                  <div className={`lg:col-span-5 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="space-y-8 md:space-y-10 relative z-20 text-center lg:text-left"
                    >
                      <div className="relative inline-block">
                         <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full"></div>
                         <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary/30 to-black/30 backdrop-blur-3xl rounded-[35%] flex items-center justify-center border border-white/10 shadow-2xl overflow-hidden group mx-auto lg:mx-0">
                           <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
                           <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                         </div>
                      </div>

                      <div className="space-y-4 md:space-y-6">
                        <div className="flex items-center justify-center lg:justify-start gap-4 text-primary text-sm font-bold uppercase tracking-widest">
                           <span className="text-2xl md:text-3xl font-black opacity-30">{(index + 1).toString().padStart(2, '0')}</span>
                           <div className="w-8 md:w-12 h-px bg-primary/50"></div>
                           <span>Core Value</span>
                        </div>
                        <h3 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-heading leading-tight md:leading-[0.95] uppercase tracking-tighter">
                          {feature.title}
                        </h3>
                        <p className="text-base sm:text-xl text-gray-400 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                          {feature.description}
                        </p>
                      </div>

                      <div className="pt-4 md:pt-6">
                        <button
                          onClick={scrollToProducts}
                          className="group relative inline-flex items-center justify-center gap-4 md:gap-6 px-8 md:px-10 py-4 md:py-5 bg-primary text-white rounded-2xl font-black text-base md:text-lg transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] overflow-hidden font-heading uppercase tracking-widest w-full sm:w-auto"
                        >
                          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                          <span className="relative">Capability</span>
                          <ArrowRight className="relative w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-3 transition-transform duration-500" />
                        </button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Image side */}
                  <div className={`lg:col-span-7 relative ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <TiltCard tiltMax={5} scale={1.05}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "circOut" }}
                        viewport={{ once: true }}
                        className="relative z-10"
                      >
                        {/* Frame Decoration */}
                        <div className="absolute -inset-4 border border-white/5 rounded-[2rem] md:rounded-[3rem] pointer-events-none hidden sm:block"></div>
                        
                        <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-[0_80px_160px_-40px_rgba(0,0,0,0.7)] group">
                           <img
                             src={feature.image}
                             alt={feature.title}
                             className="w-full h-[350px] sm:h-[450px] md:h-[600px] object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                           
                           {/* Decorative Text */}
                           <div className="absolute top-4 right-4 md:top-8 md:right-8 text-white/5 font-black text-6xl md:text-9xl select-none group-hover:text-primary/10 transition-colors">
                             {index + 1}
                           </div>
                        </div>
                      </motion.div>
                    </TiltCard>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
