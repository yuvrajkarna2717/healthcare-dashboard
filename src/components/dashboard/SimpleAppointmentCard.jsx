import '../../styles/dashboard/UpcomingSchedule.css';

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className="simple-appointment-card">
      <div className="simple-appointment-details">
        <h5 className="simple-appointment-title">{appointment.title}</h5>
        <div className="simple-appointment-time">{appointment.time}</div>
      </div>
      <div className="simple-appointment-icon">
        <i className={`icon-${appointment.icon}`}></i>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;