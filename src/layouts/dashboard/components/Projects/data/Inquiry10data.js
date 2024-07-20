import { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { BASE_URL } from "BASE_URL";
import axios from 'axios';
import MDProgress from "components/MDProgress";


export default function Inqdata() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/admin/getLatestInquiries`, {
          headers: {
            Authorization:localStorage.getItem("token") ,  // replace with the actual token
          },
        });
        console.log('startupp:',response);
        
        setData(response.data.
            inquiries
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
           <MDAvatar src={user.porductPhoto} size="sm" />
        </MDBox>

      ),
      Name: (
        <MDBox display="flex" py={1}>
          {/* {avatars([[user.profilePicture, user.name]])} */}
          {user.userName}
        </MDBox>

      ),
      firm: (
        <MDBox display="flex" py={1}>
          {/* {avatars([[user.profilePicture, user.name]])} */}
          {user.StartupName}
        </MDBox>

      ),
      title: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {user.title}
        </MDTypography>
      ),
      desc: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {user.description}
        </MDTypography>
      ),
      time: (
        <MDBox width="8rem" textAlign="left">
          {user.best_time_to_connect}
        </MDBox>
      ),
    }));

  return {
    columns: [
      { Header: "Product photo", accessor: "Photo", width: "10%", align: "left" },
      { Header: "User name", accessor: "Name", width: "10%", align: "left" },
      { Header: "Startup Name", accessor: "firm", width: "10%", align: "left" },
      { Header: "title", accessor: "title", width: "10%", align: "left" },
      { Header: "description", accessor: "desc", width: "10%", align: "left" },
      { Header: "best_time_to_connect", accessor: "time", align: "center" },
    ],
    rows: generateRows(),
  };
}
