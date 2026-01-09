import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Star } from "lucide-react";
import { TiltCard } from "../../components/3d/TiltCard";
import Background3D from "../../components/3d/Background3D";

export const Clients = () => {
  const clientLogos = [
    "/cooc.png",
    "/dg.png",
    "/festo.png",
    "/hmc.png",
    "/ikan.png",
    "/jdw.png",
    "/lpgcl.png",
    "/matrix.png",
    "/nlc.png",
    "/olyinpia.png",
    "/pacc.png",
    "/pr.png",
    "/strength.png",
    "/tahur.png",
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "30+", label: "Years Experience" },
    { icon: TrendingUp, value: "98%", label: "Client Retention" },
    { icon: Star, value: "4.9/5", label: "Client Rating" }
  ];

  const testimonials = [
    {
      quote: "Outstanding quality and reliable delivery. A.N Industries has been our trusted partner for steel pipes for over 10 years.",
      author: "Construction Manager",
      company: "Major Infrastructure Project"
    },
    {
      quote: "Their ISO-certified products and professional service make them our first choice for all steel pipe requirements.",
      author: "Procurement Head",
      company: "Industrial Manufacturing"
    },
    {
      quote: "Excellent product range and competitive pricing. The team is always responsive and helpful.",
      author: "Project Director",
      company: "Oil & Gas Sector"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-black via-gray-900 to-black py-20 relative overflow-hidden">
      <Background3D preset="clients" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Our Clients
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-heading uppercase tracking-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Serving diverse industries across Pakistan with premium quality steel pipes and tubes since 1991
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-white font-heading">{stat.value}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Client Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center font-heading">
            Our Valued Partners
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {clientLogos.map((logo, index) => (
              <TiltCard key={index} tiltMax={20}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 aspect-square flex items-center justify-center transform h-full"
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/150?text=Logo";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center font-heading">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Quote Icon */}
                <div className="text-primary text-5xl mb-4 opacity-30">"</div>
                
                {/* Quote Text */}
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
                
                {/* Author */}
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-bold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};