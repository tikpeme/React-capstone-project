import HomePage from "./components/HomePage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import Layout from "./components/Layout";
import BookingPage from "./components/BookingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "booking",
        element: <BookingPage />,
      },
      {
        path: "confirmation",
        element: <ConfirmedBooking />,
      },
    ],
  },
  {},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
