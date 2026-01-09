import { BsArrowRight } from "react-icons/bs";
import { motion, type Variants, easeOut } from "framer-motion";

const topAnimation: Variants = {
  hidden: { opacity: 0, y: -260 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export default function Slide2() {
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
    <div className="sticky top-0 w-full h-screen flex justify-center items-center relative font-sans">

      {/* IMAGE CONTAINER WITH PADDING */}
      <div className="absolute inset-0 p-0 sm:p-12 md:p-16 lg:p-13">
        <img
          src="/Slider02.png"
          alt="Slide 2"
          className="w-full h-full object-cover  brightness-75 rounded-none sm:rounded-4xl shadow-lg border border-gray-600"
        />
      </div>

      {/* TEXT CENTERED ON IMAGE */}
      <motion.div
        className="relative z-10 flex flex-col justify-center items-center text-center 
           rounded-sm shadow-2xl px-8 sm:px-12 md:px-16 lg:px-20 py-6 sm:py-8 md:py-10 bg-black/40 backdrop-blur-sm border border-white/10"
        variants={topAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-snug sm:leading-tight md:leading-tight tracking-tight text-white font-heading uppercase">
          Extensive Product Range
        </h1>

        <p className="text-gray-200 text-xl sm:text-md md:text-lg lg:text-xl leading-relaxed font-normal mb-6 max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-2 font-sans">
          From galvanized iron to ERW steel and scaffolding tubes, our precision-engineered pipes meet every project requirement.        </p>


        <button
          onClick={scrollToProducts}
          className="flex items-center rounded-sm gap-2 px-6 sm:px-8 py-3 sm:py-3 border-2 font-semibold border-accent text-white shadow-md cursor-pointer 
                    bg-accent/80 hover:bg-accent hover:border-accent transition-all duration-300 text-md sm:text-base md:text-lg group font-heading uppercase tracking-wider"
        >
          Explore More <BsArrowRight className="text-white group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </motion.div>
    </div>
  );
}
