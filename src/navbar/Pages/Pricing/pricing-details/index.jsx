
const PricingDetails = ({ feature, freeTrial, standard, pro }) => {
  return (
    <div className="max-w-6xl mx-auto flex justify-center items-center gap-y-4 p-2">
        <p className="text-gray-600 font-title underline w-[400px]">{feature}</p>
     <p className="text-gray-600 font-title underline w-[200px] text-center">{freeTrial}</p>
     <p className="text-gray-600 font-title underline w-[200px] text-center">{standard}</p>
     <p className="text-gray-600 font-title underline w-[200px] text-center">{pro}</p>
    </div>
  );
};

export default PricingDetails;
