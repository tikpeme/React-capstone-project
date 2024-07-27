import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const BookingForm = ({
  submitAPI,
  availableTimes = [],
  dispatch,
  bookingDetails = {},
  setBookingDetails,
}) => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [errors, setErrors] = useState({}); // State to hold validation errors

  const {
    date = "",
    time = "",
    numberOfGuests = 1,
    occasion = "None",
  } = bookingDetails;

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setBookingDetails({ ...bookingDetails, date: newDate });
    dispatch({ type: "UPDATE_TIMES", date: new Date(newDate) }); // Ensure date is a Date object
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const validateForm = (details) => {
    const errors = {};

    if (!details.date) {
      errors.date = "Date is required";
    }

    if (!details.time) {
      errors.time = "Time is required";
    }

    if (!details.numberOfGuests) {
      errors.numberOfGuests = "Number of guests is required";
    } else if (details.numberOfGuests < 1 || details.numberOfGuests > 10) {
      errors.numberOfGuests = "Number of guests must be between 1 and 10";
    }

    if (!details.occasion) {
      errors.occasion = "Occasion is required";
    }

    return errors;
  };

  const submitForm = () => {
    const validationErrors = validateForm(bookingDetails);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (typeof submitAPI === "function") {
      // Call submitAPI with form details and navigate if successful
      if (submitAPI(bookingDetails)) {
        // Save new booking to local storage
        const existingBookings =
          JSON.parse(localStorage.getItem("bookings")) || [];
        localStorage.setItem(
          "bookings",
          JSON.stringify([...existingBookings, bookingDetails])
        );

        dispatch({ type: "ADD_BOOKING", booking: bookingDetails }); // Add new booking to the state
        navigate("/confirmation");
      }
    } else {
      console.error("submitAPI is not a function");
    }
  };

  return (
    <section className="bg-secondary py-32">
      <h1 className="font-Markazi text-primary text-64pt text-center pb-[4rem]">
        RESERVATION
      </h1>
      <div className="w-[100%] bg-secondary">
        <form className="flex flex-col justify-center w-[100%] lg:w-[60%] m-auto items-center gap-20 shadow-s">
          <div className="flex flex-row gap-5 justify-center w-[70%]">
            <div className="flex flex-col gap-1 mb-2 flex-1 items-center">
              <label htmlFor="guests">GUESTS</label>
              <input
                id="guests"
                className="border bg-highlight rounded-8 w-[9rem] text-center"
                name="numberOfGuests"
                type="number"
                placeholder="1"
                min={1}
                max={10}
                value={numberOfGuests}
                onChange={handleChange}
                aria-label="Number of guests"
              />
              {errors.numberOfGuests && (
                <span className="text-red-600 font-bold">
                  {errors.numberOfGuests}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1 mb-2 flex-1 items-center">
              <label htmlFor="date">DATE</label>
              <input
                id="date"
                className="border bg-highlight rounded-8 w-[9rem] text-center"
                name="date"
                type="date"
                value={date}
                onChange={handleDateChange}
                aria-label="Date"
                min={new Date().toISOString().split("T")[0]} // Set minimum date to today
              />
              {errors.date && (
                <span className="text-red-600 font-bold">{errors.date}</span>
              )}
            </div>
          </div>
          <div className="flex flex-row gap-5 justify-center w-[70%]">
            <div className="flex flex-col gap-1 mb-2 flex-1 items-center">
              <label htmlFor="res-time">TIME</label>
              <select
                id="res-time"
                name="time"
                className="border bg-highlight rounded-8 w-[9rem] text-center"
                value={time}
                onChange={handleChange}
                aria-label="Time"
              >
                <option value="">Select time</option>
                {availableTimes.map((timeOption) => (
                  <option key={timeOption} value={timeOption}>
                    {timeOption}
                  </option>
                ))}
              </select>
              {errors.time && (
                <span className="text-red-600 font-bold">{errors.time}</span>
              )}
            </div>
            <div className="flex flex-col gap-1 mb-2 flex-1 items-center">
              <label htmlFor="occasion">OCCASION</label>
              <select
                id="occasion"
                name="occasion"
                className="border bg-highlight rounded-8 w-[9rem] text-center"
                value={occasion}
                onChange={handleChange}
                aria-label="Occasion"
              >
                <option value="">Select Occasion </option>
                <option value="None">None</option>
                <option value="Birthday">Birthday</option>
                <option value="Engagement">Engagement</option>
                <option value="Anniversary">Anniversary</option>
              </select>
              {errors.occasion && (
                <span className="text-red-600 font-bold">
                  {errors.occasion}
                </span>
              )}
            </div>
          </div>

          <div className="border-t-2 pt-10 w-[70%] sm:w-full flex">
            <Button
              onClick={submitForm}
              type="button"
              className="w-fit m-auto"
              aria-label="Reserve Table"
            >
              Reserve Table
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
