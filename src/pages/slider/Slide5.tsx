import { motion, type Variants, easeOut } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const topAnimation: Variants = {
  hidden: { opacity: 0, y: -260 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export default function Slide5() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="sticky top-0 w-full h-screen flex justify-center items-center relative font-roboto">

      {/* IMAGE CONTAINER WITH PADDING */}
      <div className="absolute inset-0 p-0 sm:p-12 md:p-16 lg:p-13">
        <img
          src="/Slider05.png"
          alt="Slide 5"
          className="w-full h-full object-cover brightness-75 rounded-none sm:rounded-4xl shadow-lg"
        />
      </div>

      {/* TEXT CENTERED ON IMAGE */}
      <motion.div
        className="relative z-10 flex flex-col justify-center items-center text-center 
           rounded-3xl shadow-xl px-8 sm:px-12 md:px-16 lg:px-20 py-6 sm:py-8 md:py-10"
        variants={topAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-snug sm:leading-tight md:leading-tight tracking-tight text-white" style={{ fontFamily: "'Altmann Grotesk', sans-serif" }}>
          Upgrade Your Projects Today     
        </h1>

        <p className="text-white text-xl sm:text-lg md:text-lg lg:text-xl leading-relaxed font-normal mb-6 max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-2" style={{ fontFamily: "'Fenomen Sans', sans-serif" }}>
          Explore our wide range of industrial pipes and experience unmatched reliability, expertise, and support tailored to your needs.
        </p>

        <button 
          onClick={scrollToProducts}
          className="flex items-center rounded-full gap-2 px-6 sm:px-8 py-3 sm:py-3 border-2 font-semibold border-[#ffffff] text-[#ffffff] shadow-md cursor-pointer 
            hover:bg-[#fece1a] hover:text-white transition-all duration-300 text-sm md:text-base md:text-lg group"
          style={{ fontFamily: "'Altmann Grotesk', sans-serif" }}
        >
          Explore More <BsArrowRight className="text-[#ffffff] group-hover:text-white transition-colors duration-300" />
        </button>
      </motion.div>
    </div>
  );
}