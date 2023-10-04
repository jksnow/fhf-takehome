import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Event, events } from "../data/events";
import {
  Typography,
  Checkbox,
  Button,
  Container,
  Box,
  Card,
  CardContent,
} from "@mui/material";

const CheckoutTotalColumn: React.FC = () => {
  const { eventId, tickets = 1 } = useParams<{
    eventId: string;
    tickets?: string;
  }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [agreement, setAgreement] = useState(false);

  useEffect(() => {
    // Find the event based on the provided eventId
    const selectedEvent = events.find((e) => e.id === Number(eventId));

    if (selectedEvent) {
      setEvent(selectedEvent);
    }
  }, [eventId]);

  if (!event) {
    // Event not found
    return <div>Event not found</div>;
  }

  const ticketPrice = event.price * Number(tickets);
  const serviceFee = 44.08 * Number(tickets);
  const orderProcessingFee = 2.95;
  const totalAmount = ticketPrice + serviceFee + orderProcessingFee;

  const handleCheckboxChange = () => {
    setAgreement(!agreement);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "space-between", py: 2 }}>
            <Typography variant="h4">Total</Typography>
            <Typography>${totalAmount.toFixed(2)}</Typography>
          </Box>

          <Typography variant="h5">Tickets</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", py: 2 }}>
            <Typography>Resale tickets: x {tickets}</Typography>
            <Typography>${ticketPrice.toFixed(2)}</Typography>
          </Box>

          <Typography variant="h5">Notes from Seller</Typography>
          <Typography>Lorem ipsum</Typography>

          <Typography variant="h5">Fees</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", py: 2 }}>
            <Typography>Service fee x {tickets}</Typography>
            <Typography>${serviceFee.toFixed(2)}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", py: 2 }}>
            <Typography>Order Processing Fee</Typography>
            <Typography>${orderProcessingFee.toFixed(2)}</Typography>
          </Box>

          <Typography variant="h5">Delivery</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", py: 2 }}>
            <Typography>Mobile Entry</Typography>
            <Typography>Free</Typography>
          </Box>
          <Typography>
            <strong>*All sales Final - No Refunds</strong>
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", py: 2 }}>
            <Checkbox
              checked={agreement}
              onChange={handleCheckboxChange}
            />
            <Typography>
              I have read and agree to the current Terms of Use.
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            disabled={!agreement}
            fullWidth
          >
            Place Order
          </Button>
        </Container>
      </CardContent>
    </Card>
  );
};

export default CheckoutTotalColumn;
