import context from '../../../assets/Images/AI/content.jpeg';

const Context = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full h-full transition-all duration-300">
      <h2 className="text-xl font-sans font-medium text-gray-800 mb-4 font-heading">
        Context
      </h2>
      <p className="mb-4 text-gray-600 text-base font-body leading-relaxed">
        Integrate with over 25 apps to enhance your emailing experience with rich contextual data.
      </p>
      <div className="mt-4">
        <img
          src={context}
          alt="Context Integration"
          className="rounded-lg w-full h-64 object-cover"
        />
      </div>
    </div>
  );
};

export default Context;