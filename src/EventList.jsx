import events from "./data/events.js";

export default function EventList() {
  return (
    <div id="event-list">
      {events.map((event, index) => (
        <div key={index} className="event">
          <h2>{event.name}</h2>
          <p>{event.date}</p>
          <p>{event.description}</p>
          <img src={event.image} alt={event.name} />
        </div>
      ))}
    </div>
  );
}
