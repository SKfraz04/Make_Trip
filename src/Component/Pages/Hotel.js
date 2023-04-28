import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ".//Hotel.css";

const Hotel = () => {
  const { register, handleSubmit } = useForm();
  const [hotelData, SetHotelData] = useState([]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.get(
        "https://booking-com.p.rapidapi.com/v2/hotels/search",
        {
          headers: {
            "x-rapidapi-key":
              "918bf3cc48msh932745dd8a463d9p133b01jsnd40d534fbb58",
            "x-rapidapi-host": "booking-com.p.rapidapi.com",
          },
          params: {
            // add your search parameters here
            dest_id: "-553173",
            locale: "en-gb",
            units: "metric",
            room_number: "1",
            dest_type: "city",
            order_by: "popularity",
            filter_by_currency: "INR",
            checkin_date: data.checkIn,
            checkout_date: data.checkOut,
            adults_number: data.adultsNumber,
            children_number: data.childrenNumber,
          },
        }
      );
      console.log(response.data);
      SetHotelData(response.data.results);
      // handle the search results and display them in your application
    } catch (error) {
      console.log(error);
      // handle the error
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="checkIn">Check-in date</label>
        <input type="date" id="checkIn" {...register("checkIn")} />

        <label htmlFor="checkOut">Check-out date</label>
        <input type="date" id="checkOut" {...register("checkOut")} />

        <label htmlFor="adultsNumber">Number of adults</label>
        <input type="number" id="adultsNumber" {...register("adultsNumber")} />

        <label htmlFor="childrenNumber">Number of children</label>
        <input
          type="number"
          id="childrenNumber"
          {...register("childrenNumber")}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <ul className="my-3">
          Hotel List
          <div className="d-flex flex-wrap item_outer">
            {hotelData.map((e) => {
              return (
                <div className="wrapper col-4">
                  <img
                    src={e.photoMainUrl}
                    alt="hotel"
                    className="img-fluid image"
                  />
                  <div className="details">
                    {/* <h1>
                      <em>Boracay Island</em>
                    </h1> */}
                    <h2>{e.name}</h2>
                  </div>
                  <p>
                    {" "}
                    {e.checkinDate} To {e.checkoutDate}{" "}
                  </p>
                  <h4>₹ {e.priceBreakdown.grossPrice.value}</h4>
                </div>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Hotel;
