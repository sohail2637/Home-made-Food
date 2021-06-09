import React, { useState } from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import SimpleModal from "./detailModel";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "90%",
    margin: "4% auto",
  },
  paper: {
    padding: theme.spacing(2),
    height: "150px",
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#EEEEEE",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    color: "#3F51B5",
    textTransform: "uppercase",
  },
  roottable: {
    maxWidth: "100%",
    margin: " 3% auto 6% auto",
    fontFamily: "sans-serif",
    color: "#fff",
  },

  papersearch: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#fff",
  },
  titlesearch: {
    color: "#007bff",
    textTransform: "uppercase",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "700",
  },
  recovered: {
    // backgroundColor: "#BCE5BA",
    borderLeft: "2px solid #fff",
  },
  deaths: {
    // backgroundColor: "#F5B3B1",
    borderLeft: "2px solid #fff",
  },
  cases: {
    // backgroundColor: "#ABE9ED",
    borderLeft: "2px solid #fff",
  },
  active: {
    // backgroundColor: "#B3DDEF",
    borderLeft: "2px solid #fff",
  },
  critical: {
    // backgroundColor: "#FBF2E9",
    borderLeft: "2px solid #fff",
  },
  searchfield: {
    maxWidth: "30%",
    margin: "15px 0px",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#EEEEEE",
    "&:hover": {
      backgroundColor: "#a7acb8",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // cursor:"pointer",
  },
  tablebody: {
    minHeight: "400px",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    maxWidth: "85%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#243028",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const AdminPanal = () => {
  const classes = useStyles();
  const [country, setCountry] = useState([]);
  const [value, setValue] = useState("");
  const [employ, setEmploy] = useState("seller");
  const viewInfo = (employ) => {
    setEmploy(employ);
    console.log(employ);
    // switch {
    //   case '':
    // }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            className={classes.paper}
            onClick={() => viewInfo("seller")}
          >
            <h3 className={classes.title}> Seller </h3>
            <h3> 4344434</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            className={classes.paper}
            onClick={() => viewInfo("deliverboy")}
          >
            <h3 className={classes.title}> Deliver boy </h3>
            <h3> 23423</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            className={classes.paper}
            onClick={() => viewInfo("client")}
          >
            <h3 className={classes.title}> client </h3>
            <h3> 234234</h3>
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.roottable}>
        <div clasName={classes.bredcrumb} >
          <div className={classes.searchfield}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              value={value}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={(e) => setValue(e.target.value)}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div>
            <Typography variant="h5"  style={{ color: "#232323" }}>
              
              {employ}
            </Typography>
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Profile Pic</StyledTableCell>
                <StyledTableCell align="left">Full Name</StyledTableCell>
                <StyledTableCell align="left">Total Post</StyledTableCell>
                <StyledTableCell align="left">Contact No</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Delet</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.tablebody}>
              <StyledTableRow>
                <StyledTableCell
                  component="th"
                  scope="row"
                  className={classes.titlesearch}
                >
                  {" "}
                  khkj
                  {/* <SimpleModal country={val} /> */}
                </StyledTableCell>
                <StyledTableCell align="left" className={classes.recovered}>
                  dfaa
                </StyledTableCell>
                <StyledTableCell align="left" className={classes.recovered}>
                  asasdsad
                </StyledTableCell>
                <StyledTableCell align="left" className={classes.deaths}>
                  assasa
                </StyledTableCell>
                <StyledTableCell align="left" className={classes.deaths}>
                  sdsq
                </StyledTableCell>
                <StyledTableCell align="left" className={classes.cases}>
                  scc
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AdminPanal;
