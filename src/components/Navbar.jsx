import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logoImage from "../assets/logo.png";
import { useTheme, useMediaQuery } from "@mui/material";

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar
      position="static"
      color="transparent"
      variant="outlined"
      sx={{
        border: "none",
      }}>
      <Container
        maxWidth="lg"
        sx={{
          padding: "14px 0px",
        }}>
        <Toolbar
          sx={{
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "center" : "center",
            gap: isMobile ? 0 : 0,
          }}>
          <Box
            component="img"
            src={logoImage}
            alt="Logo"
            sx={{
              width: "130px",
              maxWidth: 600,
              height: "60px",
            }}
          />

          <Box
            sx={{
              flexGrow: isMobile ? 0 : 1,
              gap: "5px",
              display: "flex",
              justifyContent: isMobile ? "center" : "end",
              alignItems: "center",
              marginLeft: isMobile ? 0 : "auto",
              mt: isMobile ? 2 : 0,
            }}>
            <Button
              variant="contained"
              disableRipple
              sx={{
                backgroundColor: "#32d095",
                color: "#d7e7f4",
                padding: "8px 20px",
                borderRadius: "25px",
                textTransform: "uppercase",
                cursor: "pointer",
                fontSize: "12px",
                width: "fit-content",
                fontWeight: "600",
                boxShadow: "none",
                lineHeight: "1.5",
                "&:hover": {
                  backgroundColor: "#28b884",
                  boxShadow: "none",
                },
              }}>
              Travel Agency
            </Button>
            <Button
              variant="contained"
              disableRipple
              sx={{
                backgroundColor: "#525371",
                color: "#d7e7f4",
                padding: "8px 20px",
                borderRadius: "25px",
                textTransform: "uppercase",
                cursor: "pointer",
                fontSize: "12px",
                width: "fit-content",
                fontWeight: "600",
                boxShadow: "none",
                lineHeight: "1.5",
                "&:hover": {
                  backgroundColor: "#525471",
                  boxShadow: "none",
                },
              }}>
              Login / SignUp
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
