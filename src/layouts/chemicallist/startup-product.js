import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import { useMaterialUIController } from "context";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Audio } from "react-loader-spinner";
import MDAvatar from "components/MDAvatar";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";
import TextField from "@mui/material/TextField";
import DataTable from "examples/Tables/DataTable";
// import productview from "./data/productview";
import productview from "layouts/chemicallist/data/productview";
// import authorsTableData from "layouts/admins/data/authorsTableData";
import FormControl from "@mui/material/FormControl";
const Startubproduct = () => {
    const[product,setproduct]=useState("")
    const[descprition,setdescprition]=useState("")
    const[price,setprice]=useState("")
    const[stastus,setstastus]=useState("")
    const handleCompanyChange=(e)=>{
      setproduct(e.target.value)
    }
    const handledescrpition=(e)=>{
      setdescprition(e.target.value)
    }
    const handleproductsprice=(e)=>{
      setprice(e.target.value)
    }
    const handleproductstastus=(e)=>{
      setstastus(e.target.value)
    }
    const { columns, rows } = productview(product,descprition,price,stastus);
  return (
    <DashboardLayout>
    
      <DashboardNavbar />
      <div className="product d-flex align-item-center justify-content-center gap-5">
        <div className="productname">
        <FormControl fullWidth>
        <TextField
          id="outlined-basic"
          onChange={handleCompanyChange}
          label="Search ProductName"
          variant="outlined"
        />
      </FormControl>
        </div>
        <div className="descrpition">
        <FormControl fullWidth>
        <TextField
          id="outlined-basic"
          onChange={handledescrpition}
          label="Search Product Description"
          variant="outlined"
        />
      </FormControl>
        </div>
        <div className="productsprice">
        <FormControl fullWidth>
        <TextField
          id="outlined-basic"
          onChange={handleproductsprice}
          label="Search Product Price"
          variant="outlined"
        />
      </FormControl>
        </div>
        <div className="productstastus">
        <FormControl fullWidth>
        <TextField
          id="outlined-basic"
          onChange={handleproductstastus}
          label="Search Product ststus"
          variant="outlined"
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
                style={{
                  position: "relative",
                }}
              >
                <MDTypography variant="h6" color="white">
                  StartUp Product
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
      {/* <Footer /> */}
    </DashboardLayout>
  );
};

export default Startubproduct;
