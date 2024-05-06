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

// Data
import authorsTableData from "layouts/admins/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Data from "./data/authorsTableData";
// import Countries from "";
  const Userlist = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleCompanyChange = (event) => {
      setSearchTerm(event.target.value);
    }
    const [contact, setcontact] = useState("");
    const [state, setstate] = useState("");
    const [city, setcity] = useState("");
    
    const handlecontact =(event)=>{
      setcontact(event.target.value);
    }
     const handlestate =(event)=>{
      setstate(event.target.value);
    }
    const handlecity =(event)=>{
      setcity(event.target.value);
    }

    const { columns, rows } = Data(searchTerm,contact,state,city);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="d-flex align-item-center gap-4">
        <div className="name ">
      <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            onChange={handleCompanyChange}
            label="Search User Name"
            variant="outlined"
            style={{width:"200px"}}
          />
        </FormControl>
        </div>
        <div className="number">
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            onChange={handlecontact}
            label="Search User contact"
            variant="outlined"
            style={{width:"200px"}}
          />
        </FormControl>
        </div>
        <div className="state">
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            onChange={handlestate}
            label="Search User State"
            variant="outlined"
            style={{width:"200px"}}
          />
        </FormControl>
        </div>
        <div className="city">
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            onChange={handlecity}
            label="Search User City"
            variant="outlined"
            style={{width:"200px"}}
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
                  UserList({rows.length})
                </MDTypography>
                
              </MDBox>
              <MDBox pt={2}>
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
}

export default Userlist;
