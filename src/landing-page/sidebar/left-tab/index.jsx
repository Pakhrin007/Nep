const LeftTab = ({ pageSelected, setPageSelected }) => {
  const tabs = [
    {
      key: "automations",
      title: "Get more done with automations",
      desc: "Eg. Create rules for repetitive manual tasks. So they happen every time, on their own, like clockwork.",
      icon: "⚡️",
    },
    {
      key: "context",
      title: "Pull in more context",
      desc: "We integrate with over 25 apps to make your emailing experience more complete.",
      icon: "📥",
    },
    {
      key: "workflow",
      title: "Customize it to your workflow",
      desc: "Shortcuts, layouts, templated replies, and more, are all customizable to your unique way of working.",
      icon: "⚙️",
    },
  ];

  return (
    <div className="flex flex-col gap-4 max-w-full md:max-w-[400px] w-full bg-gray-50 rounded-lg p-2 shadow-sm">
      {tabs.map((tab) => (
        <div
          key={tab.key}
          onClick={() => setPageSelected(tab.key)}
          className={`cursor-pointer p-4 rounded-lg transition-all duration-300 ${
            pageSelected === tab.key
              ? "bg-white shadow-md scale-100"
              : "bg-gray-50 hover:bg-gray-100 hover:shadow-sm hover:scale-102"
          }`}
        >
          <div className="flex flex-col gap-2">
            <div className="text-2xl">{tab.icon}</div>
            <h4 className="text-lg font-sans font-medium text-gray-800 leading-relaxed">
              {tab.title}
            </h4>
            <p className="text-gray-500 text-sm font-sans leading-relaxed">
              {tab.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftTab;