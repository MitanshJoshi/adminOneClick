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
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { useState } from "react";

function Inquiry() {

  const [title,settitle]=useState("")
  const [descprition,setdescprition]=useState("")

  const handletitle=(e)=>{
    settitle(e.target.value)
  }
  const handledescription=(e)=>{
    setdescprition(e.target.value)
  }
  const { columns, rows } = authorsTableData(title,descprition);

 

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="sreach d-flex align-item-center gap-4">
        <div className="title">
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            onChange={handletitle}
            label="Search User Name"
            variant="outlined"
            style={{width:"200px"}}
          />
        </FormControl>
        </div>
        <div className="description">
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            onChange={handledescription}
            label="Search User Name"
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
                  all inquiry({rows.length})
                </MDTypography>
                {/* <Link to="" style={{ textDecoration: "none" }}>
                  <MDButton
                    variant="gradient"
                    color="dark"
                    style={{ position: "absolute", top: "-9px", right: "2%" }}
                  >
                    {shouldShowAddButton() ? "" : "Add Company"}
                  </MDButton>
                </Link> */}
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
}

export default Inquiry;
