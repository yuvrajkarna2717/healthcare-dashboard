import '../../styles/dashboard/CalendarView.css';

const CalendarView = ({ calendarData }) => {
  const { month, weekDays, timeSlots } = calendarData;
  
  return (
    <div className="calendar-view card">
      <div className="calendar-header">
        <div className="calendar-title-section">
          <span className="calendar-label">This Week</span>
          <h3 className="calendar-title">{month}</h3>
        </div>
        <div className="calendar-navigation">
          <button className="nav-btn prev-btn" aria-label="Previous week">
            <i className="icon-chevron-left"></i>
          </button>
          <button className="nav-btn next-btn" aria-label="Next week">
            <i className="icon-chevron-right"></i>
          </button>
        </div>
      </div>
      
      <div className="calendar-grid">
        {weekDays.map((day) => (
          <div key={day.day} className="day-column">
            <div className="day-header">
              <div className="day-name">{day.day}</div>
              <div className={`day-number ${day.current ? 'current' : ''}`}>
                {day.date}
              </div>
            </div>
            
            <div className="time-slots">
              {timeSlots.map((slot) => (
                <div 
                  key={`${day.date}-${slot.time}`} 
                  className={`time-slot ${slot.appointments[day.date] ? 'booked' : ''}`}
                >
                  {slot.time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;