import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Footer } from "../../components/Footer";

const images: string[] = [
  "/PDF Profile -01.jpg",
  "/PDF Profile -02.jpg",
  "/PDF Profile -03.jpg",
  "/PDF Profile -04.jpg",
  "/PDF Profile -05.jpg",
  "/PDF Profile -06.jpg",
  "/PDF Profile -07.jpg",
  "/PDF Profile -08.jpg",
  "/PDF Profile -09.jpg",
  "/PDF Profile -10.jpg",
  "/PDF Profile -11.jpg",
  "/PDF Profile -12.jpg",
  "/PDF Profile -13.jpg",
  "/PDF Profile -14.jpg",
];

export const Catalogue = () => {
  const [step, setStep] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSpreads = Math.ceil((images.length - 1) / 2);

  const next = () => {
    if (isMobile) {
      if (step < images.length - 1) setStep(step + 1);
    } else {
      if (step < totalSpreads) setStep(step + 1);
    }
  };

  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  // Determine pages to show
  const leftPage = step === 0 ? images[0] : images[step * 2 - 1];
  const rightPage = !isMobile && step > 0 ? images[step * 2] : null;

  const openLightbox = (img: string) => {
    setCurrentImage(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-28">

        <div className="flex items-center gap-6">

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            disabled={step === 0}
            className="p-3 bg-white rounded-full shadow disabled:opacity-30"
          >
            <ChevronLeft size={30} />
          </button>

          {/* BOOK */}
          <div className="relative perspective w-[90%] max-w-[700px] h-[480px] flex justify-center">

            {/* SINGLE PAGE (Mobile) OR OPEN BOOK */}
            {step === 0 ? (
              <div
                className="w-[90%] md:w-[350px] h-full bg-white shadow-xl rounded-lg overflow-hidden cursor-zoom-in transition-all duration-700"
                onClick={() => openLightbox(leftPage)}
              >
                <img
                  src={leftPage}
                  className="w-full h-full object-cover"
                  alt="Cover"
                />
              </div>
            ) : (
              <div className={`relative w-full h-full flex ${isMobile ? 'flex-col' : 'flex-row'} animate-bookOpen`}>

                {/* LEFT PAGE */}
                <div
                  className="w-full md:w-1/2 h-full bg-white shadow-lg rounded-l-lg overflow-hidden cursor-zoom-in mb-2 md:mb-0"
                  onClick={() => leftPage && openLightbox(leftPage)}
                >
                  {leftPage && (
                    <img
                      src={leftPage}
                      className="w-full h-full object-cover"
                      alt="Left"
                    />
                  )}
                </div>

                {/* RIGHT PAGE (Desktop only) */}
                {!isMobile && rightPage && (
                  <div
                    className="w-1/2 h-full bg-white shadow-lg rounded-r-lg overflow-hidden cursor-zoom-in"
                    onClick={() => rightPage && openLightbox(rightPage)}
                  >
                    <img
                      src={rightPage}
                      className="w-full h-full object-cover"
                      alt="Right"
                    />
                  </div>
                )}

                {/* SPINE */}
                {!isMobile && <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300" />}
              </div>
            )}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            disabled={isMobile ? step === images.length - 1 : step === totalSpreads}
            className="p-3 bg-[#fece1a] rounded-full shadow disabled:opacity-30"
          >
            <ChevronRight size={30} />
          </button>
        </div>

        {/* PAGE INFO */}
        <div className="mt-6 font-semibold text-gray-700">
          {step === 0
            ? "Cover"
            : isMobile
            ? `Page ${step + 1} / ${images.length}`
            : `Pages ${step * 2} – ${Math.min(step * 2 + 1, images.length)}`}
        </div>
      </div>

      <Footer />

      {/* LIGHTBOX */}
      {lightboxOpen && currentImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80"
          >
            <X size={30} />
          </button>
          <img
            src={currentImage}
            className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
            alt="Zoomed"
          />
        </div>
      )}
    </>
  );
};
