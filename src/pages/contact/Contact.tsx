import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Send, 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock 
} from "lucide-react";
import { TiltCard } from "../../components/3d/TiltCard";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfos = [
    {
      icon: MapPin,
      title: "Manufacturing Hub",
      link: "Plot 123, Industrial Area, Karachi",
      desc: "Our primary production facility."
    },
    {
      icon: Phone,
      title: "Direct Connect",
      link: "+92 300 1234567",
      desc: "Mon-Fri, 9am - 6pm PKT"
    },
    {
      icon: Mail,
      title: "Digital Inquiry",
      link: "info@anindustries.com.pk",
      desc: "Response within 24 hours."
    },
    {
      icon: Clock,
      title: "Operational Hours",
      link: "09:00 - 18:00",
      desc: "Closed on Sundays."
    }
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-transparent">
      {/* Cinematic Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 relative z-10 text-center lg:text-left">
        <div className="relative inline-block">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative px-5 md:px-6 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-6 md:mb-8"
          >
            Inquiry Protocol
          </motion.div>
        </div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-6xl md:text-8xl font-black text-white font-heading uppercase tracking-tighter leading-tight md:leading-none"
        >
          Project <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Analysis</span>
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 md:gap-16 relative z-10">
        
        {/* Left: Contact Info */}
        <div className="lg:col-span-5 space-y-8 md:space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {contactInfos.map((info, i) => (
              <TiltCard key={i} tiltMax={15} scale={1.05}>
                <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] backdrop-blur-xl hover:border-primary/50 transition-colors group">
                   <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-xl md:rounded-2xl flex items-center justify-center text-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                      <info.icon size={20} className="md:w-[24px] md:h-[24px]" />
                   </div>
                   <h3 className="text-white font-black uppercase text-[10px] tracking-widest mb-2">{info.title}</h3>
                   <div className="text-white font-bold text-sm md:text-base mb-1">{info.link}</div>
                   <p className="text-gray-500 text-[10px] md:text-xs font-light">{info.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="p-8 md:p-10 bg-gradient-to-br from-primary/10 to-transparent border border-white/10 rounded-[2rem] md:rounded-[3rem] backdrop-blur-2xl">
             <h3 className="text-white font-black uppercase text-lg md:text-xl mb-4 md:mb-6">HQ Location</h3>
             <div className="aspect-video bg-black/40 rounded-xl md:rounded-2xl border border-white/5 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-black uppercase tracking-tighter text-2xl md:text-4xl">
                   Map Interface
                </div>
                {/* Placeholder for dynamic map */}
                <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
             </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7">
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="p-8 sm:p-12 md:p-16 bg-white/5 border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] backdrop-blur-2xl relative"
           >
              {/* HUD Elements */}
              <div className="absolute top-8 right-8 md:top-10 md:right-10 flex gap-1">
                 {[1,2,3].map(i => <div key={i} className="w-3 md:w-4 h-1 bg-primary/20 rounded-full"></div>)}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] text-gray-500 uppercase font-black tracking-widest ml-4">Full Name</label>
                       <div className="relative">
                          <User className="absolute left-5 top-1/2 -translate-y-1/2 text-primary" size={18} />
                          <input 
                            type="text" 
                            className="w-full bg-black/40 border border-white/10 rounded-xl md:rounded-2xl py-3.5 md:py-4 pl-12 md:pl-14 pr-6 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm md:text-base font-medium"
                            placeholder="Engineering Dept."
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                       </div>
                       {errors.name && <p className="text-red-500 text-[10px] uppercase font-black ml-4 mt-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] text-gray-500 uppercase font-black tracking-widest ml-4">Email Address</label>
                       <div className="relative">
                          <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-primary" size={18} />
                          <input 
                            type="email" 
                            className="w-full bg-black/40 border border-white/10 rounded-xl md:rounded-2xl py-3.5 md:py-4 pl-12 md:pl-14 pr-6 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm md:text-base font-medium"
                            placeholder="official@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                       </div>
                       {errors.email && <p className="text-red-500 text-[10px] uppercase font-black ml-4 mt-1">{errors.email}</p>}
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-[10px] text-gray-500 uppercase font-black tracking-widest ml-4">Subject</label>
                    <input 
                      type="text" 
                      className="w-full bg-black/40 border border-white/10 rounded-xl md:rounded-2xl py-3.5 md:py-4 px-6 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm md:text-base font-medium"
                      placeholder="G.I. Pipe Procurement"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                 </div>

                 <div className="space-y-2">
                    <label className="text-[10px] text-gray-500 uppercase font-black tracking-widest ml-4">Detailed Message</label>
                    <div className="relative">
                       <MessageSquare className="absolute left-5 top-5 md:top-6 text-primary" size={18} />
                       <textarea 
                         rows={4}
                         className="w-full bg-black/40 border border-white/10 rounded-2xl md:rounded-3xl py-5 md:py-6 pl-12 md:pl-14 pr-6 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm md:text-base font-medium resize-none"
                         placeholder="Requirements..."
                         value={formData.message}
                         onChange={(e) => setFormData({...formData, message: e.target.value})}
                       />
                    </div>
                    {errors.message && <p className="text-red-500 text-[10px] uppercase font-black ml-4 mt-1">{errors.message}</p>}
                 </div>

                 <button 
                   type="submit"
                   disabled={isSubmitting}
                   className="w-full group flex items-center justify-center gap-4 md:gap-6 py-4 md:py-6 bg-primary text-white rounded-xl md:rounded-2xl font-black text-lg md:text-xl hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-primary/20 font-heading uppercase tracking-widest disabled:opacity-50"
                 >
                    {isSubmitting ? "Processing..." : "Submit Protocol"}
                    <Send className={`group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 ${isSubmitting ? 'animate-pulse' : ''}`} size={20} />
                 </button>

                 {submitStatus === 'success' && (
                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-primary font-black uppercase text-[10px] tracking-widest bg-primary/10 py-3 md:py-4 rounded-lg md:rounded-xl">
                      Transmission Successful.
                   </motion.div>
                 )}
              </form>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
