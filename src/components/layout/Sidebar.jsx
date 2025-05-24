import "../../styles/layout/Sidebar.css";
import {
  Grid as GridIcon,
  ArrowUpDown,
  Calendar,
  CalendarCheck,
  ChartSpline,
  MessageCircleMore,
  Phone,
  Settings,
} from "lucide-react";

const iconMap = {
  grid: GridIcon,
  clock: ArrowUpDown,
  calendar: Calendar,
  "calendar-check": CalendarCheck,
  "bar-chart": ChartSpline,
  "message-circle": MessageCircleMore,
  headphones: Phone,
  settings: Settings,
};

const Sidebar = ({ navigationLinks }) => {
  return (
    <aside className="sidebar">
      <div style={{ height: "30vh" }}>
        <div className="sidebar-header">
          <h1 className="logo">
            <span className="health">Health</span>
            <span className="care">care.</span>
          </h1>
        </div>

        {navigationLinks.map((category) => (
          <div key={category.category} className="sidebar-section">
            <div className="sidebar-category">{category.category}</div>
            <nav className="sidebar-nav">
              {category.links.map((link) => {
                const IconComponent = iconMap[link.icon];
                return (
                  <a
                    key={link.id}
                    href="#"
                    className={`sidebar-link ${link.active ? "active" : ""}`}
                  >
                    {IconComponent && (
                      <IconComponent size={18} className="sidebar-icon" />
                    )}
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        ))}
      </div>

      <a href="#" className="sidebar-link">
        <Settings size={18} className="sidebar-icon" />
        <span>Settings</span>
      </a>
    </aside>
  );
};

export default Sidebar;
