import { motion } from "framer-motion";
import { Award, Target, Users, TrendingUp, CheckCircle, Factory } from "lucide-react";
import { TiltCard } from "../../components/3d/TiltCard";
import Background3D from "../../components/3d/Background3D";

export const Profile = () => {
  const stats = [
    { icon: Factory, value: "30+", label: "Years in Business" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "ISO", label: "9001:2008 Certified" },
    { icon: TrendingUp, value: "100%", label: "Quality Assured" }
  ];

  const values = [
    { icon: CheckCircle, title: "Quality First", description: "Premium materials and rigorous testing" },
    { icon: Target, title: "Customer Focus", description: "Tailored solutions for every project" },
    { icon: Award, title: "Excellence", description: "International standards compliance" }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-black via-gray-900 to-black py-20 relative overflow-hidden">
      <Background3D preset="profile" />

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
            About Us
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-heading uppercase tracking-tight">
            Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Profile</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            A.N Industries (Pvt.) Limited is a professional and leading steel Pipes and Tubes manufacturer in Pakistan. Incorporated with the Security Exchange Commission of Pakistan since 1991, our Quality Management System is certified to conform with ISO 9001:2008.
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

        {/* Images + Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Left: Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large Image - Spans 2 rows */}
            <TiltCard className="col-span-2" tiltMax={10}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl border-2 border-white/10 shadow-2xl shadow-primary/20 hover:border-primary transition-all duration-300 h-full"
              >
                <img
                  src="./facility1.jpg"
                  alt="Manufacturing Facility"
                  loading="lazy"
                  className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </motion.div>
            </TiltCard>

            {/* Small Image 1 */}
            <TiltCard tiltMax={15}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl border-2 border-white/10 shadow-xl hover:border-primary transition-all duration-300 h-full"
              >
                <img
                  src="./facility2.jpg"
                  alt="Inventory"
                  loading="lazy"
                  className="w-full h-[200px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </motion.div>
            </TiltCard>

            {/* Small Image 2 */}
            <TiltCard tiltMax={15}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl border-2 border-white/10 shadow-xl hover:border-primary transition-all duration-300 h-full"
              >
                <img
                  src="./facility3.jpg"
                  alt="Quality Control"
                  loading="lazy"
                  className="w-full h-[200px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </motion.div>
            </TiltCard>
          </div>

          {/* Right: Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 font-heading">Our Core Values</h3>
            <div className="space-y-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2 font-heading">{value.title}</h4>
                        <p className="text-gray-400">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10"
            >
              <p className="text-gray-300 leading-relaxed">
                The company specializes in manufacturing, exporting, and supplying MS Pipes, GI Pipes, Tubes, Rectangular & Square Hollow Sections, High-Medium-Low pressure Boiler Tubes, and other tubular products.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-white/5 backdrop-blur-md p-10 rounded-2xl border border-white/10"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-heading">
            Ready to Work With Industry Leaders?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us for their steel pipe and tube requirements.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-primary/50 hover:shadow-primary/70 hover:scale-105 font-heading uppercase tracking-wider"
          >
            Contact Us Today
          </button>
        </motion.div>

      </div>
    </section>
  );
};