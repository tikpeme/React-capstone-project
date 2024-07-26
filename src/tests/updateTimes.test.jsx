// tests/updateTimes.test.js

import { describe, it, expect, vi } from "vitest";
import { updateTimes } from "../components/BookingPage";
import { fetchAPI } from "../utils/api";

vi.mock("../utils/api", () => ({
  fetchAPI: vi.fn(),
}));

describe("updateTimes", () => {
  it('should update availableTimes when "UPDATE_TIMES" action is dispatched', () => {
    const date = new Date("2024-07-25");
    const mockTimes = ["17:00", "18:00"];
    fetchAPI.mockReturnValue(mockTimes);
    const initialState = { availableTimes: [], bookings: [] };
    const action = { type: "UPDATE_TIMES", date };

    const result = updateTimes(initialState, action);

    expect(fetchAPI).toHaveBeenCalledWith(date);
    expect(result).toEqual({ ...initialState, availableTimes: mockTimes });
  });

  it('should add a new booking when "ADD_BOOKING" action is dispatched', () => {
    const initialBooking = {
      date: "2024-07-25",
      time: "18:00",
      numberOfGuests: 4,
      occasion: "Birthday",
    };
    const newBooking = {
      date: "2024-07-26",
      time: "19:00",
      numberOfGuests: 2,
      occasion: "Anniversary",
    };
    const initialState = { availableTimes: [], bookings: [initialBooking] };
    const action = { type: "ADD_BOOKING", booking: newBooking };

    const result = updateTimes(initialState, action);

    expect(result).toEqual({
      ...initialState,
      bookings: [...initialState.bookings, newBooking],
    });
  });
});
