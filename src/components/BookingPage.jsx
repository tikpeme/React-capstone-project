import { useEffect, useReducer, useState } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../utils/api";

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, availableTimes: fetchAPI(action.date) };
    case "ADD_BOOKING":
      // Update bookings array with new booking
      return {
        ...state,
        bookings: [...state.bookings, action.booking],
      };
    default:
      return state;
  }
};

const BookingPage = () => {
  const [state, dispatch] = useReducer(updateTimes, {
    availableTimes: initializeTimes(),
    bookings: JSON.parse(localStorage.getItem("bookings")) || [],
  });
  const [bookingDetails, setBookingDetails] = useState({
    date: "",
    time: "",
    numberOfGuests: "",
    occasion: "",
  });

  useEffect(() => {
    // Initialize times when component mounts
    dispatch({ type: "UPDATE_TIMES", date: new Date() });
  }, []);

  useEffect(() => {
    // Update times whenever the date changes
    if (bookingDetails.date) {
      dispatch({ type: "UPDATE_TIMES", date: new Date(bookingDetails.date) });
    }
  }, [bookingDetails.date]);
  return (
    <BookingForm
      availableTimes={state.availableTimes}
      dispatch={dispatch}
      bookingDetails={bookingDetails}
      setBookingDetails={setBookingDetails}
      submitAPI={submitAPI}
    />
  );
};

export default BookingPage;
