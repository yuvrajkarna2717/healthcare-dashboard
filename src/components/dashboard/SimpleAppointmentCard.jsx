import { FaTooth } from "react-icons/fa";
import "../../styles/dashboard/UpcomingSchedule.css";

const SimpleAppointmentCard = ({ appointment }) => {
  console.log("appointment", appointment);
  const getIcon = (title) => {
    if (title === "Cardiologist") return "❤️";
    else if (title === "Neurologist") return "👩‍⚕️";
    else if (title === "Health checkup complete") return "🪄";
    else if (title === "Ophthalmologist") return "👁️";
  };
  return (
    <div className="simple-appointment-card">
      <div className="simple-appointment-details">
        <h5 className="simple-appointment-title">{appointment.title}</h5>
        <div className="simple-appointment-icon">
          <i className={`icon-${appointment.icon}`}>
            {getIcon(appointment.title)}
          </i>
        </div>
      </div>
      <div className="simple-appointment-time">{appointment.time}</div>
    </div>
  );
};

export default SimpleAppointmentCard;
