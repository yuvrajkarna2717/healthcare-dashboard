import '../../styles/dashboard/AppointmentCard.css';

const AppointmentCard = ({ appointment }) => {
  return (
    <div className={`appointment-card ${appointment.color}`}>
      <div className="appointment-icon">
        <i className={`icon-${appointment.icon}`}></i>
      </div>
      <div className="appointment-details">
        <h4 className="appointment-type">{appointment.type}</h4>
        <div className="appointment-time">{appointment.time}</div>
        <div className="appointment-doctor">{appointment.doctor}</div>
      </div>
    </div>
  );
};

export default AppointmentCard;