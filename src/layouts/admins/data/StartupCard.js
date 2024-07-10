import React from 'react';
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const StartupCard = ({ startup }) => {
  return (
    <Card>
      <MDBox p={3}>
        <div className="d-flex align-items-center mb-3">
          <MDAvatar src={startup.startupLogo} alt={startup.startupName} size="lg" />
          <MDBox ml={2}>
            <MDTypography variant="h6" fontWeight="bold" mb={1}>
              {startup.startupName}
            </MDTypography>
            <MDTypography variant="body2" color="textSecondary">
              {startup.email}
            </MDTypography>
          </MDBox>
        </div>
        <div className="d-flex flex-wrap">
          <div className="mb-2">
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="ml-2">{startup.address}, {startup.city}, {startup.state}, {startup.country} - {startup.pincode}</span>
          </div>
          <div className="mb-2">
            <MDTypography variant="body2" color="textSecondary">
              Contact Person: {startup.contactPerson}
            </MDTypography>
          </div>
          <div className="mb-2">
            <MDTypography variant="body2" color="textSecondary">
              Contact Number: {startup.contactNumber}
            </MDTypography>
          </div>
          <div className="mb-2">
            <MDTypography variant="body2" color="textSecondary">
              Year of Establishment: {new Date(startup.yearOfEstablished).getFullYear()}
            </MDTypography>
          </div>
          <div className="mb-2">
            <MDTypography variant="body2" color="textSecondary">
              Registered As: {startup.registeredAs.toUpperCase()}
            </MDTypography>
          </div>
          <div className="mt-3">
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
          </div>
        </div>
      </MDBox>
    </Card>
  );
};

export default StartupCard;
