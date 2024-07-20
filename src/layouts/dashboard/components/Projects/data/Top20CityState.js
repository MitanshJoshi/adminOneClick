import { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { BASE_URL } from "BASE_URL";
import axios from 'axios';
import MDProgress from "components/MDProgress";


export default function CityStateStartup() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/admin/getTopCityStateForStartup`, {
          headers: {
            Authorization:localStorage.getItem("token") ,  // replace with the actual token
          },
        });
        console.log('stateee:',response.data.data);
        
        setData(response.data.data
          );
      } catch (error) {
        console.error('Error fetching latest users:', error);
      }
    };
    fetchData();
  }, []);

  const generateRows = () =>
    Data.map((user) => ({
      city: (
        <MDBox display="flex" py={1}>
           {user._id.city}
        </MDBox>

      ),
      state: (
        <MDBox display="flex" py={1}>
           {user._id.state}
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
      { Header: "City name", accessor: "city", width: "10%", align: "left" },
      { Header: "State Name", accessor: "state", width: "10%", align: "left" },
      { Header: "Startup count", accessor: "count", width: "10%", align: "left" },
     
    ],
    rows: generateRows(),
  };
}
