import automation from '../../../../../../assets/Images/AI/automation.jpeg';

const Automations = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full h-full transition-all duration-300">
      <h2 className="text-xl font-sans font-medium text-gray-800 mb-4 font-heading">
        Automations
      </h2>
      <p className="mb-4 text-gray-600 text-base font-body leading-relaxed">
        Create rules for repetitive manual tasks. Automate processes to save time and ensure consistency.
      </p>
      <div className="mt-4">
        <img
          src={automation}
          alt="Automation Demo"
          className="rounded-lg w-full h-64 object-cover"
        />
      </div>
    </div>
  );
};

export default Automations;