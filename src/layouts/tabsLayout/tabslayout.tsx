import NavBar from "../../components/general/navBar/navBar";

interface TabLayoutProps {
  tabs: string[]; // Array of tab names
  activeTab: string; // Currently active tab
  onTabChange: (tab: string) => void; // Callback function when a tab is clicked
  children: React.ReactNode; // Content to be displayed within the tab
}

const TabLayout: React.FC<TabLayoutProps> = ({ tabs, activeTab, onTabChange, children }) => {
  const handleTabChange = (tab: string) => {
    onTabChange(tab);
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <ul className="tab-list">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={tab === activeTab ? "active" : ""}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className="tab-content">{children}</div>
    </div>
  );
};

export default TabLayout;
