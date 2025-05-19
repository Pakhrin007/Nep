import workflow from '../../../assets/Images/AI/workflow.jpeg';

const Workflow = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full h-full transition-all duration-300">
      <h2 className="text-xl font-sans font-medium text-gray-800 mb-4">
        Workflow
      </h2>
      <p className="mb-4 text-gray-600 text-base font-sans leading-relaxed">
        Customize shortcuts, layouts, and templated replies to match your unique workflow.
      </p>
      <div className="mt-4">
        <img
          src={workflow}
          alt="Workflow Customization"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Workflow;