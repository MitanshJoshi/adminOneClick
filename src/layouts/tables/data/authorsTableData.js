
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import { BASE_URL } from "BASE_URL";
import { useState ,useEffect} from "react";



export default function Data(title,descprition) {
  const [startup, setstartup] = useState([]);
  // const filteredData = startup.filter((e) => (e.startupName?.toLowerCase().includes(data))) 
  // console.log(startup)
  const filterData = () => {
    // const contactString = String(contact);
    return startup.filter((item) => {
      // const contact = contact.toLowerCase();
      return (
        item.title.toLowerCase().includes(title) &&
        item.description.toLowerCase().includes(descprition) 
      );
    });
  };
  const filteredData = filterData();
  useEffect(() => {
    // setCountryData(Countries);
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token)
        const response = await fetch(`${BASE_URL}/api/admin/all-find-inquiry`, {
          method: "GET",
          headers: {
            Authorization: token,
          },
        });
        const responseData = await response.json();
        setstartup(responseData.data)
        console.log(responseData.data)
      } catch (error) {
        console.error("Error fetching data from the backend", error);
      }
    };
  
    fetchData();
  }, [ ]);



  return {
    columns: [
      { Header: "title", accessor: "title", width: "18%", align: "left" },
      { Header: "description", accessor: "description", align: "left" },
      { Header: "best_time_to_connect", accessor: "best_time_to_connect", align: "left" },
      { Header: "view", accessor: "view", align: "center" },
    ],

    rows: filteredData && filteredData.map((e) => ({
      // company: <Author name="DFTA " email="C10H7F2N3O" image={chemical}  />,
      title: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            {e.title}
          </MDTypography>
        ),
        description: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            {e.description}
          </MDTypography>
        ),
        best_time_to_connect: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            {e.best_time_to_connect}
          </MDTypography>
        ), 
      view: (
        <MDTypography component="a" href={`/edit-company/${e._id}`} variant="caption" color="text" fontWeight="medium">
          view
        </MDTypography>)
    }))
  };
}
