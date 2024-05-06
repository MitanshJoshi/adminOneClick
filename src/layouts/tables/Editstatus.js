import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
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
import { useParams } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import { BASE_URL } from "BASE_URL";
// import
const EditCompanyStatus = () => {
  const { _id } = useParams();
  const [inquiry, setinquiry] = useState([]);
  console.log(inquiry)
  // const filteredData = startup.filter((e) => (e.startupName?.toLowerCase().includes(data))) 
  // console.log(startup)

  useEffect(() => {
    // setCountryData(Countries);
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token)
        const response = await fetch(`${BASE_URL}/api/admin/inquiry-details?inquiry_id=${_id}`, {
          method: "GET",
          headers: {
            Authorization: token,
          },
        });
        const responseData = await response.json();
        setinquiry(responseData.data[0])
        // console.log(responseData.data)
      } catch (error) {
        console.error("Error fetching data from the backend", error);
      }
    };
  
    fetchData();
  }, [ ]);

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
                  Inquiry Detail
                </MDTypography>
              </MDBox>
              <MDBox py={3} px={2}>
                <div>
                  {/* Startup Data Card */}
                  <Card className="shadow mb-4">
                    <Card.Header as="h5" className="bg-info text-white">
                      Startup Data
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col md={6}>
                          <Card.Text>
                            <strong>Startup Name:</strong>{" "}
                            {inquiry?.startupData?.startupName}
                          </Card.Text>
                          <Card.Text>
                            <strong>Address:</strong> {inquiry?.startupData?.address}
                          </Card.Text>
                          <Card.Text>
                            <strong>Contact Number:</strong>{" "}
                            {inquiry?.startupData?.contactNumber}
                          </Card.Text>
                          <Card.Text>
                            <strong>Contact Person:</strong>{" "}
                            {inquiry?.startupData?.contactPerson}
                          </Card.Text>
                          <Card.Text>
                            <strong>Email:</strong> {inquiry?.startupData?.email}
                          </Card.Text>
                          <Card.Text>
                            <strong>City:</strong> {inquiry?.startupData?.city}
                          </Card.Text>
                        </Col>
                        <Col md={6}>
                        <Card.Text>
                            <strong>State:</strong> {inquiry?.startupData?.state}
                          </Card.Text>
                          <Card.Text>
                            <strong>Country:</strong> {inquiry?.startupData?.country}
                          </Card.Text>
                          <Card.Text>
                            <strong>Inqubation Center City:</strong>{" "}
                            {inquiry?.startupData?.inqubationCenterCity}
                          </Card.Text>
                          <Card.Text>
                            <strong>Year of Established:</strong>{" "}
                            {inquiry?.startupData?.yearOfEstablished}
                          </Card.Text>
                          <Card.Text>
                            <strong>Registered As:</strong>{" "}
                            {inquiry?.startupData?.registeredAs}
                          </Card.Text>
                          <Card.Text>
                            <strong>Pincode:</strong> {inquiry?.startupData?.pincode}
                          </Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>

                  {/* User Data Card */}
                  <Card className="shadow mb-4">
                    <Card.Header as="h5" className="bg-primary text-white">
                      User Data
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col md={6}>
                          <Card.Text>
                            <strong>Name:</strong> {inquiry?.userData?.name}
                          </Card.Text>
                          <Card.Text>
                            <strong>Contact:</strong> {inquiry?.userData?.contact}
                          </Card.Text>
                          <Card.Text>
                            <strong>Email:</strong> {inquiry?.userData?.email}
                          </Card.Text>
                          <Card.Text>
                            <strong>Address:</strong> {inquiry?.userData?.address}
                          </Card.Text>
                         
                          
                        </Col>
                        <Col md={6}>
                        <Card.Text>
                            <strong>City:</strong> {inquiry?.userData?.city}
                          </Card.Text>
                          <Card.Text>
                            <strong>Pincode:</strong> {inquiry?.userData?.pincode}
                          </Card.Text>
                          <Card.Text>
                            <strong>Status:</strong> {inquiry?.userData?.status}
                          </Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>

                  {/* Product Data Card */}
                  <Card className="shadow mb-4">
                    <Card.Header as="h5" className="bg-success text-white">
                      Product Data
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col md={6}>
                          <Card.Text>
                            <strong>Productname:</strong>{" "}
                            {inquiry?.productData?.productName}
                          </Card.Text>
                          <Card.Text>
                            <strong>Description:</strong>{" "}
                            {inquiry?.productData?.description}
                          </Card.Text>
                         
                        </Col>
                        <Col md={6}>
                        <Card.Text>
                            <strong>Product Price:</strong>{" "}
                            {inquiry?.productData?.productprice}
                          </Card.Text>
                          <Card.Text>
                            <strong>Product Status:</strong>{" "}
                            {inquiry?.productData?.productstatus}
                          </Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
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

export default EditCompanyStatus;
