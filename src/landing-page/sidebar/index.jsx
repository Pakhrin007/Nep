import { useState } from "react";
import Automations from "./pages/automations";
import Context from "./pages/context";
import Workflow from "./pages/workflow";
import LeftTab from "./left-tab";

const Sidebar = () => {
  const [pageSelected, setPageSelected] = useState("automations");

  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1280px] gap-6 mx-auto">
      {/* Left Sidebar */}
      <LeftTab pageSelected={pageSelected} setPageSelected={setPageSelected} />

      {/* Right Panel */}
      <div className="flex-1 transition-all duration-300">
        {pageSelected === "automations" && <Automations />}
        {pageSelected === "context" && <Context />}
        {pageSelected === "workflow" && <Workflow />}
      </div>
    </div>
  );
};

export default Sidebar;