import { motion } from "framer-motion";
import { Package, Award, Truck, TrendingUp, ArrowRight } from "lucide-react";
import { TiltCard } from "../../components/3d/TiltCard";
import Background3D from "../../components/3d/Background3D";

const features = [
  {
    icon: Package,
    title: "Extensive Product Range",
    description: "From galvanized iron to ERW steel and scaffolding tubes, our precision-engineered pipes meet every project requirement.",
    image: "/Slider02.png"
  },
  {
    icon: Award,
    title: "Quality You Can Trust",
    description: "Manufactured from prime materials and certified to international standards, each pipe is inspected for accuracy, strength, and longevity.",
    image: "/Slider03.png"
  },
  {
    icon: Truck,
    title: "On-Time Delivery, Every Time",
    description: "With an efficient global supply chain, we ensure your orders arrive safely, promptly, and with complete transparency.",
    image: "/Slider04.png"
  },
  {
    icon: TrendingUp,
    title: "Upgrade Your Projects Today",
    description: "Explore our wide range of industrial pipes and experience unmatched reliability, expertise, and support tailored to your needs.",
    image: "/Slider05.png"
  }
];

export default function FeaturesSection() {
  const scrollToProducts = () => {
    const section = document.getElementById("products");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="w-full bg-gradient-to-br from-black via-gray-900 to-black py-20 relative overflow-hidden">
      <Background3D preset="features" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-heading uppercase tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Strengths</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering excellence through quality products, reliable service, and industry expertise
          </p>
        </motion.div>

        {/* Features - Alternating Layout */}
        <div className="space-y-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Side */}
                <TiltCard className={`${!isEven ? 'lg:order-2' : ''}`} tiltMax={10}>
                  <div className="relative group">
                    <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-primary/20 hover:border-primary transition-all duration-300">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        loading="lazy"
                        className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Icon Overlay */}
                      <div className="absolute top-6 left-6">
                        <div className="w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600/20 rounded-full blur-2xl"></div>
                  </div>
                </TiltCard>

                {/* Content Side */}
                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    {/* Number Badge */}
                    <div className="inline-flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30">
                        <span className="text-2xl font-bold text-primary font-heading">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* CTA Button */}
                    <button
                      onClick={scrollToProducts}
                      className="group flex items-center gap-3 px-6 py-3 bg-primary/10 backdrop-blur-sm text-primary rounded-lg font-semibold border-2 border-primary/30 hover:bg-primary hover:text-white transition-all duration-300 font-heading uppercase tracking-wider"
                    >
                      Explore Products
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
