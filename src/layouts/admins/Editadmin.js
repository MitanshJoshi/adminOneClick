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
import { useParams } from "react-router-dom";
import { BASE_URL } from "BASE_URL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
// import
const Editadmin = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const [successSB, setSuccessSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);
  const navigate = useNavigate();
  const { _id } = useParams();

  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Successfull Added"
      content="Admin Is Successfully Updated."
      dateTime="1 sec"
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
      title="Filled Error"
      content={errorMessage}
      dateTime="1 sec ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );
  const [user, setuser] = useState("");
  const [img, setimg] = useState();
  console.log(user);
  useEffect(() => {
    // setCountryData(Countries);
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
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
        console.log(responseData);
        setuser(responseData.data);
        setimg(responseData.data.profilePicture);
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
                  User Profile
                </MDTypography>
              </MDBox>
              <MDBox py={3} px={2}>
                <section className="">
                  <div className="container" style={{ maxWidth: "1000px" }}>
                    <div className="row mt-5">
                      <div className="col-12 col-md-6 mb-4">
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
                                <span style={{fontWeight:"700"}}>{user.name}</span>
                              </div>
                            </div>
                            <div className="d-flex flex-wrap">
                              <div className="mt-3 mx-2">
                                <FontAwesomeIcon
                                  icon={faLocationDot}
                                  style={{ marginLeft: "10px" }}
                                />
                                <span style={{ marginLeft: "10px" }}>
                                  {user.address}
                                </span>
                              </div>
                              <div className="mt-3 mx-2">
                                <FontAwesomeIcon
                                  icon={faLocationDot}
                                  style={{ marginLeft: "10px" }}
                                />
                                <span style={{ marginLeft: "10px" }}>
                                  {user.city}
                                </span>
                              </div>
                              <div className="mt-3 mx-2">
                                <FontAwesomeIcon
                                  icon={faLocationDot}
                                  style={{ marginLeft: "10px" }}
                                />
                                <span style={{ marginLeft: "10px" }}>
                                  {user.state}
                                </span>
                              </div>
                              <div className="mt-3 mx-5">
                                <span className="mx-3">Pincode:{user.pincode}</span>
                              </div>
                              <div className="mt-3 mx-3 ">
                                <h5>Email:<span>{user.email}</span> </h5>
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
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
};

export default Editadmin;
