import { Card, CardContent, Typography, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CheckoutDeliveryDetails = () => {
  return (
    <Box sx={{ py: 2 }}>
      <Card variant="outlined">
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "flex-start", py: 2 }}>
            <Typography variant="h6">Delivery</Typography>
            <CheckCircleIcon
              sx={{ color: "green" }}
              color="primary"
            />
          </Box>
          <Typography variant="subtitle1">Mobile Entry - Free</Typography>
          <Typography variant="body2">
            Tickets available by Sun Apr 3, 2023
          </Typography>
          <Typography variant="body2">
            These Mobile tickets will be transferred directly to you from a
            trusted seller.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CheckoutDeliveryDetails;
