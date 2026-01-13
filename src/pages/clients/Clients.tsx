import { motion } from "framer-motion";
import { Users, TrendingUp, Star, Award } from "lucide-react";
import { TiltCard } from "../../components/3d/TiltCard";

const stats = [
  { label: "Partner Network", value: "500+", icon: Users },
  { label: "Project Success", value: "100%", icon: TrendingUp },
  { label: "Client Satisfaction", value: "4.9/5", icon: Star },
  { label: "Premium Materials", value: "Top Tier", icon: Award }
];

const clientLogos = [
  { name: "Bestway", logo: "/bestway.png" },
  { name: "COOC", logo: "/cooc.png" },
  { name: "DG Khan", logo: "/dg.png" },
  { name: "Festo", logo: "/festo.png" },
  { name: "HMC", logo: "/hmc.png" },
  { name: "Ikan", logo: "/ikan.png" },
  { name: "JDW", logo: "/jdw.png" },
  { name: "LPGCL", logo: "/lpgcl.png" },
  { name: "Matrix", logo: "/matrix.png" },
  { name: "NLC", logo: "/nlc.png" },
  { name: "Olyinpia", logo: "/olyinpia.png" },
  { name: "PACC", logo: "/pacc.png" }
];

const testimonials = [
  {
    name: "Mohammad Ali",
    role: "Lead Engineer, Atlas Construction",
    content: "A.N Industries has been our primary supplier for over a decade. Their G.I. pipes are unmatched in quality and durability.",
    rating: 5
  },
  {
    name: "Sarah Khan",
    role: "Procurement Manager, Global Steel",
    content: "The precision and technical support they provide are exceptional. A true leader in the Pakistani steel industry.",
    rating: 5
  }
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 md:py-32 relative overflow-hidden bg-transparent">
      {/* Cinematic Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 relative z-10 text-center lg:text-left">
        <div className="relative inline-block">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative px-5 md:px-6 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-6 md:mb-8"
          >
            Our Ecosystem
          </motion.div>
        </div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-6xl md:text-8xl font-black text-white font-heading uppercase tracking-tighter leading-tight md:leading-none"
        >
          Trust & <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Collaboration</span>
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 md:gap-16 items-start relative z-10">
        
        {/* Left: Stats & Testimonials */}
        <div className="lg:col-span-4 space-y-10 md:space-y-12">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl backdrop-blur-xl group hover:border-primary/50 transition-colors text-center">
                <stat.icon size={18} className="text-primary mb-3 md:mb-4 mx-auto" />
                <div className="text-xl md:text-2xl font-black text-white">{stat.value}</div>
                <div className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Featured Testimonial */}
          <div className="p-8 md:p-10 bg-gradient-to-br from-primary/10 to-transparent border border-white/10 rounded-[2rem] md:rounded-[3rem] backdrop-blur-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-6 md:p-8 text-primary/10 transition-colors group-hover:text-primary/20">
                <Star size={100} className="md:w-[120px] md:h-[120px]" />
             </div>
             <div className="relative z-10 space-y-5 md:space-y-6">
                <div className="flex gap-1">
                   {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-primary fill-primary md:w-[14px] md:h-[14px]" />)}
                </div>
                <p className="text-lg md:text-xl text-white font-light leading-relaxed italic">
                   "{testimonials[0].content}"
                </p>
                <div className="pt-2 md:pt-4">
                   <div className="text-white font-black uppercase text-xs md:text-sm tracking-widest">{testimonials[0].name}</div>
                   <div className="text-primary text-[10px] md:text-xs uppercase font-bold tracking-tighter">{testimonials[0].role}</div>
                </div>
             </div>
          </div>
        </div>

        {/* Right: Logos Grid */}
        <div className="lg:col-span-8">
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 md:gap-4">
              {clientLogos.map((client, i) => (
                <TiltCard key={i} tiltMax={15} scale={1.05}>
                  <div className="aspect-[4/3] bg-white/5 border border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] flex items-center justify-center p-6 md:p-8 group hover:bg-white/10 hover:border-primary/30 transition-all duration-500">
                     <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="max-w-full h-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100" 
                     />
                  </div>
                </TiltCard>
              ))}
           </div>
           
           {/* Partnership CTA */}
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="mt-10 md:mt-12 p-8 md:p-12 bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left"
           >
              <div className="space-y-2">
                 <h3 className="text-white font-black uppercase text-xl md:text-2xl tracking-tight">Become a Partner</h3>
                 <p className="text-gray-400 text-xs md:text-sm font-light">Join Pakistan's leading network of industrial infrastructure developers.</p>
              </div>
              <button 
                onClick={() => {
                  const section = document.getElementById("contact");
                  section?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="px-8 md:px-10 py-4 md:py-5 bg-primary text-white rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:bg-blue-600 transition-all active:scale-95 w-full md:w-auto"
              >
                 Register Interest
              </button>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
