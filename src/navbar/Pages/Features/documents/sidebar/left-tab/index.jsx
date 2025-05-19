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
    <div className="flex flex-col gap-4 max-w-[580px] w-full bg-white  rounded-lg p-2 border border-gray-200">
      {tabs.map((tab) => (
        <div
          key={tab.key}
          onClick={() => setPageSelected(tab.key)}
          className={`cursor-pointer p-4 rounded-lg transition-all text-[24px] font-title ${
            pageSelected === tab.key
              ? "bg-gray-100"
              : "hover:bg-gray-50 border-transparent"
          }`}
        >
          <div className="flex gap-4 mb-2 flex-col">
            <div className="text-xl">{tab.icon}</div>
            <h4 className=" text-gray-800 font-title">{tab.title}</h4>
          </div>
          <p className="text-gray-500 text-sm font-title">{tab.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default LeftTab;