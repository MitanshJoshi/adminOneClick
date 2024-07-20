import { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { BASE_URL } from "BASE_URL";
import axios from 'axios';
import MDProgress from "components/MDProgress";


export default function TopinquiriesStartup() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/admin/getTopStartupUsingInquiry`, {
          headers: {
            Authorization:localStorage.getItem("token") ,  // replace with the actual token
          },
        });
        console.log('invvv:',response);
        
        setData(response.data.
            topStartups
          );
      } catch (error) {
        console.error('Error fetching latest users:', error);
      }
    };
    fetchData();
  }, []);

  const generateRows = () =>
    Data.map((user) => ({
      photo: (
        <MDBox display="flex" py={1}>
           <MDAvatar src={user.startup.startupLogo}></MDAvatar>
        </MDBox>

      ),
      name: (
        <MDBox display="flex" py={1}>
           {user.startup.startupName}
        </MDBox>

      ),
      contact: (
        <MDBox display="flex" py={1}>
           {user.startup.contactNumber}
        </MDBox>

      ),
      email: (
        <MDBox display="flex" py={1}>
           {user.startup.email}
        </MDBox>

      ),
      count: (
        <MDBox display="flex" py={1}>
          {/* {avatars([[user.profilePicture, user.name]])} */}
          {user.count}
        </MDBox>

      ),
    }));

  return {
    columns: [
      { Header: "startupLogo", accessor: "photo", width: "10%", align: "left" },
      { Header: "Startup name", accessor: "name", width: "10%", align: "left" },
      { Header: "Contact", accessor: "contact", width: "10%", align: "left" },
      { Header: "email", accessor: "email", width: "10%", align: "left" },
      { Header: "total inquiries", accessor: "count", width: "10%", align: "left" },
     
    ],
    rows: generateRows(),
  };
}
