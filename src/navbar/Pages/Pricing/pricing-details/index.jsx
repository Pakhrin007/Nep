
const PricingDetails = ({ starter, premier, platform, enterprise }) => {
  return (
    <div className="max-w-6xl mx-auto flex justify-center items-center gap-y-4 p-2">
        <p className="text-gray-600 font-title underline w-[400px]">Editor Seats</p>
     <p className="text-gray-600 font-title underline w-[200px] text-center">{starter}</p>
     <p className="text-gray-600 font-title underline w-[200px] text-center">{premier}</p>
     <p className="text-gray-600 font-title underline w-[200px] text-center">{platform}</p>
     <p className="text-gray-600 font-title underline w-[200px] text-center">{enterprise}</p>
    </div>
  );
};

export default PricingDetails;
