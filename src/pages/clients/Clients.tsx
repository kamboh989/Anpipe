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

export const Clients = () => {
  // Double the logos for seamless loop
  const doubleLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="w-full py-10 overflow-hidden relative">
      <div className="text-center mb-12 relative z-10" style={{ fontFamily: "'Altmann Grotesk', 'Montserrat', sans-serif" }}>
        <h2 className="text-4xl sm:text-5xl font-semibold text-[#fece1a] mb-3 drop-shadow-lg">
          Our Clients
        </h2>
      </div>

      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Container */}
        <div className="flex animate-scroll">
          {doubleLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 sm:mx-8 w-28 sm:w-32 h-28 sm:h-32 flex items-center justify-center transition-all duration-500 hover:scale-110 group"
            >
              <div className="relative p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-xl  group-hover:bg-white group-hover:border-[#fece1a]/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#fece1a]/20 w-full h-full flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Client ${(index % clientLogos.length) + 1}`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/150?text=Logo";
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { 
            transform: translateX(0); 
          }
          100% { 
            transform: translateX(-50%); 
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: fit-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};