import '../../styles/layout/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="search-container">
        <div className="search-bar">
          <i className="icon-search"></i>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      
      <div className="header-actions">
        <button className="notification-btn" aria-label="Notifications">
          <i className="icon-bell"></i>
        </button>
        <div className="user-avatar">
          <img src="https://i.pravatar.cc/40?img=8" alt="User avatar" />
        </div>
        <button className="add-btn" aria-label="Add new">
          <i className="icon-plus"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;