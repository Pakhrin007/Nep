import { useState } from "react";
import Automations from "./pages/automations";
import Context from "./pages/context";
import Workflow from "./pages/workflow";
import LeftTab from "./left-tab";

const Sidebar = () => {
  const [pageSelected, setPageSelected] = useState("automations");

  return (
    <div className="flex w-full max-w-[1200px] gap-10">
      {/* Left Sidebar */}
      <LeftTab pageSelected={pageSelected} setPageSelected={setPageSelected} />

      {/* Right Panel */}
      <div className="flex-1">
        {pageSelected === "automations" && <Automations />}
        {pageSelected === "context" && <Context />}
        {pageSelected === "workflow" && <Workflow />}
      </div>
    </div>
  );
};

export default Sidebar;
