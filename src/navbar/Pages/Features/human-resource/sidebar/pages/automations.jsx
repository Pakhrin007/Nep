import automation from '../../../../../../assets/images/AI/automation.jpeg';

const Automations = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow w-full h-full">
      <h2 className="text-xl font-semibold mb-4">Automations</h2>
      <p className="mb-4">Create rules for repetitive manual tasks. Automate processes to save time and ensure consistency.</p>
      <div className="mt-4">
        <img
          src={automation}
          alt="Automation Demo"
          className="rounded-lg w-full h-full"
        />
      </div>
    </div>
  );
};

export default Automations;