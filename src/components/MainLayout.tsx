import {  BreadcrumbsUI } from "./BreadcrumbsUI";
import { OrderDetails } from "./OrderDetails";
import { ProductList } from "./ProductList";

export const MainLayout = () => {
  return (
    <>
      <BreadcrumbsUI />
      <OrderDetails />
      <ProductList />
    </>
  );
};
