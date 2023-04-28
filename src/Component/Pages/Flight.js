import "./Flight.css";
import { useState } from "react";
import directFlights from "./directFlights.json";

function Flight() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [filteredFlights, setFilteredFlights] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();

    const filteredResults = directFlights.filter((flight) => {
      return (
        flight.origin.toLowerCase() === origin.toLowerCase() &&
        flight.destination.toLowerCase() === destination.toLowerCase() &&
        flight.departureTime.includes(departureDate)
      );
    });

    setFilteredFlights(filteredResults);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="origin">Origin City:</label>
        <input
          type="text"
          id="origin"
          value={origin}
          onChange={(event) => setOrigin(event.target.value)}
          required
        />

        <label htmlFor="destination">Destination City:</label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
          required
        />

        <label htmlFor="departureDate">Departure Date:</label>
        <input
          type="date"
          id="departureDate"
          value={departureDate}
          onChange={(event) => setDepartureDate(event.target.value)}
          required
        />

        <button type="submit">Search Flights</button>
      </form>

      {filteredFlights.length > 0 && (
        <div>
          <h2>Results:</h2>
          <ul>
            {filteredFlights.map((flight) => (
              <div className="flight_info p-3 my-5" key={flight.airline}>
                <h3>{flight.airline}</h3>
                <p>Train Number: {flight.flightNumber}</p>
                <p>Source Station: {flight.origin}</p>
                <p>Destination Station: {flight.destination}</p>
                <p>Arrival Time: {flight.arrivalTime}</p>
                <p>Departure Time: {flight.departureTime}</p>
                <p>Price: {flight.cost}</p>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Flight;
