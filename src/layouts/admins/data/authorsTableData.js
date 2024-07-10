import React, { useEffect, useState } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import { BASE_URL } from "BASE_URL";
import axios from "axios";
import { Filter } from "@material-ui/icons";
import { number, string } from "prop-types";

const Data = (searchTerm,contact,state,city) => {
 
  
  const [adminList, setAdminList] = useState([])
  
  const filterData = () => {
    return adminList.filter((item) => {
     
      return (
        item.name.toLowerCase().includes(searchTerm) &&
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
        const response = await fetch(`${BASE_URL}/api/admin/all_user_display`, {
          method: "GET",
          headers: {
            Authorization: token,
          },
        });
        const responseData = await response.json();
        setAdminList(responseData.data);
      } catch (error) {
        console.error("Error fetching data from the backend", error);
      }
    };
  
    fetchData();
  }, []);
  return {
    columns: [
      { Header: "name", accessor: "name", width: "10%", align: "left" },
      { Header: "contact", accessor: "contact", width: "10%", align: "left" },
      { Header: "email", accessor: "email",width: "10%", align: "center" },
      // { Header: "address", accessor: "address",width: "10%", align: "center" },
      { Header: "city", accessor: "city",width: "10%", align: "center" },
      { Header: "state", accessor: "state",width: "10%", align: "center" },
      // { Header: "pincode", accessor:"pincode",width: "10%", align: "center" },
      { Header: "status", accessor: "status",width: "10%", align: "center" },
      { Header: "view", accessor: "view",width: "10%", align: "center" },
    ],

    rows: filteredData && filteredData.map((admin) => ({
      name: (
        <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
          {admin.name}
        </MDTypography>
      ),
      contact: (
        <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
          {admin.contact}
        </MDTypography>
      ),
      email: (
        <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
          {admin.email}
        </MDTypography>
      ),
      status: (
        <MDBox ml={-1}>
          <MDBadge badgeContent={admin.status} color={admin.status === "active" ? "success" : "error"} variant="gradient" size="sm" />
        </MDBox>
      ),

      city: (
        <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {admin.city}
      </MDTypography>
      ),
      state: (
        <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
        {admin.state}
      </MDTypography>
      ),
      view: (
        <MDTypography component="a" href={`/edit-admin/${admin._id}`} variant="caption" color="text" fontWeight="medium">
          view
        </MDTypography>
      ),
    })),
  };
}

export default Data;
