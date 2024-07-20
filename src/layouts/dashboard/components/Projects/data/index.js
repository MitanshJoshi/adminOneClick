import { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import axios from 'axios';
import MDProgress from "components/MDProgress";
import { BASE_URL } from "BASE_URL";


export default function Data() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/admin/getLatestUser`, {
          headers: {
            Authorization:localStorage.getItem("token") ,
          },
        });
        console.log('userr:',response.data.user);
        setUserData(response.data.user);
      } catch (error) {
        console.error('Error fetching latest users:', error);
      }
    };
    fetchData();
  }, []);

  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",
            "&:not(:first-of-type)": {
              ml: -1.25,
            },
            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const generateRows = () =>
    userData.map((user) => ({
      Photo: (
        <MDBox display="flex" py={1}>
           <MDAvatar src={user.profilePicture} size="sm" />
        </MDBox>

      ),
      Name: (
        <MDBox display="flex" py={1}>
          {/* {avatars([[user.profilePicture, user.name]])} */}
          {user.name}
        </MDBox>

      ),
      Contact: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {user.contact}
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
      { Header: "photo", accessor: "Photo", width: "10%", align: "left" },
      { Header: "name", accessor: "Name", width: "10%", align: "left" },
      { Header: "contact", accessor: "Contact", width: "10%", align: "left" },
      { Header: "Email", accessor: "Email", align: "center" },
      { Header: "City", accessor: "City", width: "10%", align: "left" },
      { Header: "State", accessor: "State", width: "10%", align: "left" },
    ],
    rows: generateRows(),
  };
}
