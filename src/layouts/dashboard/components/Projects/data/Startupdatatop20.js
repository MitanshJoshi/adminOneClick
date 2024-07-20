import { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { BASE_URL } from "BASE_URL";
import axios from 'axios';
import MDProgress from "components/MDProgress";


export default function Sdata() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/admin/getLatestStartup`, {
          headers: {
            Authorization:localStorage.getItem("token") ,  // replace with the actual token
          },
        });
        console.log('startupp:',response);
        
        setData(response.data.
          startups
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
           <MDAvatar src={user.startupLogo} size="sm" />
        </MDBox>

      ),
      Name: (
        <MDBox display="flex" py={1}>
          {/* {avatars([[user.profilePicture, user.name]])} */}
          {user.startupName}
        </MDBox>

      ),
      Contact: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {user.contactNumber}
        </MDTypography>
      ),
      person: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {user.contactPerson}
        </MDTypography>
      ),
      Email: (
        <MDBox width="8rem" textAlign="left">
          {user.email}
        </MDBox>
      ),
      City: (
        <MDBox width="8rem" textAlign="left">
          {user.city}
        </MDBox>
      ),
      State: (
        <MDBox width="8rem" textAlign="left">
          {user.state}
        </MDBox>
      ),
    }));

  return {
    columns: [
      { Header: "Startuplogo", accessor: "Photo", width: "10%", align: "left" },
      { Header: "Startupname", accessor: "Name", width: "10%", align: "left" },
      { Header: "Contact person", accessor: "person", width: "10%", align: "left" },
      { Header: "contact", accessor: "Contact", width: "10%", align: "left" },
      { Header: "Email", accessor: "Email", align: "center" },
      { Header: "City", accessor: "City", width: "10%", align: "left" },
      { Header: "State", accessor: "State", width: "10%", align: "left" },
    ],
    rows: generateRows(),
  };
}
