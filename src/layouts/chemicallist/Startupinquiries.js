import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MDBox from "components/MDBox";
import MDBadge from "components/MDBadge";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { BASE_URL } from "BASE_URL";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import { faEdit } from "@fortawesome/free-solid-svg-icons";

const StartupInquiryDisplay = () => {
  const [inquiry, setInquiry] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { _id } = useParams();

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/investorInquiry/getInquiryByStartup/${_id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const responseData = await response.json();
        setInquiry(responseData.inquiry);
        console.log("Inquiries:", responseData.inquiry);
      } catch (error) {
        toast.error("Something went wrong!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
        });
      }
    };

    fetchInquiries();
  }, [_id]);

 
  const handleSearchTermChange = (event) => setSearchTerm(event.target.value.toLowerCase());

  const filteredInvestors = inquiry.filter((investor) => {
    const investorName = investor.investor.InvestorName?.toLowerCase() || '';
    console.log('investorname',investorName);

    const searchTermLower = searchTerm.toLowerCase();
  
    const nameMatches = investorName.includes(searchTermLower);
  
    return nameMatches;
  });
  

  const columns = [
    { Header: "Investor Photo", accessor: "photo", width: "15%", align: "center" },
    { Header: "Investor Name", accessor: "name", width: "15%", align: "left" },
    { Header: "Inquiry Title", accessor: "title", width: "20%", align: "left" },
    { Header: "Inquiry description", accessor: "description", width: "20%", align: "left" },
    { Header: "Best Time To Connect", accessor: "bestTime", width: "15%", align: "center" },
    { Header: "Inquiry Date", accessor: "date", width: "15%", align: "center" },
  ];

  const rows = filteredInvestors
    .filter((item) => item.InquiryBy === "startup")
    .map((item) => ({
      photo: (
        <MDBox ml={-1}>
          {/* <img
            src={item?.investorPhoto}
            alt="Investor"
           width={44}
          /> */}
           <MDAvatar src={item?.investorPhoto} size="sm" />
        </MDBox>
      ),
      name: (
        <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
          {item?.investorName}
        </MDTypography>
      ),
      title: (
        <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
          {item?.title}
        </MDTypography>
      ),
      description: (
        <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
          {item?.description}
        </MDTypography>
      ),
      bestTime: (
        <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
          {item?.best_time_to_connect}
        </MDTypography>
      ),
      date: (
        <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
          {item.createdAt.slice(0, 10)}
        </MDTypography>
      ),
    }));

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="d-flex align-item-center gap-4">
        <div className="name">
          <FormControl fullWidth>
            <TextField
              id="search-name"
              onChange={handleSearchTermChange}
              label="Search Investor Name"
              variant="outlined"
              style={{ width: "200px" }}
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
                  Startup Inquiries ({rows.length})
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
};

export default StartupInquiryDisplay;
