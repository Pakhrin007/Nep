import bookings from "../../assets/Images/bookings.png";
import facebook from "../../assets/Images/facebook.png";
import linkedin from "../../assets/Images/linkedin.png";
import microsoft from "../../assets/Images/microsoft.png";
import uber from "../../assets/Images/uber.png";
import netflix from "../../assets/Images/netflix.png";

const logos = [bookings, facebook, linkedin, microsoft, uber, netflix];

// Duplicate logos 5 times to ensure a seamless loop across all screen sizes
const logoSet = [...logos, ...logos, ...logos, ...logos, ...logos]; // 5x duplication

const InfiniteScroll = () => {
  return (
    <div className="relative max-w-[1280px] overflow-hidden py-4 bg-white mx-auto">
      {/* Left gradient fade */}
      <div className="absolute top-0 left-0 h-full w-12 sm:w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />

      {/* Right gradient fade */}
      <div className="absolute top-0 right-0 h-full w-12 sm:w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

      <div className="flex animate-loop-scroll whitespace-nowrap">
        {logoSet.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="h-10 w-auto mx-4 sm:mx-6 inline-block transition-transform duration-300 ease-in-out hover:scale-110"
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;