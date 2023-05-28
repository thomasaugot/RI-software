import React, { useState } from "react";
import TabLayout from "../../layouts/tabsLayout/tabslayout";
import TaskBoard from "../../components/taskBoard/taskBoard";

const ProjectDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Timeline");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <h1>{project.name}</h1>
      <TabLayout
        tabs={["Timeline", "Task Board", "List", "Statistics", "Project Statistics", "Settings"]}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      >
        <div className={activeTab === "Timeline" ? "tab-content-active" : "tab-content"}>
          {/* Timeline content goes here */}
        </div>
        <div className={activeTab === "Task Board" ? "tab-content-active" : "tab-content"}>
          {<TaskBoard />}
        </div>
        <div className={activeTab === "List" ? "tab-content-active" : "tab-content"}>
          {/* List content goes here */}
        </div>
        <div className={activeTab === "Statistics" ? "tab-content-active" : "tab-content"}>
          {/* Statistics content goes here */}
        </div>
      </TabLayout>
    </div>
  );
};

export default ProjectDetails;
