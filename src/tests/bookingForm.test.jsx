import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import BookingForm from "../components/BookingForm";
import { BrowserRouter as Router } from "react-router-dom";

// Mock functions
const mockDispatch = vi.fn();
const mockSubmitAPI = vi.fn(() => Promise.resolve(true)); // Make sure to return a promise if submitAPI is async
const mockNavigate = vi.fn();

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
  BrowserRouter: ({ children }) => <>{children}</>, // Mock BrowserRouter
}));

const renderComponent = (props = {}) => {
  render(
    <Router>
      <BookingForm
        submitAPI={mockSubmitAPI}
        dispatch={mockDispatch}
        {...props}
      />
    </Router>
  );
};

describe("BookingForm Component", () => {
  it("renders form fields with correct attributes", () => {
    renderComponent();

    // Test the "GUESTS" input
    const guestsInput = screen.getByLabelText(/guests/i);
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput).toHaveAttribute("name", "numberOfGuests");
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");

    // Test the "DATE" input
    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("name", "date");
    expect(dateInput).toHaveAttribute("type", "date");

    // Test the "TIME" select
    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute("name", "time");

    // Test the "OCCASION" select
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute("name", "occasion");
  });

  it("displays validation errors for empty fields when form is submitted", async () => {
    renderComponent();

    fireEvent.click(screen.getByText(/reserve table/i));

    await waitFor(() => {
      expect(screen.getByText(/date is required/i)).toBeInTheDocument();
      expect(screen.getByText(/time is required/i)).toBeInTheDocument();
      expect(
        screen.getByText(/number of guests is required/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/occasion is required/i)).toBeInTheDocument();
    });
  });

  it("displays validation errors for invalid number of guests", async () => {
    renderComponent({
      date: "2024-08-15",
      time: "17:00",
      numberOfGuests: 11,
      occasion: "Birthday",
    });

    fireEvent.click(screen.getByText(/reserve table/i));

    await waitFor(() => {
      expect(
        screen.getByText(/number of guests must be between 1 and 10/i)
      ).toBeInTheDocument();
    });
  });

  it("does not display validation errors for valid form submission", async () => {
    renderComponent({
      date: "2024-08-15",
      time: "17:00",
      numberOfGuests: 2,
      occasion: "Birthday",
    });

    fireEvent.click(screen.getByText(/reserve table/i));

    await waitFor(() => {
      expect(screen.queryByText(/date is required/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/time is required/i)).not.toBeInTheDocument();
      expect(
        screen.queryByText(/number of guests is required/i)
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(/occasion is required/i)
      ).not.toBeInTheDocument();
      expect(mockSubmitAPI).toHaveBeenCalled();
    });
  });

  it("navigates to confirmation page on successful form submission", async () => {
    renderComponent({
      date: "2024-08-15",
      time: "17:00",
      numberOfGuests: 2,
      occasion: "Birthday",
    });

    fireEvent.click(screen.getByText(/reserve table/i));

    await waitFor(() => {
      expect(mockSubmitAPI).toHaveBeenCalled();
      expect(mockNavigate).toHaveBeenCalledWith("/confirmation");
    });
  });
});
