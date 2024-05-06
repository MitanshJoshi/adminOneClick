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
// import MDBadge from "components/MDBadge";

// Images
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Axios } from "axios";
import { BASE_URL } from "BASE_URL";
import { useParams } from "react-router-dom";

export default function Data(product,descprition,price,stastus) {
    const [startup, setstartup] = useState([]);
    const filterData = () => {
      return startup.filter((item) => {
        // const contact = contact.toLowerCase();
        return (
          item.productName.toLowerCase().includes(product) &&
          item.description.toLowerCase().includes(descprition) &&
          item.productprice.toLowerCase().includes(price) &&
          item.productstatus.toLowerCase().includes(stastus)
        );
      });
    };
    const filteredData = filterData();
  console.log(startup);
  const {_id} =useParams()
  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const response = await fetch(
        `${BASE_URL}/api/admin/startup-display-by-id?startupId=${_id}`,
        {
          method: "GET",
          headers: {
            Authorization: token,
          },
        }
      );
      const responseData = await response.json();
      setstartup(responseData.startup.products);
      console.log(responseData.startup.products);
    } catch (error) {
      console.error("Error fetching data from the backend", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {
    columns: [
      //   { Header: "contactPerson", accessor: "contactPerson", align: "left" },
      { Header: "productName", accessor: "productName", align: "left" },
      { Header: "description", accessor: "description", align: "left" },
      { Header: "productprice", accessor: "productprice", align: "left" },
      { Header: "productstatus", accessor: "productstatus", align: "left" },
      { Header: "view", accessor: "view",width: "10%", align: "center" },
    ],

    rows:
    filteredData &&
    filteredData.map((e) => ({
        productName: (
          <MDTypography
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {e.productName}
          </MDTypography>
        ),
        description: (
            <MDTypography
              component="a"
              variant="caption"
              color="text"
              fontWeight="medium"
            >
              {e.description}
            </MDTypography>
          ),
          productprice: (
            <MDTypography
              component="a"
              variant="caption"
              color="text"
              fontWeight="medium"
            >
              {e.productprice}
            </MDTypography>
          ),
          productstatus: (
            <MDTypography
              component="a"
              variant="caption"
              color="text"
              fontWeight="medium"
            >
              {e.productstatus}
            </MDTypography>
          ),
          view: (
            <MDTypography component="a" href={`/product-detail/${e._id}`} variant="caption" color="text" fontWeight="medium">
              view
            </MDTypography>)
      })),
  };
}
