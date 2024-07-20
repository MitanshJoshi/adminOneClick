import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Card, Row, Col } from "react-bootstrap";
import { BASE_URL } from "BASE_URL";
import MDAvatar from "components/MDAvatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Editadmin = () => {
  const { _id } = useParams();
  const [investor, setInvestor] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `${BASE_URL}/api/admin/user-display-by-id?user_id=${_id}`,
          {
            method: "GET",
            headers: {
              Authorization: token,
            },
          }
        );
        const responseData = await response.json();
        setInvestor(responseData.data);
      } catch (error) {
        console.error("Error fetching data from the backend", error);
      }
    };

    fetchData();
  }, [_id]);

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
              >
                <MDTypography variant="h6" color="white">
                  User Profile
                </MDTypography>
              </MDBox>
              <MDBox py={3} px={2}>
                <Card className="shadow mb-4">
                  <Card.Header as="h5" className="bg-primary text-white">
                    User Data
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col md={6}>
                        <Card.Text>
                          <strong>Name:</strong> {investor.name}
                        </Card.Text>
                        <Card.Text>
                          <strong>Contact:</strong> {investor.contact}
                        </Card.Text>
                        <Card.Text>
                          <strong>Email:</strong> {investor.email}
                        </Card.Text>
                        <Card.Text>
                          <strong>Address:</strong> {investor.address}
                        </Card.Text>
                      </Col>
                      <Col md={6}>
                        <Card.Text>
                          <strong>City:</strong> {investor.city}
                        </Card.Text>
                        <Card.Text>
                          <strong>State:</strong> {investor.state}
                        </Card.Text>
                        <Card.Text>
                          <strong>Country:</strong> {investor.country}
                        </Card.Text>
                        <Card.Text>
                          <strong>Pincode:</strong> {investor.pincode}
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {investor.startupDetails && investor.startupDetails.length > 0 ? (
        investor.startupDetails.map((startup) => (
          <MDBox pt={6} pb={3} key={startup._id}>
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
                      Startup Profile
                    </MDTypography>
                  </MDBox>
                  <MDBox py={3} px={2}>
                    <Card className="shadow mb-4">
                    <MDTypography variant="h6" color="white">
                      Startup Profile
                    </MDTypography>
                      <Card.Body>
                        <Row>
                          <Col md={6}>
                            <MDBox display="flex" alignItems="center" mb={2}>
                              <MDAvatar src={startup.startupLogo} alt={startup.startupName} size="lg" sx={{ width: '50px', height: '50px', mr: 2 }} />
                              <MDTypography variant="h5" fontWeight="bold">
                                {startup.startupName}
                              </MDTypography>
                            </MDBox>
                            <MDTypography variant="body2" color="textSecondary">
                              {startup.email}
                            </MDTypography>
                            <MDTypography variant="body2" color="textSecondary" mt={2}>
                              <FontAwesomeIcon icon={faLocationDot} />
                              <span style={{ marginLeft: "10px" }}>{startup.address}, {startup.city}, {startup.state}, {startup.country} - {startup.pincode}</span>
                            </MDTypography>
                            <MDTypography variant="body2" color="textSecondary" mt={1}>
                              Contact Person: {startup.contactPerson}
                            </MDTypography>
                            <MDTypography variant="body2" color="textSecondary" mt={1}>
                              Contact Number: {startup.contactNumber}
                            </MDTypography>
                          </Col>
                          <Col md={6}>
                            <MDTypography variant="body2" color="textSecondary" mt={1}>
                              Year of Establishment: {new Date(startup.yearOfEstablished).getFullYear()}
                            </MDTypography>
                            <MDTypography variant="body2" color="textSecondary" mt={1}>
                              Registered As: {startup.registeredAs.toUpperCase()}
                            </MDTypography>
                            <MDBox mt={2}>
                              <MDTypography
                                component="a"
                                href={`/view-inquiry/${startup._id}`}
                                variant="body2"
                                color="primary"
                                underline="hover"
                                mr={2}
                              >
                                View Inquiries
                              </MDTypography>
                              <MDTypography
                                component="a"
                                href={`/allpartner/${startup._id}`}
                                variant="body2"
                                mr={2}
                                color="primary"
                                underline="hover"
                              >
                                View Partners
                              </MDTypography>
                              <MDTypography
                                component="a"
                                href={`/allinvestors/${startup._id}`}
                                variant="body2"
                                color="primary"
                                underline="hover"
                              >
                                View Investors
                              </MDTypography>
                            </MDBox>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </MDBox>
                </Card>
              </Grid>
            </Grid>
          </MDBox>
        ))
      ) : (
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <MDBox py={3} px={2}>
                  <MDTypography variant="h6" color="textSecondary">
                    No startup details available
                  </MDTypography>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      )}
    </DashboardLayout>
  );
};

export default Editadmin;
