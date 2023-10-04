import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventList from "./Pages/EventList";
import Checkout from "./Pages/Checkout";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1e4620",
    },
    secondary: {
      main: "#0d3d73",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          {/* Your header/navigation can go here if needed */}
          <Routes>
            {/* Route for the EventList component (default page) */}
            <Route
              path="/"
              element={<EventList />}
            />

            {/* Route for the Checkout component */}
            <Route
              path="/checkout/:eventId/:tickets"
              element={<Checkout />}
            />

            {/* Add more routes for other pages if needed */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
