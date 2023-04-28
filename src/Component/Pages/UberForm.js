import React, { useState } from "react";
import axios from "axios";
import style from "./UberForm.module.css";

const UberForm = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [distance, setDistance] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        "https://distance-calculator8.p.rapidapi.com/calc",
        {
          headers: {
            "x-rapidapi-key":
              "918bf3cc48msh932745dd8a463d9p133b01jsnd40d534fbb58",
            "x-rapidapi-host": "distance-calculator8.p.rapidapi.com",
          },
          params: {
            startLatitude: "30.741482",
            startLongitude: "76.768066",
            endLatitude: "28.65195",
            endLongitude: "77.23149",
            pickup,
            dropoff,
          },
        }
      );
      setDistance(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style["container"]}>
      <form className={style["uber-form"]} onSubmit={handleSubmit}>
        <div className={style["form-group"]}>
          <label htmlFor="pickup">Pickup Location</label>
          <input
            type="text"
            className={style["form-control"]}
            id="pickup"
            placeholder="Enter pickup location"
            value={pickup}
            onChange={(event) => setPickup(event.target.value)}
            required
          />
        </div>
        <div className={style["form-group"]}>
          <label htmlFor="dropoff">Dropoff Location</label>
          <input
            type="text"
            className={style["form-control"]}
            id="dropoff"
            placeholder="Enter dropoff location"
            value={dropoff}
            onChange={(event) => setDropoff(event.target.value)}
            required
          />
        </div>
        <button type="submit" className={style["btn"]}>
          Calculate Distance
        </button>
      </form>
      {distance && (
        <div className={style["result"]}>
          <img
            src="https://th.bing.com/th/id/OIP.Jw0FavccyXTWq0nU_p6U2wHaEQ?pid=ImgDet&rs=1"
            alt="texi"
          />
          <p>
            {" "}
            Distance between {pickup} and {dropoff}:{" "}
            {distance.body.distance.kilometers.toFixed(2)} km
          </p>
          <p> Total Cost ₹ {(distance.body.distance.kilometers * 8).toFixed(2)} </p>
        </div>
      )}
    </div>
  );
};

export default UberForm;
