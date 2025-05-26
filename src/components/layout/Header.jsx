import { FaSearch, FaBell } from "react-icons/fa";
import "../../styles/layout/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="search-container">
        <div className="search-bar">
          <FaSearch color="rgb(48, 48, 102)" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header-actions">
        {/* <button className="notification-btn" aria-label="Notifications"> */}
        <FaBell color="rgb(48, 48, 102)" />
        {/* </button> */}
      </div>
    </header>
  );
};

export default Header;
