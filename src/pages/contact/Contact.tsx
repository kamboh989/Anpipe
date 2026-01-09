import { useState } from "react";
import { Send, User, Mail, Phone, MessageSquare, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "../../components/3d/TiltCard";
import Background3D from "../../components/3d/Background3D";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-black via-gray-900 to-black py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Background3D preset="contact" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/50 rounded-full text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Let's Connect
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-heading uppercase tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to discuss your project? We're here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              <TiltCard tiltMax={10}>
                <div className="group p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <MapPin className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 font-heading">Our Location</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Office No 1, 1st Floor, Bismillah Center,<br />
                        Opposite Meezan Bank, Shershah,<br />
                        Karachi, Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>

              <TiltCard tiltMax={10}>
                <div className="group p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <Phone className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 font-heading">Phone Numbers</h3>
                      <p className="text-gray-300">
                        <a href="tel:+922132563145" className="hover:text-primary transition-colors">+92 21 32563145</a><br />
                        <a href="tel:+922132563146" className="hover:text-primary transition-colors">+92 21 32563146</a>
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>

              <TiltCard tiltMax={10}>
                <div className="group p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <Mail className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 font-heading">Email Address</h3>
                      <p className="text-gray-300">
                        <a href="mailto:info@anindustries.com" className="hover:text-primary transition-colors">info@anindustries.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>

              <TiltCard tiltMax={10}>
                <div className="group p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <Clock className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 font-heading">Business Hours</h3>
                      <p className="text-gray-300">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-heading">Send Us a Message</h3>
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-4 bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors`}
                    placeholder="Enter your name"
                  />
                </div>
                {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-4 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors`}
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-4 bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors`}
                    placeholder="Enter your phone number"
                  />
                </div>
                {errors.phone && <p className="mt-2 text-sm text-red-400">{errors.phone}</p>}
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Your Message *</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full pl-12 pr-4 py-4 bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none`}
                    placeholder="Tell us about your project..."
                  />
                </div>
                {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-primary/50 hover:shadow-primary/70 hover:scale-105 font-heading uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}