import '../../styles/dashboard/ActivityFeed.css';

const ActivityFeed = ({ activityData }) => {
  return (
    <div className="activity-feed card">
      <div className="activity-header">
        <h3>Activity</h3>
        <div className="activity-info">
          <span>3 appointments on this week</span>
        </div>
      </div>
      
      <div className="activity-chart">
        {activityData.map((day, index) => (
          <div key={day.day} className="chart-column">
            <div className="chart-bars">
              {day.values.map((value, i) => (
                <div 
                  key={i} 
                  className={`chart-bar bar-color-${i}`} 
                  style={{ height: `${value * 100}px` }}
                ></div>
              ))}
            </div>
            <div className="chart-label">{day.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;