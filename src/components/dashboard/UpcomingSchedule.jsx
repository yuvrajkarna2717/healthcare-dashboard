import SimpleAppointmentCard from './SimpleAppointmentCard';
import '../../styles/dashboard/UpcomingSchedule.css';

const UpcomingSchedule = ({ schedules }) => {
  return (
    <div className="upcoming-schedule card">
      <h3 className="schedule-title">The Upcoming Schedule</h3>
      
      {schedules.map((schedule) => (
        <div key={schedule.day} className="schedule-day-section">
          <h4 className="schedule-day">On {schedule.day}</h4>
          <div className="schedule-items">
            {schedule.appointments.map((appointment) => (
              <SimpleAppointmentCard 
                key={appointment.id} 
                appointment={appointment} 
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;