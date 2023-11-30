import { Box } from "@mui/material";
import { ProductList } from "../components/ProductList";
import { SupplierDetails } from "../components/SupplierDetails";
import { OrderList } from "../components/OrderList";
import { useSelector } from "react-redux";
import { selectSelectedOrder } from "../store/order/orderSlice";
import { OrderDetails } from "../components/OrderDetails";

export const OrderPage = () => {
  const selectedOrder = useSelector(selectSelectedOrder);

  return (
    <Box sx={{ paddingLeft: "5%", marginRight: "5%" }}>
      {selectedOrder ? (
        <>
          <SupplierDetails />
          <ProductList />
        </>
      ) : (
        <Box >
          <OrderList />
        </Box>
      )}
    </Box>
  );
};
