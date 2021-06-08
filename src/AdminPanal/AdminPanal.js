import React,{useState} from "react";

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "90%",
    margin: "4% auto",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    height: "150px",
    color: theme.palette.text.secondary,
    backgroundColor: "#f7fcfc",
  },
  title: {
    color: "#3F51B5",
    textTransform: "uppercase",
  },
  root: {
    maxWidth: "95%",
    margin: " 3% auto 6% auto",
    fontFamily: "sans-serif",
    color: "#fff",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#f7fcfc",
  },
  title: {
    color: "#3F51B5",
    textTransform: "uppercase",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "700",
  },
  recovered: {
    backgroundColor: "#BCE5BA",
    borderLeft: "2px solid #fff",
  },
  deaths: {
    backgroundColor: "#F5B3B1",
    borderLeft: "2px solid #fff",
  },
  cases: {
    backgroundColor: "#ABE9ED",
    borderLeft: "2px solid #fff",
  },
  active: {
    backgroundColor: "#B3DDEF",
    borderLeft: "2px solid #fff",
  },
  critical: {
    backgroundColor: "#FBF2E9",
    borderLeft: "2px solid #fff",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#b6c4e3",
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
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
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
    backgroundColor: theme.palette.common.black,
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

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className={classes.paper}>
            <h3 className={classes.title}> Seller </h3>
            <h3> 4344434</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className={classes.paper}>
            <h3 className={classes.title}> Deliver boy </h3>
            <h3> 23423</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} className={classes.paper}>
            <h3 className={classes.title}> client </h3>
            <h3> 234234</h3>
          </Paper>
        </Grid>
          </Grid>
          <div className={classes.root}>
      <div className={classes.search}>
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

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>COUNTRY NAME</StyledTableCell>
              <StyledTableCell align="left">RECOVERD</StyledTableCell>
              <StyledTableCell align="left">TODAY-RECOVERD</StyledTableCell>
              <StyledTableCell align="left">DEATHS</StyledTableCell>
              <StyledTableCell align="left">TODAY-DEATHS</StyledTableCell>
              <StyledTableCell align="left">CASES</StyledTableCell>
              <StyledTableCell align="left">TODAY-CASES</StyledTableCell>
              <StyledTableCell align="left">ACTIVE</StyledTableCell>
              <StyledTableCell align="left">CRITICAL</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {country
              .filter((item) => {
                if (value == "") {
                  return item;
                } else if (item.country.toLowerCase().includes(value.toLowerCase())) {
                  return item;
                }
              })
              .map((val, index) => {
                return (
                  <StyledTableRow key={index}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      className={classes.title}
                    >
                      {/* <SimpleModal country={val} /> */}
                    </StyledTableCell>
                    <StyledTableCell align="left" className={classes.recovered}>
                      {val.recovered}
                    </StyledTableCell>
                    <StyledTableCell align="left" className={classes.recovered}>
                      {val.todayRecovered}
                    </StyledTableCell>
                    <StyledTableCell align="left" className={classes.deaths}>
                      {val.deaths}
                    </StyledTableCell>
                    <StyledTableCell align="left" className={classes.deaths}>
                      {val.todayDeaths}
                    </StyledTableCell>
                    <StyledTableCell align="left" className={classes.cases}>
                      {val.cases}
                    </StyledTableCell>
                    <StyledTableCell align="left" className={classes.cases}>
                      {val.todayCases}
                    </StyledTableCell>
                    <StyledTableCell align="left" className={classes.active}>
                      {val.active}
                    </StyledTableCell>
                    <StyledTableCell align="left" className={classes.critical}>
                      {val.critical}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
              </TableContainer>
              </div>
    </div>
  );
};

export default AdminPanal;
