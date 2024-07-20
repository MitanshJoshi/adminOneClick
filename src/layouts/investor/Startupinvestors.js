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
import { useParams } from "react-router-dom";
import MDAvatar from "components/MDAvatar";

const Startupinvestors = () => {
  const [investors, setInvestors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [contact, setContact] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const {_id} = useParams();

  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/admin/InvestorForStartup/${_id}`, {
          method: "GET",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setInvestors(data.Investor);

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

 console.log('invstors are',investors);
 
 const filteredInvestors = investors.filter((investor) => {
    const investorName = investor.investor.InvestorName?.toLowerCase() || '';
    console.log('investorname',investorName);
    const InvestorContactNum = investor.investor.InvestorContactNum.toString()|| '';
    const investorState = investor.investor.InvestorState?.toLowerCase() || '';
    const investorCity = investor.investor.InvestorCity?.toLowerCase() || '';
  
    const searchTermLower = searchTerm.toLowerCase();
    const stateLower = state.toLowerCase();
    const cityLower = city.toLowerCase();
    const contactLower=contact.toString();
  
    const nameMatches = investorName.includes(searchTermLower);
    const stateMatches = investorState.includes(stateLower);
    const cityMatches = investorCity.includes(cityLower);
    const contactMatches = InvestorContactNum.includes(contactLower);
  
    return nameMatches && stateMatches && cityMatches && contactMatches;
  });
  

  console.log('filtered investors',filteredInvestors);
  

  const columns = [
    { Header: "Investor Photo", accessor: "photo", width: "10%", align: "left" },
    { Header: "Investor Name", accessor: "name", width: "10%", align: "left" },
    { Header: "Investor Contact", accessor: "contact", width: "10%", align: "left" },
    { Header: "Trade Name", accessor: "Trade", width: "10%", align: "center" },
    { Header: "Brand Name", accessor: "Brand", width: "10%", align: "center" },
    { Header: "Invested Amount", accessor: "Amount", width: "10%", align: "center" },
    { Header: "City", accessor: "city", width: "10%", align: "center" },
    { Header: "state", accessor: "state", width: "10%", align: "center" },
  ];

  const rows = filteredInvestors.map((investor) => ({
    photo: (
      <MDAvatar src={investor.investor.InvestorPhoto}></MDAvatar>
    ),
    name: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {investor.investor.InvestorName}
      </MDTypography>
    ),
    contact: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {investor.investor.InvestorContactNum}
      </MDTypography>
    ),
    Trade: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {investor.startupTradeName}
      </MDTypography>
    ),
    Brand: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {investor.startupBrandName}
      </MDTypography>
    ),
    Amount: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {investor.InvestedAmount}
      </MDTypography>
    ),
    city: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {investor.investor.InvestorCity}
      </MDTypography>
    ),
    state: (
      <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {investor.investor.InvestorState}
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

export default Startupinvestors;
