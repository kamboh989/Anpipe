export const Profile = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="w-full max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-10">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#fece1a] leading-tight"
            style={{ fontFamily: "'Altmann Grotesk', sans-serif" }}
          >
            Company Profile
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-2 sm:px-4"
            style={{ fontFamily: "'Fenomen Sans', sans-serif" }}
          >
            A.N Industries (Pvt.) Limited is a professional and leading steel Pipes and Tubes manufacturer in Pakistan. Incorporated with the Security Exchange Commission of Pakistan since 1991, our Quality Management System is certified to conform with ISO 9001:2008. Production lines are equipped with modern technology, enabling us to produce high-quality pipes.
          </p>
        </div>

        {/* Images Grid Section */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-5 items-center">

            {/* Left Column: Two Stacked Images */}
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-4">
              <div className="relative group overflow-hidden rounded-2xl transition-all duration-500">
                <img
                  src="/Team1.png"
                  alt="Factory Facility 1"
                  className="w-full h-48 sm:h-52 md:h-56 lg:h-74 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl transition-all duration-500">
                <img
                  src="/Team3.png"
                  alt="Factory Facility 2"
                  className="w-full h-48 sm:h-52 md:h-56 lg:h-76 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Right Column: Tall Image with Description */}
            <div className="flex flex-col gap-3 justify-center">
              <div className="relative group overflow-hidden rounded-2xl  transition-all duration-500">
                <img
                  src="/Team2.png"
                  alt="Main Production Line"
                  className="w-full h-full min-h-[320px] sm:min-h-[380px] lg:h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Description Box */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl  border-l-4 border-[#fece1a]">
                <p 
                  className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed"
                  style={{ fontFamily: "'Fenomen Sans', sans-serif" }}
                >
                  The company specializes in manufacturing, exporting, and supplying MS Pipes, GI Pipes, Tubes, Rectangular & Square Hollow Sections, High-Medium-Low pressure Boiler Tubes, and other tubular products.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};