import Header from "./Header";
import Sidebar from "./Sidebar";
import { navigationLinks } from "../../data/navigationLinks";
import "../../styles/layout/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-parent">
      <div className="layout">
        <Sidebar navigationLinks={navigationLinks} />
        <div className="main-container">
          
          <main className="main-content">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
