import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import { events } from "../data/events";

const EventList: React.FC = () => {
  const [ticketCounts, setTicketCounts] = useState<{
    [eventId: number]: number;
  }>(events.reduce((acc, event) => ({ ...acc, [event.id]: 0 }), {}));

  const handleIncrement = (eventId: number) => {
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [eventId]: prevCounts[eventId] + 1,
    }));
  };

  const handleDecrement = (eventId: number) => {
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [eventId]: Math.max(prevCounts[eventId] - 1, 0),
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {events.map((event) => (
        <Card
          key={event.id}
          variant="outlined"
          style={{ display: "flex", marginBottom: "20px" }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
            >
              {event.name}
            </Typography>
            <Typography
              color="textSecondary"
              gutterBottom
            >
              Date: {event.date}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
            >
              Price: ${event.price}
            </Typography>
            <img
              src={event.imageUrl}
              alt={event.name}
              style={{ width: "100%", marginTop: "10px" }}
            />
            <Box
              display="flex"
              alignItems="center"
            >
              <IconButton
                onClick={() => handleDecrement(event.id)}
                aria-label="Remove"
              >
                <RemoveIcon />
              </IconButton>
              <Typography variant="body2">{ticketCounts[event.id]}</Typography>
              <IconButton
                onClick={() => handleIncrement(event.id)}
                aria-label="Add"
              >
                <AddIcon />
              </IconButton>
            </Box>
            <Link to={`/checkout/${event.id}/${ticketCounts[event.id]}`}>
              <Button
                variant="contained"
                color="primary"
              >
                Buy Tickets
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EventList;
