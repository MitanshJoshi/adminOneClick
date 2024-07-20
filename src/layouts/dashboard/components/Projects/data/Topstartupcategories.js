import { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { BASE_URL } from "BASE_URL";
import axios from 'axios';
import MDProgress from "components/MDProgress";


export default function Catedata() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/admin/getTopCategoryForStartup`, {
          headers: {
            Authorization:localStorage.getItem("token") ,  // replace with the actual token
          },
        });
        console.log('cateee:',response.data.
            topCategories[0]._id.name);
        
        setData(response.data.
            topCategories
          );
      } catch (error) {
        console.error('Error fetching latest users:', error);
      }
    };
    fetchData();
  }, []);

  const generateRows = () =>
    Data.map((user) => ({
      name: (
        <MDBox display="flex" py={1}>
           {user._id.name}
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
      { Header: "Category name", accessor: "name", width: "10%", align: "left" },
      { Header: "Startups", accessor: "count", width: "10%", align: "left" },
     
    ],
    rows: generateRows(),
  };
}
