import "../../styles/dashboard/HealthStatusCards.css";
import { BsFillLungsFill } from "react-icons/bs";
import { FaTooth } from "react-icons/fa";
import { PiBoneLight } from "react-icons/pi";

const HealthStatusCards = ({ healthData }) => {
  const iconMap = {
    lungs: BsFillLungsFill,
    tooth: FaTooth,
    bone: PiBoneLight,
  };

  return (
    <div className="health-status-container">
      {healthData.map((item) => {
        const IconComponent = iconMap[item.icon];
        return (
          <div key={item.id} className="health-status-card card">
            <div className="health-status-header">
              <div className={`health-icon ${item.status}`}>
                {IconComponent && <IconComponent className="icon" size={24} />}
              </div>
              <h3 className="health-title">{item.type}</h3>
            </div>

            <div className="health-date">Date: {item.date}</div>

            <div className="health-progress">
              <div className="progress-bar">
                <div
                  className={`progress-fill ${item.status}`}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HealthStatusCards;
