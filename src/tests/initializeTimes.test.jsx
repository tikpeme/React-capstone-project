// tests/initializeTimes.test.js

import { describe, it, expect, vi } from "vitest";
import { initializeTimes } from "../components/BookingPage";
import { fetchAPI } from "../utils/api";

// Mock fetchAPI
vi.mock("../utils/api", () => ({
  fetchAPI: vi.fn(),
}));

describe("initializeTimes", () => {
  it("should return the available times for today's date", () => {
    // Arrange
    const today = new Date();
    const mockTimes = ["17:00", "18:00"];
    fetchAPI.mockReturnValue(mockTimes);

    // Act
    const result = initializeTimes();

    // Assert
    expect(fetchAPI).toHaveBeenCalledWith(today);
    expect(result).toEqual(mockTimes);
  });
});
