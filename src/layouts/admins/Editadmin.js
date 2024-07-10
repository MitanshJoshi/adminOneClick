import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDSnackbar from "components/MDSnackbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import StartupCard from "./data/StartupCard"; // Import the StartupCard component
import { BASE_URL } from "BASE_URL";

const Editadmin = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successSB, setSuccessSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);
  const [user, setUser] = useState({});
  const [img, setImg] = useState();
  const { _id } = useParams();

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

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
        setUser(responseData.data);
        setImg(responseData.data.profilePicture);
      } catch (error) {
        console.error("Error fetching data from the backend", error);
      }
    };

    fetchData();
  }, [_id]);

  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Successfully Added"
      content="Admin is successfully updated."
      dateTime="1 sec ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Error"
      content={errorMessage}
      dateTime="1 sec ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

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
                <section>
                  <div className="container" >
                    <div className="row">
                      <div className="col-12  mb-4">
                        <div className="card border shadow">
                          <div className="card-body">
                            <div className="d-flex justify-content-between mb-4">
                              <div className="d-flex align-items-center">
                                <img
                                  src="/pankaj.jpeg"
                                  alt=""
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "50%",
                                    marginRight: "10px",
                                  }}
                                />
                                <span style={{ fontWeight: "700" }}>{user.name}</span>
                              </div>
                            </div>
                            <div className="d-flex flex-wrap">
                              <div className="mt-3 mx-2">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span style={{ marginLeft: "10px" }}>{user.address}</span>
                              </div>
                              <div className="mt-3 mx-2">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span style={{ marginLeft: "10px" }}>{user.city}</span>
                              </div>
                              <div className="mt-3 mx-2">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span style={{ marginLeft: "10px" }}>{user.state}</span>
                              </div>
                              <div className="mt-3 mx-5">
                                <span className="mx-3">Pincode: {user.pincode}</span>
                              </div>
                              <div className="mt-3 mx-3">
                                <h5>Email: <span>{user.email}</span></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </MDBox>
            </Card>
          </Grid>
          {/* Render Startup Cards */}
        </Grid>
      </MDBox>
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
                  User Startups
                </MDTypography>
              </MDBox>
              <MDBox py={3} px={2}>
                <section>
                {user.startupDetails && user.startupDetails.length > 0 && (
            <Grid container spacing={3}>
              {user.startupDetails.map((startup) => (
                <Grid item xs={12} md={6} lg={4} key={startup._id}>
                  <StartupCard startup={startup} />
                </Grid>
              ))}
            </Grid>
          )}
                </section>
              </MDBox>
            </Card>
          </Grid>
          {/* Render Startup Cards */}
        </Grid>
      </MDBox>
      {successSB && renderSuccessSB}
      {errorSB && renderErrorSB}
    </DashboardLayout>
  );
};

export default Editadmin;
