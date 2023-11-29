import React from 'react';
import { Breadcrumbs, Link } from '@mui/material';

export const BreadcrumbsUI = () => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Home
        </Link>
        <Link color="inherit" href="/products">
          Products
        </Link>
        <Link color="inherit" href="/products/1234">
          Product Details
        </Link>
      </Breadcrumbs>
    </>
  );
};
