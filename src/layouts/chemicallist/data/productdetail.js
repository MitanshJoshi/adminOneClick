import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Audio } from "react-loader-spinner";
import MDAvatar from "components/MDAvatar";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useParams } from "react-router-dom";
import { BASE_URL } from "BASE_URL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
// import
const Productdetail = () => {
const { _id } = useParams();
  const [product,setproduct] = useState("");
//   const [img, setimg] = useState();
//   console.log(user);
  useEffect(() => {
    // setCountryData(Countries);
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        const response = await fetch(
          `${BASE_URL}/api/admin/product-display-by-id?product_id=${_id}`,
          {
            method: "GET",
            headers: {
              Authorization: token,
            },
          }
        );
        const responseData = await response.json();
        console.log(responseData);
        setproduct(responseData.data);
        // setimg(responseData.data.profilePicture);
      } catch (error) {
        console.error("Error fetching data from the backend", error);
      }
    };

    fetchData();
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />
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
                  Product Detail
                </MDTypography>
              </MDBox>
              <MDBox py={3} px={2} className="d-flex justify-content-center align-item-center">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                      <div
                        className="card shadow-sm border"
                        style={{ maxWidth: "400px" }}
                      >
                        <img src="/pankaj.jpeg" className="card-img-top" alt="" />
                        <div className="card-body">
                          <h5 className="card-title">ProductName:  <span style={{paddingLeft:"8px"}}>{product.productName}</span></h5>
                          <p className="card-text">Description:  <span style={{paddingLeft:"33px"}}>{ product.description}</span></p> 
                          <p className="card-text">Productstatus:  <span style={{color:"green", paddingLeft:"10px"}}> {product.productstatus}</span></p>
                          {/* <p className="card-text">Subcategory:</p> */}
                          {/* <p className="card-text">Address: </p> */}
                          <p className="card-text">Price: <span style={{paddingLeft:"10px"}}>{product.productprice}</span> </p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
};

export default Productdetail;
