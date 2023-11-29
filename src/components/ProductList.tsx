import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PrintIcon from "@mui/icons-material/Print";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import EditIcon from "@mui/icons-material/Edit";
import Autocomplete from "@mui/material/Autocomplete";
import { Product, productList } from "../data/productList";

export const ProductList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProductList, setFilteredProductList] = useState<Product[]>([]);

  const handleApproveProduct = (productId: number) => {
    // Handle product approval logic
  };

  const handleMarkMissing = (productId: number, urgent: boolean) => {
    // Handle marking product as missing logic
  };

  const handleEditProduct = (productId: number) => {
    // Handle editing product logic
  };

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setSearchTerm(value);
    // Filter the product list based on the search term
    const filteredList = productList.filter(
      (product) =>
        product.productName.toLowerCase().includes(value.toLowerCase()) ||
        product.brand.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProductList(filteredList);
  };

  return (
    <Paper
      sx={{
        margin: "10px",
        padding: "16px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Autocomplete
            options={productList}
            getOptionLabel={(option) => option.productName}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search"
                onChange={(e: any) => handleSearchChange(e, e.target.value)}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginRight: "10px" }}
          >
            Add Item
          </Button>
          <Tooltip title="Print Orders">
            <IconButton color="primary">
              <PrintIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle2">Product Name</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle2">Brand</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="subtitle2">Price</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="subtitle2">Quantity</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="subtitle2">Total</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle2">Status</Typography>
        </Grid>
      </Grid>
      <Divider />

      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        {filteredProductList.map((product, index) => (
          <React.Fragment key={product.id}>
            
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={1}>
                {/* Product Image Icon */}
                <img
                  src={product.image}
                  alt={`Product ${index + 1}`}
                  style={{ width: "30px", height: "30px" }}
                />
              </Grid>
              <Grid item xs={2}>
                <Typography>{product.productName}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>{product.brand}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>{product.price}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>{product.quantity}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>{product.total}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Chip
                  label={product.status}
                  color={
                    product.status === "Approved" ? "primary" : "secondary"
                  }
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  onClick={() => handleApproveProduct(product.id)}
                  title="Approve Product"
                >
                  <CheckCircleOutlineIcon />
                </IconButton>
                <IconButton
                  onClick={() => handleMarkMissing(product.id, true)}
                  title="Mark as Missing (Urgent)"
                >
                  <HighlightOffIcon />
                </IconButton>
                <IconButton
                  onClick={() => handleEditProduct(product.id)}
                  title="Edit Product"
                >
                  <EditIcon />
                </IconButton>
              </Grid>
              
            </Grid>
            <Divider />
          </React.Fragment>
        ))}
      </Grid>
    </Paper>
  );
};
