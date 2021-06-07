import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Typography,
  Button,
  Box,
  TextareaAutosize,
  Input,
} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import TextField from "@material-ui/core/TextField";
// import MuiPhoneNumber from "material-ui-phone-number";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  },
  navBarContainer: {
    width: "100%",

    backgroundSize: "cover",
    backgroundPosition: "center",
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(/assets/images/registerimg.png)",
  },
  formContainer: {
    marginTop: "4rem",
    marginBottom: "3rem",
    paddingLeft: "10rem",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0rem",
      paddingRight: "0rem",
    },

    paddingRight: "10rem",
  },
  inputLbel: {
    paddingLeft: "1rem",
    fontSize: "12px",
  },

  seeBtn: {
    backgroundColor: "#232323",
    width: "100%",
    textTransform: "capitalize",
    borderRadius: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 35,
    textAlign: "center",
    color: "#fff",
    // marginLeft: "0.5rem",
    "&:hover": {
      backgroundColor: "#f33f3f",
    },
  },
  firstLine: {
    backgroundColor: "red",
    width: "117px",
    height: "0px",
    // marginTop: "3rem",
    border: "0.5px solid #555555",
  },

  RegisterContent: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 70,
    paddingBottom: 100,
  },

  security: {
    fontSize: "64px",
    fontFamily: "Spartan",
    color: "#232323",
    lineHeight: 1,
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
      fontWeight: "500",
    },
  },
  boxContainer: {
    width: "auto",
    height: "auto",
    border: "1px solid #f33f3f",
    marginTop: "1rem",
    padding: "1rem",
    [theme.breakpoints.down("md")]: {
      padding: "0.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0.4rem",
    },
  },
  orContainer: {
    color: theme.lightGray,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 7,
  },
}));

const ShippingOrder = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} lg={6} className={classes.formContainer}>
            <Container maxWidth="md">
              <form>
                <Typography>
                  <label for="fname" className={classes.inputLbel}>
                    Full Name
                  </label>
                </Typography>

                <TextField
                  fullWidth
                  required
                  id="outlined-helperText"
                  variant="outlined"
                />

                <Typography style={{ marginTop: "1rem" }}>
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    Mobile Number
                  </label>
                </Typography>

                <TextField
                  fullWidth
                  required
                  type="number"
                  // type="tel"
                  // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  id="outlined-helperText"
                  variant="outlined"
                />
                {/* <MuiPhoneNumber
                  name="phone"
                  label="Phone Number"
                  data-cy="user-phone"
                  defaultCountry={"us"}
                  value={this.state.phone}
                  onChange={this.handlePhoneChange}
                /> */}

                <Typography style={{ marginTop: "1rem" }}>
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    Email
                  </label>
                </Typography>

                <TextField
                  fullWidth
                  id="outlined-helperText"
                  required
                  variant="outlined"
                />
                <Typography style={{ marginTop: "1rem" }}>
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    Address
                  </label>
                </Typography>
                <TextField
                  fullWidth
                  required
                  id="standard-multiline-static"
                  multiline
                  rows={4}
                  variant="outlined"
                />

                <Typography style={{ marginTop: "1rem" }}>
                  <label for="fname" className={classes.inputLbel}>
                    ZIP code
                  </label>
                </Typography>

                <TextField
                  fullWidth
                  type="number"
                  required
                  id="outlined-helperText"
                  variant="outlined"
                />
                <Button
                  fullWidth={true}
                  type="submit"
                  className={classes.seeBtn}
                  fullWidth
                >
                  Continue Shipping
                </Button>
              </form>

              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
              ></Box>
              {/* </div> */}
            </Container>
          </Grid>

          <Hidden xsDown>
            <Grid item xs={12} lg={6} className={classes.navBarContainer}>
              <div className={classes.RegisterContent}>
                <Box>
                  {" "}
                  <img src="/images/gallery/03.jpg" />
                </Box>
                <Box>
                  <Typography variant="h6">Chikankri</Typography>
                </Box>
                <Box className={classes.boxContainer}>
                  <Typography
                    variant="h5"
                    style={{
                      fontFamily: "Spartan",
                      color: "#232323",
                    }}
                  >
                    Total:&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{ color: "#f33f3f" }}>0.56</span>
                  </Typography>
                </Box>
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </div>
    </div>
  );
};
export default ShippingOrder;
