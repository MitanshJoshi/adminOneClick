/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import chemical from "assets/images/f1.svg";
import { useEffect, useState } from "react";
import { Axios } from "axios";
import { BASE_URL } from "BASE_URL";

export default function Data(startup,country,state,city) {

  const [startupdata, setstartupdata] = useState([]);
  // const filteredData = startupdata.filter((e) => (e.startupName?.toLowerCase().includes(startup))) 
  
  const filterData = () => {
    return startupdata.filter((item) => {
      // const contact = contact.toLowerCase();
      return (
        item.startupName.toLowerCase().includes(startup) &&
        item.country.toLowerCase().includes(country) &&
        item.state.toLowerCase().includes(state) &&
        item.city.toLowerCase().includes(city)
      );
    });
  };
  const filteredData = filterData();

  useEffect(() => {
    // setCountryData(Countries);
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token)
        const response = await fetch(`${BASE_URL}/api/admin/all_startup_display`, {
          method: "GET",
          headers: {
            Authorization: token,
          },
        });
        const responseData = await response.json();
        setstartupdata(responseData.data)
        console.log(responseData.data)
      } catch (error) {
        console.error("Error fetching data from the backend", error);
      }
    };
  
    fetchData();
  }, [ ]);
  return {
    columns: [
      { Header: "startupName", accessor: "startupName", width: "18%", align: "left" },
      { Header: "contactPerson", accessor: "contactPerson", align: "left" },
      { Header: "contactNumber", accessor: "contactNumber", align: "left" },
      { Header: "email", accessor: "email", align: "left" },
      { Header: "address", accessor: "address", align: "left" },
      { Header: "city", accessor: "city", width: "10%", align: "left" },
      { Header: "state", accessor: "state", align: "left" },
      { Header: "country", accessor: "country", align: "center" },
      { Header: "inqubationCenterCity", accessor: "inqubationCenterCity", align: "center" },
      { Header: "registeredAs", accessor: "registeredAs", align: "center" },
      // { Header: "registeredAs", accessor: "registeredAs", align: "center" },
      { Header: "pincode", accessor: "pincode", align: "center" },
      { Header: "view", accessor: "view",width: "10%", align: "center" },
    ],

    rows: filteredData && filteredData.map((e) => ({
      // company: <Author name="DFTA " email="C10H7F2N3O" image={chemical}  />,
        startupName: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            {e.startupName}
          </MDTypography>
        ),
        contactNumber: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            {e.contactNumber}
          </MDTypography>
        ),
        address: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            {e.address}
          </MDTypography>
        ),
        contactPerson: (
          <MDTypography
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
            sx={{ maxWidth: '200px', wordWrap: 'break-word' }} // Adjust maxWidth as needed
          >
           {e.contactPerson}
          </MDTypography>
        ),
        email: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            {e.email}
          </MDTypography>
        ),
        city: (
          <MDBox ml={-1}>
            {/* <MDBadge  color="success" variant="gradient" size="sm" /> */}
            {e.city}
          </MDBox>
        ),
        state: (
          <MDTypography component="a" href="/edit-chemical" variant="caption" color="text" fontWeight="medium">
            {e.state}
          </MDTypography>
        ),
        country: (
          <MDTypography component="a" href="/edit-chemical" variant="caption" color="text" fontWeight="medium">
            {e.country}
          </MDTypography>
        ),
        inqubationCenterCity: (
          <MDTypography component="a" href="/edit-chemical" variant="caption" color="text" fontWeight="medium">
            {e.inqubationCenterCity}
          </MDTypography>
        ),
        registeredAs: (
          <MDTypography component="a" href="/edit-chemical" variant="caption" color="text" fontWeight="medium">
            {e.registeredAs}
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="/edit-chemical" variant="caption" color="text" fontWeight="medium">
            {e.pincode}
          </MDTypography>
        ),
        
      view: (
        <MDTypography component="a" href={`/edit-chemical/${e._id}`} variant="caption" color="text" fontWeight="medium">
          view
        </MDTypography>)
    }))
  };
}
