import { FaTooth } from "react-icons/fa";
import "../../styles/dashboard/AppointmentCard.css";

const AppointmentCard = ({ appointment }) => {
  return (
    <div className={`appointment-card ${appointment.color}`}>
      <div className="appointment-details">
        <h4 className="appointment-type">{appointment.type}</h4>
        <div className="appointment-time">{appointment.time}</div>
        <div className="appointment-doctor">{appointment.doctor}</div>
      </div>
      <div className="appointment-icon">
        {appointment.type == "Dentist" ? <FaTooth /> : "💪"}
      </div>
    </div>
  );
};

export default AppointmentCard;
