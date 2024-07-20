import { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { BASE_URL } from "BASE_URL";
import axios from 'axios';
import MDProgress from "components/MDProgress";


export default function Idata() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/admin/getLatestInvestors`, {
          headers: {
            Authorization:localStorage.getItem("token") ,  // replace with the actual token
          },
        });
        console.log('startupp:',response);
        
        setData(response.data.
            investors
          );
      } catch (error) {
        console.error('Error fetching latest users:', error);
      }
    };
    fetchData();
  }, []);

  const generateRows = () =>
    Data.map((user) => ({
      Photo: (
        <MDBox display="flex" py={1}>
           <MDAvatar src={user.InvestorPhoto} size="sm" />
        </MDBox>

      ),
      Name: (
        <MDBox display="flex" py={1}>
          {/* {avatars([[user.profilePicture, user.name]])} */}
          {user.InvestorName}
        </MDBox>

      ),
      firm: (
        <MDBox display="flex" py={1}>
          {/* {avatars([[user.profilePicture, user.name]])} */}
          {user.FirmName}
        </MDBox>

      ),
      Contact: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {user.InvestorContactNum}
        </MDTypography>
      ),
      person: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {user.contactPerson}
        </MDTypography>
      ),
      Email: (
        <MDBox width="8rem" textAlign="left">
          {user.InvestorEmail}
        </MDBox>
      ),
      country: (
        <MDBox width="8rem" textAlign="left">
          {user.InvestorCountry}
        </MDBox>
      ),
      City: (
        <MDBox width="8rem" textAlign="left">
          {user.InvestorCity}
        </MDBox>
      ),
      State: (
        <MDBox width="8rem" textAlign="left">
          {user.InvestorState}
        </MDBox>
      ),
    }));

  return {
    columns: [
      { Header: "investor photo", accessor: "Photo", width: "10%", align: "left" },
      { Header: "investor name", accessor: "Name", width: "10%", align: "left" },
      { Header: "Firm Name", accessor: "firm", width: "10%", align: "left" },
      { Header: "Contact person", accessor: "person", width: "10%", align: "left" },
      { Header: "contact", accessor: "Contact", width: "10%", align: "left" },
      { Header: "Email", accessor: "Email", align: "center" },
      { Header: "County", accessor: "country", width: "10%", align: "left" },
      { Header: "City", accessor: "City", width: "10%", align: "left" },
      { Header: "State", accessor: "State", width: "10%", align: "left" },
    ],
    rows: generateRows(),
  };
}
