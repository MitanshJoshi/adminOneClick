import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
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
import MDAvatar from "components/MDAvatar";

const Startuppartner = () => {
  const [investors, setInvestors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInvestor, setSelectedInvestor] = useState(null);
  const [contact, setContact] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const { _id } = useParams();

  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/partner/getPartner/${_id}`, {
          method: "GET",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setInvestors(data.data);

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


  const filteredInvestors = investors.filter((investor) =>
    (investor.InvestorName && investor.InvestorName.toLowerCase().includes(searchTerm)) &&
    (investor.InvstorState && investor.InvstorState.toLowerCase().includes(state)) &&
    (investor.InvestorCity && investor.InvestorCity.toLowerCase().includes(city))
  );

  const columns = [
    { Header: "Photo", accessor: "Photo", width: "10%", align: "left" },
    { Header: "name", accessor: "name", width: "10%", align: "left" },
    { Header: "Position", accessor: "Position", width: "10%", align: "left" },
    { Header: "city", accessor: "city", width: "10%", align: "center" },
    { Header: "state", accessor: "state", width: "10%", align: "center" },
    { Header: "Country", accessor: "country", width: "10%", align: "center" },
    { Header: "view", accessor: "view", width: "10%", align: "center" },
  ];

  const rows = investors.map((investor) => ({
    
    Photo: (
        <MDBox ml={-1}>
        {/* <img
          src={item?.startupLogo}
          alt="Investor"
         width={44}
        /> */}
         <MDAvatar src={investor.partner_photo} size="sm" />
      </MDBox>
    ),
    name: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {investor.partner_name}
      </MDTypography>
    ),
    Position: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {investor.position.toUpperCase()}
      </MDTypography>
    ),
    city: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {investor.city}
      </MDTypography>
    ),
    state: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {investor.state}
      </MDTypography>
    ),
    country: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {investor.country}
      </MDTypography>
    ),
    view: (
      <MDTypography component="a" href={`/edit-investor/${investor._id}`} variant="caption" color="text" fontWeight="medium">
        view
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
                  Partner List ({rows.length})
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

export default Startuppartner;
