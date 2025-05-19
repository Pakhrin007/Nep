import context from '../../../../../../assets/Images/AI/content.jpeg';

const Context = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow w-full h-full">
      <h2 className="text-xl font-semibold mb-4">Context</h2>
      <p className="mb-4">Integrate with over 25 apps to enhance your emailing experience with rich contextual data.</p>
      <div className="mt-4">
        <img
          src={context}
          alt="Context Integration"
          className="rounded-lg w-full h-full"
        />
      </div>
    </div>
  );
};

export default Context;