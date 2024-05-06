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
import MDButton from "components/MDButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "BASE_URL";

export default function AuthorsTableData(handleDelete) {

  const [ceritificateList, setCertificateList] = useState([])

  const fetchUserList = async () => {
    try {
      const token = `Bearer ${localStorage.getItem("chemToken")}`;
      const response = await axios.get(

        `${BASE_URL}/api/certificate/certificates`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setCertificateList(response.data.certificates);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return {
    columns: [
      { Header: "certificate name", accessor: "cas", align: "left" },
      { Header: "edit", accessor: "action", align: "center" },
      { Header: "delete", accessor: "status", align: "center" },
    ],


    rows: ceritificateList && ceritificateList.map((e) => ({
      cas: (
        <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
          {e.certificate_name}
        </MDTypography>
      ),
      status: (
        <MDButton
          variant="gradient"
          color="error"
          fullWidth
          type="submit"
          onClick={() => handleDelete(e._id)}
        >
          DELETE
        </MDButton>
      ),
      action: (
        <MDTypography component="a" href={`/edit-certificate/${e._id}`} variant="caption" color="text" fontWeight="medium">
          Edit
        </MDTypography>
      ),
    }))


  };
}
