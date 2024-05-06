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
  
  const [categoryList, setCategoryList] = useState([])


  const fetchUserList = async () => {
    try {
      const token = `Bearer ${localStorage.getItem("chemToken")}`;
      const response = await axios.get(
        `${BASE_URL}/api/category/categories`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setCategoryList(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);



  return {
    columns: [
      { Header: "category name", accessor: "category", align: "left" },
      { Header: "edit", accessor: "action", align: "center" },
      { Header: "delete", accessor: "status", align: "center" },
    ],


    rows: categoryList && categoryList.map((category) => ({
      category: (
        <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
          {category.category_name}
        </MDTypography>
      ),
      status: (
        <MDButton
          variant="gradient"
          color="error"
          fullWidth
          type="submit"
          onClick={() => handleDelete(category._id)} // Pass the category ID here
        >
          DELETE
        </MDButton>
      ),
      action: (
        <MDTypography component="a" href={`/edit-category/${category._id}`} variant="caption" color="text" fontWeight="medium">
          Edit
        </MDTypography>
      ),
    }))

  };
}