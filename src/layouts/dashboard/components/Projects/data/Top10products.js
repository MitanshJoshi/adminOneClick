import { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { BASE_URL } from "BASE_URL";
import axios from 'axios';
import MDProgress from "components/MDProgress";


export default function TopinquiriesProducts() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/admin/getLatestInquiries`, {
          headers: {
            Authorization:localStorage.getItem("token") ,  // replace with the actual token
          },
        });
        console.log('invvv:',response);
        
        setData(response.data.
            topProducts
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
           <MDAvatar src={user.product.productPhotos}></MDAvatar>
        </MDBox>

      ),
      name: (
        <MDBox display="flex" py={1}>
           {user.product.productName}
        </MDBox>

      ),
      sname: (
        <MDBox display="flex" py={1}>
           {user.startup.startupName}
        </MDBox>

      ),
      desc: (
        <MDBox display="flex" py={1}>
           {user.product.description}
        </MDBox>

      ),
      price: (
        <MDBox display="flex" py={1}>
           {user.product.productprice}
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
      { Header: "product photo", accessor: "photo", width: "10%", align: "left" },
      { Header: "Startup name", accessor: "sname", width: "10%", align: "left" },
      { Header: "product name", accessor: "name", width: "10%", align: "left" },
      { Header: "description", accessor: "desc", width: "10%", align: "left" },
      { Header: "Price", accessor: "price", width: "10%", align: "left" },
      { Header: "total inquiries", accessor: "count", width: "10%", align: "left" },
     
    ],
    rows: generateRows(),
  };
}
