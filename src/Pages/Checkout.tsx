import CheckoutDeliveryDetails from "../Components/CheckoutDeliveryDetails";
import React from "react";
import { Container, Grid } from "@mui/material";
import CheckoutPaymentInformation from "../Components/CheckoutPaymentInformation";
import CheckoutTotalColumn from "../Components/CheckoutTotalColumn";

const Checkout: React.FC = () => {
  return (
    <Container>
      <Grid
        container
        direction={"row"}
        justifyContent={"space-around"}
      >
        <Grid
          container
          direction={"column"}
          spacing={3}
        >
          <Grid
            item
            xs={12}
            sm={6}
          >
            <CheckoutDeliveryDetails />
            <CheckoutPaymentInformation />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <CheckoutTotalColumn />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
