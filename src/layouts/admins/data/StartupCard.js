import React from 'react';
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";

const StartupProfile = ({ startup }) => {
  return (
    <MDBox pt={6} pb={3}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
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
            <MDBox className="shadow mb-4">
              <MDBox
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  padding: '16px',
                  borderRadius: '4px 4px 0 0'
                }}
              >
                <MDTypography variant="h5">
                  Startup Data
                </MDTypography>
              </MDBox>
              <MDBox p={2}>
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
              </MDBox>
            </MDBox>
          </MDBox>
        </Grid>
      </Grid>
    </MDBox>
  );
};

export default StartupProfile;
