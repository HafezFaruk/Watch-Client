import {
  Container,
  Grid,
  List,
  ListItemText,
  Typography,
  Box,
  
} from "@mui/material";


import React from "react";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo1.png"
import CustomButton from "../../StyledComponents/CustomButton.js";



const useStyle = makeStyles({
  footerStyle: {
    width: "100%",
    backgroundColor: "#fff",
    marginTop: "10px",
    paddingTop: "10px",
  },
  icons: {
    display: "flex",
    marginTop: "10px",
  },

  icon: {
    color: "#000",
    paddingRight: "10px",
    fontSize: "30px",
  },
  subscribe: {
    margin: "20px 0",
    width: "100%",
    display: "block",
  },
  input: {
    padding: "10px 5px",
  },
  button: {
    padding: "8px 10px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
  },
 
})

const Footer = () => {
  const { footerStyle, icons, icon, input, button, subscribe } =
    useStyle();
  return (
    <footer className={footerStyle}>
      <hr />
      <Container>
        <Grid container spacing={6} sx={{ color: "#000" }}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <List>
              <img style={{ width: "200px" }} src={Logo} alt="Logo" srcset="" />

              <ListItemText>
                Watch Limited, a retail and distribution house, with this the
                concept started its journey in the year 2010 as a small entity.
                Keep subscribing to get various information on our website
              </ListItemText>

              <div className={subscribe}>
                <input
                  className={input}
                  type="email"
                  name=""
                  id=""
                  placeholder="example@gmail.com"
                />
                <CustomButton className={button}> &nbsp; SUBSCRIBE</CustomButton>
              </div>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={2}>
            <List>
              <ListItemText sx={{ mb: 1, fontWeight: "bold" }}>
                QUICK LINKS
              </ListItemText>
              <ListItemText>Search</ListItemText>
              <ListItemText>Privacy Policy</ListItemText>
              <ListItemText>Warranty Information</ListItemText>
              <ListItemText>Shipping</ListItemText>
              <ListItemText>Help Information</ListItemText>
              <ListItemText>Policy Details</ListItemText>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <List>
              <ListItemText sx={{ mb: 1, fontWeight: "bold" }}>
                CUSTOMER SERVICE
              </ListItemText>
              <ListItemText>My Account</ListItemText>
              <ListItemText>Orders</ListItemText>
              <ListItemText>Cart</ListItemText>
              <ListItemText>Wishlist</ListItemText>
              <ListItemText>About Us</ListItemText>
              <ListItemText>Refunds & Returns</ListItemText>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <List>
              <ListItemText sx={{ mb: 1, fontWeight: "bold" }}>
                CONTACT US
              </ListItemText>
              <ListItemText>Address: Dhaka, Bangladesh</ListItemText>
              <ListItemText>Phone: 01303202518</ListItemText>
              <ListItemText>Email: info@watch.com</ListItemText>
            </List>
            <ListItemText sx={{ mt: 1, fontWeight: "bold" }}>
              FOLLOW US
            </ListItemText>
            <Box className={icons}>
              <NavLink to="/" className={icon}>
                <i className="fab fa-facebook"></i>
              </NavLink>
              <NavLink to="/" className={icon}>
                <i className="fab fa-twitter"></i>
              </NavLink>
              <NavLink to="/" className={icon}>
                <i className="fab fa-linkedin"></i>
              </NavLink>
              <NavLink to="/" className={icon}>
                <i className="fab fa-instagram"></i>
              </NavLink>
              <NavLink to="/" className={icon}>
                <i className="fab fa-github"></i>
              </NavLink>
            </Box>
          </Grid>
        </Grid>

        <Typography
          sx={{ textAlign: "center", py: 5, color: "#000" }}
          variant="subtitle1"
        >
          Watch &copy; {new Date().getFullYear()} All Rights Reserved
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
