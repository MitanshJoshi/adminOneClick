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

// @mui material components
import Card from "@mui/material/Card";
import React, {  useRef } from "react";
import Grid from "@mui/material/Grid";
import BasicLayout from "layouts/authentication/components/BasicLayout";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
// import bgImage from "assets/images/bg-reset-cover.jpeg";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { useState } from "react";
import { BASE_URL } from "BASE_URL";
import { useNavigate } from 'react-router-dom';
import { Email } from "@material-ui/icons";
import MDSnackbar from "components/MDSnackbar";

function Cover() {
  const [show,setshow]=useState(true)
  const [second,setsecond]=useState(false)
  const [third,setthird]=useState(false)
  const [password,setpassword]=useState("")
  const [username,setusername]=useState("")
  const navigate=useNavigate()
  // const [successSB,setSuccessSB]=useState(false)
  // const[errorSB,seterrorSB]=useState(false)
  // const openSuccessSB=()=>setSuccessSB(true)
  // const closeSuccessSB=()=>setSuccessSB(false)
  // const openErrorSB=()=>seterrorSB(true)
  // const closeErrorSB=()=>seterrorSB(false)
  // const [errorMessage, setErrorMessage] = useState("")
  // const renderSuccessSB = (
  //   <MDSnackbar
  //     color="success"
  //     icon="check"
  //     title="Successfull Added"
  //     content="successfully login."
  //     dateTime="1 sec"
  //     open={successSB}
  //     onClose={closeSuccessSB}
  //     close={closeSuccessSB}
  //     bgWhite
  //   />
  // );
  // const renderErrorSB = (
  //   <MDSnackbar
  //     color="error"
  //     icon="warning"
  //     title="Filled Error"
  //     content={errorMessage}
  //     dateTime="1 sec ago"
  //     open={errorSB}
  //     onClose={closeErrorSB}
  //     close={closeErrorSB}
  //     bgWhite
  //   />
  // );
  const handleSubmit =()=>{
    // if (!Email) {
    //   setErrorMessage("please enter email")
    //   openErrorSB();
    //   return;
    // }
    setshow(false)
    setsecond(true)

  }
  const handleotp=()=>{
    setthird(true)
    setsecond(false)
    setshow(false)
    // console.log("hello")
  }
  // otp 
  // State variables for OTP input fields
  const [otp, setOtp] = useState(Array(6).fill(""));
    
  // Event handler for updating OTP state
  const handleOtpChange = (index, value) => {
      if (value.match(/^\d?$/)) {
          const newOtp = [...otp];
          newOtp[index] = value;
          setOtp(newOtp);
          
          // Move to the next input field automatically if the current one is filled
          if (value !== "" && index < otp.length - 1) {
              document.getElementById(`otp-${index + 1}`).focus();
          }
      }
  };
  
  // Event handler for form submission
  const handlenext = (event) => {
      event.preventDefault();
      
      // Validate OTP
      const otpString = otp.join("");
      if (otpString.length === 6 && /^\d{6}$/.test(otpString)) {
          // Handle OTP submission here
          console.log("OTP submitted: ", otpString);
          // Add your OTP handling logic here
      } else {
          console.log("Invalid OTP. Please enter a valid 6-digit OTP."); 
      }
  };
  const handleforgot= async()=>{
    setsecond(false)
    setshow(false)
    try {
      const response = await fetch(`${BASE_URL}/api/admin/forgetPassword`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ "username":username, "password":password}),
      });
      const data = await response.json();
      console.log(data)
      navigate("/authentication/sign-in")
    } catch (error) {
      if (error) {
      //  openErrorSB()
      }
    }
  }
  
  return (
    <>
  
   {show && (<BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            forgot password
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}></Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="Email"  fullWidth onChange={(e)=>setusername(e.target.value)} />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit} style={{ color: "white", borderRadius: "0.5rem" }}>
                Send OTP
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
    )}
    {second && (
     <BasicLayout image={bgImage}>
     <Card>
         <MDBox
             variant="gradient"
             bgColor="info"
             borderRadius="lg"
             coloredShadow="info"
             mx={2}
             mt={-3}
             p={2}
             mb={1}
             textAlign="center"
         >
             <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                 Forgot Password
             </MDTypography>
             <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
             </Grid>
         </MDBox>
         <MDBox pt={4} pb={3} px={3}>
             <MDBox  role="form" onSubmit={handlenext}>
                 {/* OTP input fields */}
                 <MDBox mb={2}>
                     <Grid container spacing={1}>
                         {otp.map((digit, index) => (
                             <Grid item xs={2} key={index}>
                                 <MDInput
                                     id={`otp-${index}`}
                                     type="text"
                                     maxLength={1}
                                     value={digit}
                                     onChange={(e) => handleOtpChange(index, e.target.value)}
                                     fullWidth
                                 />
                             </Grid>
                         ))}
                     </Grid>
                 </MDBox>
                 {/* Submit button */}
                 <MDBox mt={4} mb={1}>
                     <MDButton type="submit" onClick={handleotp} variant="gradient" color="info" fullWidth style={{ color: "white", borderRadius: "0.5rem" }}>
                         Submit
                     </MDButton>
                 </MDBox>
             </MDBox>
         </MDBox>
     </Card>
 </BasicLayout>
    )}
    {third && (
   <BasicLayout image={bgImage}>
   <Card>
       <MDBox
           variant="gradient"
           bgColor="info"
           borderRadius="lg"
           coloredShadow="info"
           mx={2}
           mt={-3}
           p={2}
           mb={1}
           textAlign="center"
       >
           <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
               Forgot Password
           </MDTypography>
           <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
           </Grid>
       </MDBox>
       <MDBox pt={4} pb={3} px={3}>
           <MDBox role="form">
               {/* OTP input fields */}
               <MDBox mb={2}>
              <MDInput type="text" label="Password"  fullWidth onChange={(e)=>setpassword(e.target.value)} />
               </MDBox>
               <MDBox mb={2}>
              <MDInput type="text" label="Conform Password"  fullWidth />
               </MDBox>
               <MDBox mt={4} mb={1}>
                   <MDButton type="submit" onClick={handleforgot} variant="gradient" color="info" fullWidth style={{ color: "white", borderRadius: "0.5rem" }}>
                       Submit
                   </MDButton>
               </MDBox>
           </MDBox>
       </MDBox>
   </Card>
</BasicLayout>
    )}
    </> 
  );
}

export default Cover;
