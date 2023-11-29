import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const SupplierDetails = () => {
  const orderDetails: any = {
    "32457ABC": {
      supplier: "East Coast fruits & vegetables",
      shippingDate: "2015-01-01T00:00:00",
      total: 15028.3,
      category: ["winter", "summer", "rainy"],
      department: "300 - 444 - 678",
      status: "Awaiting your approval",
    },
  };

  const orderKey = Object.keys(orderDetails)[0];
  const orderData = orderDetails[orderKey];
  const keys = Object.keys(orderData);

  return (
    <Paper
      sx={{
        margin: "10px", // Optional: Adjust the top margin as needed
      }}
    >
      <Grid container spacing={1} >
        {keys.map((key, index) => (
          <React.Fragment key={key}>
            <Grid item container direction={"column"} spacing={1} xs>
              <Grid item>
                <Typography variant="body1" component="div">
                  {key}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" component="div" fontWeight="bold">
                  {orderData[key]}
                </Typography>
              </Grid>
            </Grid>

            {index !== keys.length - 1 && (
              <Grid item>
                <Typography variant="body1" component="div">
                  |
                </Typography>
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Paper>
  );
};
