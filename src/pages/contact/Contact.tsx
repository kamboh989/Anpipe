import { useState } from "react";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";



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
    <div className="w-full bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[700px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          
          {/* LEFT SIDE FORM */}
          <div className="p-3 sm:p-4 lg:p-6 order-2 lg:order-1">
            <div className="space-y-2 sm:space-y-4">
              
              <div className="mb-5">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Altmann Grotesk', sans-serif" }}>
                  Get In Touch
                </h1>
                <p className="text-gray-600 text-xs" style={{ fontFamily: "'Fenomen Sans', sans-serif" }}>
                  We'd love to hear from you. Send us a message.
                </p>
              </div>

              {/* Name */}
              <div style={{ fontFamily: "'Fenomen Sans', sans-serif" }}>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fece1a] focus:border-transparent transition-all outline-none"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-xs mt-0.5">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fece1a] focus:border-transparent transition-all outline-none"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Contact Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                    className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fece1a] focus:border-transparent transition-all outline-none"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-0.5">{errors.phone}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Your Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
                  <textarea
                    rows={2}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full pl-8 pr-3 py-3 text-sm border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-[#fece1a] focus:border-transparent transition-all outline-none"
                  />
                </div>
                {errors.message && <p className="text-red-500 text-xs mt-0.5">{errors.message}</p>}
              </div>

              {/* Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-[#fece1a] hover:bg-[#e5ba15] text-white py-2 text-sm rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </div>
          </div>

          {/* RIGHT SIDE MAP */}
          <div className="w-full h-48 sm:h-64 lg:h-[500px] order-1 lg:order-2">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=9-KM%20G.T.%20Road%20Ferozewala%20Shahdara%20Lahore&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </div>
  );
}