// import React, { useState } from "react";

// function TrainSearchForm() {
//   const [sourceStation, setSourceStation] = useState("");
//   const [destinationStation, setDestinationStation] = useState("");
//   const [journeyDate, setJourneyDate] = useState("");
//   const [trainList, setTrainList] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsLoading(true);
//     setError(null);

//     const axios = require("axios");

//     const options = {
//       method: "GET",
//       url: "https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations",
//       params: {
//         fromStationCode: "CDG",
//         toStationCode: "NDLS",
//         dateOfJourney: "2023-04-27",
//       },
//       headers: {
//         // "content-type": "application/octet-stream",
//         "X-RapidAPI-Key": "918bf3cc48msh932745dd8a463d9p133b01jsnd40d534fbb58",
//         "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
//       },
//     };

//     try {
//       const response = await axios.request(options);
//           //   const data = await response.json();
//       setTrainList(response.trainList);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }

//     // try {
//     //   const response = await fetch(
//     //     // https://irctc1.p.rapidapi.com/api/v1/searchTrain
//     //     // https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations
//     //     `https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?source=${sourceStation}&destination=${destinationStation}&journeyDate=${journeyDate}`,
//     //     {
//     //       method: 'GET',
//     //       headers: {
//     //         'x-rapidapi-host': '918bf3cc48msh932745dd8a463d9p133b01jsnd40d534fbb58',
//     //         'x-rapidapi-key': 'irctc1.p.rapidapi.com',
//     //       },
//     //     }
//     //   );
//     //   const data = await response.json();
//     //   setTrainList(data.trainList);
//     // } catch (error) {
//     //   setError(error);
//     // }

//     setIsLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit} method="GET">
//       <div>
//         <label htmlFor="sourceStation">Source Station:</label>
//         <input
//           type="text"
//           id="sourceStation"
//           name="sourceStation"
//           value={sourceStation}
//           onChange={(event) => setSourceStation(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="destinationStation">Destination Station:</label>
//         <input
//           type="text"
//           id="destinationStation"
//           name="destinationStation"
//           value={destinationStation}
//           onChange={(event) => setDestinationStation(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="journeyDate">Journey Date:</label>
//         <input
//           type="date"
//           id="journeyDate"
//           name="journeyDate"
//           value={journeyDate}
//           onChange={(event) => setJourneyDate(event.target.value)}
//         />
//       </div>
//       <button type="submit">Search Trains</button>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//       {trainList.length > 0 && (
//         <div>
//           <h2>Train List:</h2>
//           {trainList.map((train) => (
//             <div key={train.train_number}>
//               <h3>{train.train_name}</h3>
//               <p>Train Number: {train.trainNumber}</p>
//               <p>Source Station: {train.sourceStation}</p>
//               <p>Departure Time: {train.departureTime}</p>
//               <p>Destination Station: {train.destinationStation}</p>
//               <p>Arrival Time: {train.arrivalTime}</p>
//               <p>Duration: {train.duration}</p>
//               <p>Available Classes: {train.availableClasses.join(", ")}</p>
//             </div>
//           ))}
//         </div>
//       )}

//     </form>
//   );
// }

// export default TrainSearchForm;

import React, { useState } from "react";
import axios from "axios";

function TrainSearchForm() {
  const [query, setQuery] = useState("");
  const [trainDetails, setTrainDetails] = useState();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.get(
        `https://irctc1.p.rapidapi.com/api/v1/searchTrain?query=${query}`,
        {
          headers: {
            "x-rapidapi-host": "irctc1.p.rapidapi.com",
            "x-rapidapi-key":"918bf3cc48msh932745dd8a463d9p133b01jsnd40d534fbb58",
          },
        }
      );
      console.log(response.data, "response api");

      setTrainDetails(response.data[0]);
    } catch (error) {}
  };

  console.log(trainDetails, "trainDetails");
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      <div>
        <ul>
          {/* <li>{trainDetails.eng_train_name}</li> */}
        </ul>
      </div>
      </form>
    </div>
  );
}

export default TrainSearchForm;
