import { useEffect, useState } from "react"

const Train_search = () => {
    const [sourceStation, setSourceStation] = useState ([])
    const [destinationStation, setDestinationStation] = useState ([])

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/datameet/railways/master/trains.json").then((result)=>{
            result.json().then((resp)=>{
                setSourceStation(resp)
            })
        })
    },[])


  return (
    <div>
            <form onSubmit={handleSubmit} method="GET">
      <div>
        <label htmlFor="sourceStation">Source Station:</label>
        <input
          type="text"
          id="sourceStation"
          name="sourceStation"
          value={sourceStation}
          onChange={(event) => setSourceStation(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="destinationStation">Destination Station:</label>
        <input
          type="text"
          id="destinationStation"
          name="destinationStation"
          value={destinationStation}
          onChange={(event) => setDestinationStation(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="journeyDate">Journey Date:</label>
        <input
          type="date"
          id="journeyDate"
          name="journeyDate"
          value={journeyDate}
          onChange={(event) => setJourneyDate(event.target.value)}
        />
      </div>
      <button type="submit">Search Trains</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {trainList.length > 0 && (
        <div>
          <h2>Train List:</h2>
          {trainList.map((train) => (
            <div key={train.train_number}>
              <h3>{train.train_name}</h3>
              <p>Train Number: {train.trainNumber}</p>
              <p>Source Station: {train.sourceStation}</p>
              <p>Departure Time: {train.departureTime}</p>
              <p>Destination Station: {train.destinationStation}</p>
              <p>Arrival Time: {train.arrivalTime}</p>
              <p>Duration: {train.duration}</p>
              <p>Available Classes: {train.availableClasses.join(", ")}</p>
            </div>
          ))}
        </div>
      )}
    </form>

    </div>
  )
}

export default Train_search