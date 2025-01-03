export default function DayDetails({ date }) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
  
    const events = [
      {
        type: 'appointment',
        text: 'You have an appointment today at 7 pm.'
      },
      {
        type: 'medicine',
        text: 'Medicine: Antibiotics at 3 pm.'
      }
    ]
  
    return (
      <div className="day-details">
        <h2>
          {days[date.getDay()]} • {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}
        </h2>
        
        <div className="events-list">
          {events.map((event, index) => (
            <div key={index} className={`event-item ${event.type}`}>
              <span className="event-dot"></span>
              <p>{event.text}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  