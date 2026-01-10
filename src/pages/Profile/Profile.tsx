import { motion } from "framer-motion";
import { Shield, Target, Users, Award, ArrowRight } from "lucide-react";

export default function Profile() {
  const values = [
    {
      icon: Shield,
      title: "Hardened Reliability",
      desc: "Our pipes are tested to withstand the harshest industrial conditions, ensuring decades of performance."
    },
    {
      icon: Target,
      title: "Engineered Precision",
      desc: "Every millimeter matters. We maintain strict manufacturing tolerances for perfect site integration."
    },
    {
      icon: Users,
      title: "Legacy of Trust",
      desc: "Building long-term partnerships through transparent procurement and technical excellence."
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-transparent">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{
         backgroundImage: 'linear-gradient(rgba(37, 99, 235, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.5) 1px, transparent 1px)',
         backgroundSize: '100px 100px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
          
          {/* Left: Content */}
          <div className="space-y-10 md:space-y-12">
            <div className="space-y-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                 <div className="w-8 md:w-12 h-1 bg-primary"></div>
                 <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">Our Heritage</span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white font-heading leading-tight md:leading-none uppercase tracking-tighter">
                Forged in <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Excellence</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                Established in 1991, A.N Industries has evolved from a local manufacturing unit into Pakistan's premier authority in steel pipe and conduit solutions. 
              </p>
            </div>

            <div className="grid gap-8 md:gap-10">
               {values.map((val, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 md:gap-8 group"
                 >
                    <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-primary/20">
                       <val.icon size={24} className="md:w-[28px] md:h-[28px]" />
                    </div>
                    <div className="space-y-2">
                       <h3 className="text-white font-black uppercase text-base md:text-lg tracking-tight">{val.title}</h3>
                       <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">{val.desc}</p>
                    </div>
                 </motion.div>
               ))}
            </div>

            <div className="pt-4 md:pt-6 flex justify-center lg:justify-start">
               <button className="group flex items-center justify-center gap-4 px-8 md:px-10 py-4 md:py-5 bg-primary text-white rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:bg-blue-600 transition-all w-full sm:w-auto">
                  Full Capabilities
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
               </button>
            </div>
          </div>

          {/* Right: Visual Story */}
          <div className="relative">
             <div className="absolute -inset-10 bg-primary/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"></div>
             
             <div className="relative space-y-6 md:space-y-8">
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                    <div className="pt-10 md:pt-20">
                      <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
                         <img 
                           src="/hero.jpg" 
                           alt="Legacy" 
                           className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      </div>
                   </div>
                   <div>
                      <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
                         <img 
                           src="/steel-pipe.png" 
                           alt="Innovation" 
                           className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      </div>
                   </div>
                </div>

                <div className="p-8 md:p-12 bg-white/5 border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] backdrop-blur-3xl relative overflow-hidden group hover:border-primary/50 transition-colors">
                   <div className="absolute top-0 right-0 p-6 md:p-8 text-primary/10">
                      <Award size={100} className="md:w-[150px] md:h-[150px]" />
                   </div>
                   <div className="relative z-10 space-y-4 md:space-y-6">
                      <div className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Milestone 2026</div>
                      <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight font-heading uppercase tracking-tighter">Certified to Global Standards</div>
                      <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed max-w-sm">
                        Our commitment to quality is validated by international ISO certifications and the trust of thousands of clients across Pakistan.
                      </p>
                   </div>
                </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
