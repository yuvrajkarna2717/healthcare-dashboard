import '../../styles/dashboard/AnatomySection.css';

const AnatomySection = ({ bodyParts }) => {
  return (
    <div className="anatomy-section card">
      <div className="anatomy-container">
        <div className="body-image">
          <img src="/assets/body.jpg" alt="Human body model" />
          
          {bodyParts.map((part) => (
            <div
              key={part.id}
              className={`body-indicator ${part.status}`}
              style={{ top: part.position.top, left: part.position.left }}
            >
              <div className="indicator-dot"></div>
              <div className="indicator-label">{part.name}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="anatomy-slider">
        <div className="slider-track">
          <div className="slider-thumb"></div>
        </div>
      </div>
      
    </div>
  );
};

export default AnatomySection;