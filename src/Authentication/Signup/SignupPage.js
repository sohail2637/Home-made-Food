import React from "react";
// import AuthNavbar from "../Header";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography, Button, Box } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
// import ReCAPTCHA from "react-google-recaptcha";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // height: "120vh",
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
  formControl: {
    width:'100%',
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SignupPage = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    Firstname: "",
    LastName: "",
    userName: "",
    email: "",
    password: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    console.log({ [name]: event.target.value });
  };
  const submationform = (event) => {
    event.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} lg={6} className={classes.formContainer}>
            <Container maxWidth="md">
              {/* <div className={classes.Regform}> */}
              <form onSubmit={submationform}>
                <Typography>
                  <label for="fname" className={classes.inputLbel}>
                    First Name
                  </label>
                </Typography>

                <TextField
                  onChange={handleChange}
                  fullWidth
                  id="outlined-helperText"
                  variant="outlined"
                  // value={state.Firstname}
                />

                <Typography style={{ marginTop: "1rem" }}>
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    Last Name
                  </label>
                </Typography>

                <TextField
                  onChange={handleChange}
                  fullWidth
                  id="outlined-helperText"
                  variant="outlined"
                  // value={state.LastName}
                />
                <Typography style={{ marginTop: "1rem" }}>
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    Username
                  </label>
                </Typography>

                <TextField
                  onChange={handleChange}
                  fullWidth
                  id="outlined-helperText"
                  variant="outlined"
                  // value={state.userName}
                />
                <Typography style={{ marginTop: "1rem" }}>
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    Email
                  </label>
                </Typography>

                <TextField
                  onChange={handleChange}
                  fullWidth
                  id="outlined-helperText"
                  variant="outlined"
                  // value={state.email}
                />
                <Typography style={{ marginTop: "1rem" }}>
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    Password
                  </label>
                </Typography>

                <TextField
                  onChange={handleChange}
                  fullWidth
                  id="outlined-helperText"
                  variant="outlined"
                  // value={state.password}
                />
                <FormControl className={classes.formControl}>
                  <Typography style={{ marginTop: "1rem" }}>
                    {" "}
                    <label for="fname" className={classes.inputLbel}>
                      Type
                    </label>
                  </Typography>
                  <Select
                    native
                    required
                    variant="outlined"
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                      name: "age",
                      id: "age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value="seller">seller</option>
                    <option value="delivery boy">delivery boy</option>
                    <option value="buyer">buyer</option>
                  </Select>
                </FormControl>
{/* 
                <Box
                  style={{
                    marginTop: "2.5rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <ReCAPTCHA
                    sitekey="6LdxAKkUAAAAAG05cGSU0EWoUWFvQzM54Y8T00kP"
                    // onChange={onChange}
                  />
                </Box> */}
                <Button
                  type="submit"
                  fullWidth={true}
                  className={classes.seeBtn}
                  fullWidth
                >
                  Submit
                </Button>
              </form>

              <Box className={classes.orContainer}>
                <div className={classes.firstLine} />
                <span style={{ paddingRight: 20, paddingLeft: 20 }}>OR</span>
                <div className={classes.firstLine} />
              </Box>

              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
              >
                <Typography>
                  Already have account? <Link to="/login">Login</Link>
                </Typography>
              </Box>
              {/* </div> */}
            </Container>
          </Grid>

          <Hidden xsDown>
            <Grid item xs={12} lg={6} className={classes.navBarContainer}>
              <div className={classes.RegisterContent}>
                <Box>
                  {" "}
                  <img src="/images/gallery/06.jpg" />
                </Box>
                <Box className={classes.boxContainer}>
                  <Typography
                    style={{
                      fontSize: "36px",
                      fontFamily: "Spartan",
                      color: "#f33f3f",
                    }}
                  >
                    Our Priority is your{" "}
                  </Typography>
                  <Typography className={classes.security}>taste</Typography>
                </Box>
                <Box>
                  <Typography
                    style={{
                      color: "#232323",
                      fontSize: "18px",
                      lineHeight: "40px",
                    }}
                  >
                    Get pure home made food
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
export default SignupPage;
