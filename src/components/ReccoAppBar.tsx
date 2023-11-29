import React, { useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Container from "@mui/material/Container";

const pages: string[] = ["Store", "Orders", "Analytics"];
const userDetails: string = "Caw Studio"; // Replace with actual username.
const cartItemCount = 3; // Replace with actual cart count.

export const ReccoAppBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#388e3c", height: 60, paddingLeft: "5%", paddingRight: "5%"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          {/* Logo for REECO */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
              }}
            >
              REECO
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            {pages.map((page) => (
              <Button key={page} sx={{ color: "white", mx: 1 }}>
                {page}
              </Button>
            ))}
          </Box>

          <Tooltip title="Cart">
            <IconButton color="inherit" onClick={handleOpenUserMenu}>
              <Badge badgeContent={cartItemCount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          <Box
            sx={{ display: "flex", alignItems: "center"}}
          >
            <Typography variant="body1" sx={{ color: "white", mx: 1 }}>
              Hello, {userDetails}
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
