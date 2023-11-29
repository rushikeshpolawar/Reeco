import { Box } from "@mui/material";
import { ProductList } from "./ProductList";
import { SupplierDetails } from "./SupplierDetails";

export const MainLayout = () => {
  return (
    <Box sx={{paddingLeft:"5%", marginRight:"5%"}}>
      <SupplierDetails />
      <ProductList />
    </Box>
  );
};
