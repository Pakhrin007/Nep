
const HeroSection = ({title,description,video}) => {
  return (
    <div className="flex flex-col items-center gap-y-6 px-4 py-10 font-heading">
      
      {/* Content Section */}
      <div className="flex flex-col gap-y-6 w-full max-w-[900px] text-center">
        <h1 className="text-3xl sm:text-[28px] md:text-[45px] font-medium  leading-tight">
          {title}
        </h1>
        <p className="text-gray-500 text-base sm:text-lg md:text-xl ">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-500 text-white text-sm sm:text-base px-6 py-2 font-body rounded-md">
            Get started
          </button>
          <button className="bg-[#f5f6f6] text-black text-sm sm:text-base border border-gray-200 px-6 py-2 font-body rounded-md">
            Watch demo
          </button>
        </div>
      </div>

      {/* Video Section: Wider than text */}
      <div className="flex justify-center w-full mt-8">
        <video
          src={video}
          autoPlay
          loop
          muted
          className="w-full max-w-[1280px] h-auto rounded-md shadow"
        />
      </div>
    </div>
  );
};

export default HeroSection;
