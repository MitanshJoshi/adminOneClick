import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { BASE_URL } from "BASE_URL";
import { Menu, MenuItem } from "@mui/material";

const Allinvestor = () => {
  const [investors, setInvestors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedInvestor, setSelectedInvestor] = useState(null);
  const [contact, setContact] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/admin/getInvestorList`, {
          method: "GET",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setInvestors(data.investors);

      } catch (error) {
        console.error("Error fetching investors:", error);
      }
    };

    fetchInvestors();
  }, []);

  const handleSearchTermChange = (event) => setSearchTerm(event.target.value.toLowerCase());
  const handleContactChange = (event) => setContact(event.target.value.toLowerCase());
  const handleStateChange = (event) => setState(event.target.value.toLowerCase());
  const handleCityChange = (event) => setCity(event.target.value.toLowerCase());

  const handleButtonClick = (event, investor) => {
    setAnchorEl(event.currentTarget);
    setSelectedInvestor(investor);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedInvestor(null);
  };

  const handleMenuItemClick = async (status) => {
    if (selectedInvestor) {
      await handleStatusChange(selectedInvestor._id, status);
    }
    handleClose();
  };

  const handleStatusChange = async (id, status) => {
    try {
      const response = await fetch(`${BASE_URL}/api/admin/changeInvestorStatus/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error("Status change request failed");
      }

      const updatedInvestor = await response.json();
      const updatedInvestors = investors.map(inv =>
        inv._id === updatedInvestor.investor._id ? updatedInvestor.investor : inv
      );
      setInvestors(updatedInvestors);

      console.log("Status changed successfully:", updatedInvestor);
    } catch (error) {
      console.error("Error changing status:", error);
    }
  };

  const filteredInvestors = investors.filter((investor) =>
    (investor.InvestorName && investor.InvestorName.toLowerCase().includes(searchTerm)) &&
    (investor.InvstorState && investor.InvstorState.toLowerCase().includes(state)) &&
    (investor.InvestorCity && investor.InvestorCity.toLowerCase().includes(city))
  );

  const columns = [
    { Header: "name", accessor: "name", width: "10%", align: "left" },
    { Header: "contact", accessor: "contact", width: "10%", align: "left" },
    { Header: "email", accessor: "email", width: "10%", align: "center" },
    { Header: "city", accessor: "city", width: "10%", align: "center" },
    { Header: "state", accessor: "state", width: "10%", align: "center" },
    { Header: "status", accessor: "status", width: "10%", align: "center" },
    { Header: "view", accessor: "view", width: "10%", align: "center" },
    { Header: "view inquiries", accessor: "inquiries", width: "10%", align: "center" },
  ];

  const rows = investors.map((investor) => ({
    name: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {investor.InvestorName}
      </MDTypography>
    ),
    contact: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {investor.InvestorContactNum}
      </MDTypography>
    ),
    email: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {investor.InvestorEmail}
      </MDTypography>
    ),
    city: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {investor.InvestorCity}
      </MDTypography>
    ),
    state: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {investor.InvestorState}
      </MDTypography>
    ),
    status: (
      <MDBox>
        <MDButton
          variant="contained"
          color={
            investor.status === "pending"
              ? "warning"
              : investor.status === "approve"
                ? "success"
                : "error"
          }
          size="small"
          onClick={(event) => handleButtonClick(event, investor)}
        >
          <MDTypography variant="subtitle" color="white" sx={{ fontSize: "12px" }}>
            {investor.status.toUpperCase()}
          </MDTypography>
        </MDButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={() => handleMenuItemClick("approve")}>approve</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("decline")}>decline</MenuItem>
        </Menu>
      </MDBox>
    ),
    view: (
      <MDTypography component="a" href={`/edit-investor/${investor._id}`} variant="caption" color="text" fontWeight="medium">
        view
      </MDTypography>
    ),
    inquiries: (
      <MDTypography component="a" href={`/view-invinquiry/${investor._id}`} variant="caption" color="text" fontWeight="medium">
        view inquiries
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
              label="Search User Name"
              variant="outlined"
              style={{ width: "200px" }}
            />
          </FormControl>
        </div>
        <div className="number">
          <FormControl fullWidth>
            <TextField
              id="search-contact"
              onChange={handleContactChange}
              label="Search User Contact"
              variant="outlined"
              style={{ width: "200px" }}
            />
          </FormControl>
        </div>
        <div className="state">
          <FormControl fullWidth>
            <TextField
              id="search-state"
              onChange={handleStateChange}
              label="Search User State"
              variant="outlined"
              style={{ width: "200px" }}
            />
          </FormControl>
        </div>
        <div className="city">
          <FormControl fullWidth>
            <TextField
              id="search-city"
              onChange={handleCityChange}
              label="Search User City"
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
                  Investor List ({rows.length})
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

export default Allinvestor;
