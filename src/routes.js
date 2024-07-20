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

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";
import Startuplist from "layouts/chemicallist/startuplist";
import Startubproduct from "layouts/chemicallist/startup-product";
import Addchemical from "layouts/chemicallist/addchemical";
import Company from "layouts/tables";
import EditCompanyStatus from "layouts/tables/Editstatus";
// import Employee from "layouts/employee";
import Addcertificate from "layouts/certificates/add-certificate";
import Editcertificate from "layouts/certificates/edit-certificate";
import Fulldetail from "layouts/profile";
import Cover from "layouts/authentication/sign-up";
import Changepassword from "layouts/change-password";
import Admins from "layouts/admins";
import Addadmin from "layouts/admins/Addadmin";
import Editadmin from "layouts/admins/Editadmin";
import Sellling from "layouts/selling";
import Sells from "layouts/selling-inquiry-details";
import Certificate from "layouts/certificates/certi";
import Categories from "layouts/categories";
import Addcategory from "layouts/categories/add-category";
import Editcategory from "layouts/categories/edit-category";
import Addsubcategory from "layouts/subcategories/add-subcategory";
import Editsubcategory from "layouts/subcategories/edit-subcategory";
import Subcategories from "layouts/subcategories";
import Grade from "layouts/grade";
import Addgrade from "layouts/grade/add-subcategory";
import Editgrade from "layouts/grade/edit-subcategory";
import Productdetail from "layouts/chemicallist/data/productdetail";
import Userlist from "layouts/admins";
import Forgot from "layouts/authentication/forgetpassword/cover";
import Inquiry from "layouts/tables";
import Allinvestor from "layouts/investor/Allinvestor";
import Editinvestor from "layouts/investor/ShowInvestor";
import StartupInquiryDisplay from "layouts/chemicallist/Startupinquiries";
import InvestorInquiry from "layouts/investor/Investorinquiry";
import Startuppartner from "layouts/Partners/Startuppartners";
import Startupinvestors from "layouts/investor/Startupinvestors";
// import Startuplist from "layouts/chemicallist/startuplist";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "User List",
    key: "admin",
    icon:  <Icon fontSize="small">person</Icon>,
    route: "/User-List",
    component: <Userlist/>,
  },
  // {
  //   type: "collapse",
  //   name: "Profile",
  //   key: "billing",
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/billing",
  //   component: <Billing />,
  // },
  {
    type: "collapse",
    name: "Startup List",
    key: "startuplist",
    icon: <Icon fontSize="small">rocket</Icon>    ,
    route: "/Startup-List",
    component: <Startuplist />,
  },
 
  {
    type: "collapse",
    name: "All Inquiry",
    key: "company",
    icon: <Icon fontSize="small">question_answer</Icon>,
    route: "/company",
    component: <Inquiry />,
  },

  {
    type: "collapse",
    name: "All Investors",
    key: "invesotres",
    icon: <Icon fontSize="small">question_answer</Icon>,
    route: "/Allinvestor",
    component: <Allinvestor />,
  },
 
  // {
  //   type: "collapse",
  //   name: "Subcategories",
  //   key: "subcategories",
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/subcategory-list",
  //   component: <Subcategories />,
  // },
  // {
  //   type: "collapse",
  //   name: "Grade",
  //   key: "grade",
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/grade-list",
  //   component: <Grade />,
  // },
  // {
  //   type: "collapse",
  //   name: "Employee",
  //   key: "employee",
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/employee-list",
  //   component: <Employee />,
  // },
  // {
  //   type: "collapse",
  //   name: "Certificate List",
  //   key: "certificates",
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/certificates",
  //   component: <Certificate />,
  // },
  {
    type: "collapse",
    name: "Change Password",
    key: "change-password",
    icon: <Icon fontSize="small">vpn_key</Icon>,
    route: "/change-password",
    component: <Changepassword />,
  },
  // {
  //   type: "collapse",
  //   name: "Profile",
  //   key: "profile",
  //   icon: <Icon fontSize="small">person</Icon>,
  //   route: "/profile",
  //   component: <Profile />,
  // },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon:<Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "routes",
    name: "Insert Chemical",
    key: "insert-chemical",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/insert-chemical",
    component: <Addchemical />,
  },
  {
    type: "routes",
    name: "Partner",
    key: "partner",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/allpartner/:_id",
    component: <Startuppartner />,
  },
  {
    type: "routes",
    name: "investor",
    key: "investor",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/allinvestors/:_id",
    component: <Startupinvestors />,
  },
  {
    type: "routes",
    name: "Edit Chemical",
    key: "edit-chemical",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/edit-chemical/:_id",
    component: <Startubproduct />,
  },
  {
    type: "routes",
    name: "Edit Company",
    key: "edit-company",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/edit-company/:_id",
    component: <EditCompanyStatus />,
  },
  {
    type: "routes",
    name: "Add Certificate",
    key: "add-certificate",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/add-certificate",
    component: <Addcertificate />,
  },
  {
    type: "routes",
    name: "Edit Certificate",
    key: "edit-certificate/:_id",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/edit-certificate/:_id",
    component: <Editcertificate />,
  },
  {
    type: "routes",
    name: "Company Full Detail",
    key: "company-full-detail",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/company-full-detail",
    component: <Fulldetail />,
  },
  {
    type: "routes",
    name: "Add Admin",
    key: "add-admin",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/add-admin",
    component: <Addadmin />,
  },
  {
    type: "routes",
    name: "Edit Admin",
    key: "edit-admin",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/edit-admin/:_id",
    component: <Editadmin />,
  },
  {
    type: "routes",
    name: "Edit Investor",
    key: "edit-investor",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/edit-investor/:_id",
    component: <Editinvestor />,
  },
  {
    type: "routes",
    name: "View Inquiries",
    key: "view-inquiries",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/view-inquiry/:_id",
    component: <StartupInquiryDisplay />,
  },
  {
    type: "routes",
    name: "View Inquiries",
    key: "view-invinquiries",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/view-invinquiry/:_id",
    component: <InvestorInquiry />,
  },
  {
    type: "routes",
    name: "Selling Inquiry",
    key: "selling-inquiry-details",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/selling-inquiry-details",
    component: <Sellling />,
  },
  {
    type: "routes",
    name: "Selling Inquiry",
    key: "selling-inquiry-details",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/selling-inquiry-detail",
    component: <Sells />,
  },
  {
    type: "routes",
    name: "Add Category",
    key: "add-category",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/add-category",
    component: <Addcategory />,
  },
  {
    type: "routes",
    name: "Edit Category",
    key: "edit-category",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/edit-category/:_id",
    component: <Editcategory />,
  },
  {
    type: "routes",
    name: "Add Subategory",
    key: "add-subcategory",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/add-subcategory",
    component: <Addsubcategory />,
  },
  {
    type: "routes",
    name: "Edit Subcategory",
    key: "edit-subcategory",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/edit-subcategory/:_id",
    component: <Editsubcategory />,
  },
  {
    type: "routes",
    name: "Add Grade",
    key: "add-grade",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/add-grade",
    component: <Addgrade />,
  },
  {
    type: "routes",
    name: "Edit Grade",
    key: "edit-grade",
    icon: <Icon fontSize="small">add_box</Icon>,
    route: "/edit-grade/:_id",
    component: <Editgrade />,
  },
  {
    type: "routes",
    name: "product-detail",
    key: "productdetail",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/product-detail/:_id",
    component: <Productdetail />,
  },
  {
    type: "routes",
    name: "product-detail",
    key: "productdetail",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/forgetpassword",
    component: <Forgot />,
  },
];

export default routes;
