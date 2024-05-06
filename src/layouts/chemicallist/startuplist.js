/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";
import { Link, useNavigate } from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

// Data
import authorsTableData from "layouts/chemicallist/data/authorsTableData";
import { useState } from "react";

const Startuplist = () => {
  const [startup, setstartup] = useState("");
  const [contact, setcontact] = useState("");
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  // const [startup, setstartup] = useState("");
  const handleCompanyChange=(e)=>{
    setstartup(e.target.value)
  }
  const handlecontact=(e)=>{
    setcontact(e.target.value)
  }
  const handlecouty=(e)=>{
    setcountry(e.target.value)
  }
  const handlestate=(e)=>{
    setstate(e.target.value)
  }
  const handlecity=(e)=>{
    setcity(e.target.value)
  }
  const { columns, rows } = authorsTableData(startup,country,state,city);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="d-flex align-item-center justify-content-center gap-4" >
        <div className="name ">
      <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            onChange={handleCompanyChange}
            label="Search StartupName"
            variant="outlined"
            style={{width:"150px"}}
          />
        </FormControl>
        </div>
        <div className="number">
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            onChange={handlecontact}
            label="Search ContactPerson"
            variant="outlined"
            style={{width:"150px"}}
          />
        </FormControl>
        </div>
        <div className="country">
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            onChange={handlecouty}
            label="Search Country"
            variant="outlined"
            style={{width:"150px"}}
          />
        </FormControl>
        </div>
        <div className="state">
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            onChange={handlestate}
            label="Search  State"
            variant="outlined"
            style={{width:"150px"}}
          />
        </FormControl>
        </div>
        <div className="city">
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            onChange={handlecity}
            label="Search City"
            variant="outlined"
            style={{width:"150px"}}
          />
        </FormControl>
        </div>
        </div>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  StartUp list({rows.length})
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
};

export default Startuplist;
