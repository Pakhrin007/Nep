import workflow from '../../../../../../assets/Images/AI/workflow.jpeg';

const Workflow = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow w-full h-full">
      <h2 className="text-xl font-semibold mb-4">Workflow</h2>
      <p className="mb-4">Customize shortcuts, layouts, and templated replies to match your unique workflow.</p>
      <div className="mt-4">
        <img
          src={workflow}
          alt="Workflow Customization"
          className="rounded-lg w-full h-full"
        />
      </div>
    </div>
  );
};

export default Workflow;