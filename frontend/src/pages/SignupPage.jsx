
<<<<<<< HEAD
// import React, { useContext, useState } from "react";
// import axios from "axios";

// import CircularProgress from "@mui/material/CircularProgress";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import InputAdornment from "@mui/material/InputAdornment";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import toast from "react-hot-toast";
// import { Link, Navigate, useNavigate} from "react-router-dom";
// import { Context, server } from "../index.js";

// const SignupPage = () => {
//   const navigate = useNavigate();
//   const {isAuthenticated,setIsAuthenticated} = useContext(Context);
//   const [signupData, setSignupData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [progress, setProgress] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleTogglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleChange = (event) => {
//     setSignupData({
//       ...signupData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleOtpChange = (event) => {
//     setOtp(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // email validation
//     const emailPattern = /^[a-zA-Z0-9._-]+@mnnit.ac.in$/;
//     if (!emailPattern.test(signupData.email)) {
//       toast.error("Please use a valid mnnit.ac.in email address.");
//       return;
//     }
//     // password validation

//     try {
//       setLoading(true);
//       const response = await axios.post(
//         `${server}/sendOtp`,
//         { email: signupData.email },
//         { withCredentials: true }
//       );
//       toast.success(`Otp successfully send to your mail 📫`);
//       console.log(response.data);
//       setProgress(true);
//     } catch (error) {
//       toast.error(`Otp can't be send 📪`);
//       console.error("Error sending OTP:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOtpSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       setLoading(true);
//       const response = await axios.post(
//         `${server}/signup`,
//         { ...signupData, otp },
//         { withCredentials: true }
//       );
//       console.log(response.data);
//       toast.success(`OTP verified `)
//       toast.success('Navigating to Login')
//       navigate('/login');
//     } catch (error) {
//       toast.error(`invalid Otp ⛔ `);
//       console.error("Error verifying OTP:", error);
//     } finally {
//       setLoading(false); 
//     }
//   };

//   return (
//     <Grid container justifyContent="center" alignItems="center">
//       <Grid item xs={12} sm={8} md={6} lg={4}>
//         <Paper
//           elevation={3}
//           style={{ padding: "20px", borderRadius: "10px", textAlign: "center" }}
//         >
//           <h1>Signup Page</h1>
//           {loading && (
//             <CircularProgress size={100} />
//           )}
//           {!loading && !progress && (
//             <form onSubmit={handleSubmit}>
//               <TextField
//                 label="First Name"
//                 variant="outlined"
//                 name="firstName"
//                 value={signupData.firstName}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 label="Last Name"
//                 variant="outlined"
//                 name="lastName"
//                 value={signupData.lastName}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 label="Email"
//                 variant="outlined"
//                 type="email"
//                 name="email"
//                 value={signupData.email}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 label="Password"
//                 variant="outlined"
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={signupData.password}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         edge="end"
//                         onClick={handleTogglePasswordVisibility}
//                       >
//                         {showPassword ? (
//                           <VisibilityIcon />
//                         ) : (
//                           <VisibilityOffIcon />
//                         )}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 style={{ marginTop: "10px" }}
//               >
//                 `Sign Up`
//               </Button>
//             </form>
//           )}
//           { !loading && progress && (
//             <form onSubmit={handleOtpSubmit}>
//               <TextField
//                 label="Enter OTP"
//                 variant="outlined"
//                 type="number"
//                 name="otp"
//                 value={otp}
//                 onChange={handleOtpChange}
//                 fullWidth
//                 margin="normal"
//                 inputProps={{
//                   inputMode: 'numeric',
//                   pattern: '[0-9]{6}'
//                 }}
//               />
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 style={{ marginTop: "10px" }}
//               >
//                 `Verify OTP`
//               </Button>
//             </form>
//           )}
//            {!isAuthenticated && (
//             <h4 style={{ margin: "20px", fontSize: "16px", color: "black" }}>
//               Already Signed Up ? Login here
//             </h4>
//           )}

//           {/* Login button */}
//           <Button
//             variant="outlined"
//             color="primary"
//             fullWidth
//             style={{ marginTop: "10px" }}
//             component={Link} 
//             to="/login"
//           >
//             Log in here
//           </Button>
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// };

// export default SignupPage;


=======
>>>>>>> 87cf9dc5fcbae85987f9fa8eb142e8a5258a3a03
import React, { useContext, useState } from "react";
import axios from "axios";

import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import toast from "react-hot-toast";
import { Link, Navigate, useNavigate} from "react-router-dom";
import { Context, server } from "../index.js";

const Signup = () => {
  const navigate = useNavigate();
  const {isAuthenticated,setIsAuthenticated} = useContext(Context);
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState("");
  const [progress, setProgress] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    setSignupData({
      ...signupData,
      [event.target.name]: event.target.value,
    });
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@mnnit.ac.in$/;
    if (!emailPattern.test(signupData.email)) {
      toast.error("Please use a valid mnnit.ac.in email address.");
      return;
    }
    // password validation

    try {
      setLoading(true);
      const response = await axios.post(
        `${server}/sendOtp`,
        { email: signupData.email },
        { withCredentials: true }
      );
      toast.success(`Otp successfully send to your mail 📫`);
      console.log(response.data);
      setProgress(true);
    } catch (error) {
      toast.error(`Otp can't be send 📪`);
      console.error("Error sending OTP:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        `${server}/signup`,
        { ...signupData, otp },
        { withCredentials: true }
      );
      console.log(response.data);
      toast.success(`OTP verified `)
      toast.success('Navigating to Login')
      navigate('/login');
    } catch (error) {
      toast.error(`invalid Otp ⛔ `);
      console.error("Error verifying OTP:", error);
    } finally {
      setLoading(false); 
    }
  };
  return (
    <>
    {loading && (
      <CircularProgress size={100} />
    )}
    
    <section class="bg-white h-10">
    <div class="lg:grid lg:min-h-auto lg:grid-cols-12">
      <aside class="relative block h-16  mt-3 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </aside>
  
      <main
        class="flex items-center justify-center px-8 py-1 sm:px-12 lg:col-span-7 lg:px-16 lg:py-0 xl:col-span-6"
      >
        <div class="max-w-xl lg:max-w-3xl">
          <a class="block text-blue-600" href="/">
            <span class="sr-only">Home</span>
            <svg
              class="h-8 sm:h-10"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                fill="currentColor"
              />
            </svg>
          </a>
  
          <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welcome to Complaint app 🦑
          </h1>
  
          <p class="mt-4 leading-relaxed text-gray-500">
          Create an account to submit your complaints and track their status.
          </p>
          {!loading && !progress && (
          <form  onSubmit={handleSubmit} class="mt-8 grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label for="FirstName" class="block text-sm font-medium text-gray-700">
                First Name
              </label>
  
              <input
                type="text"
                id="FirstName"
                name="firstName"
                value={signupData.firstName}
                onChange={handleChange}
                class="mt-1 w-full h-8 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>
  
            <div class="col-span-6 sm:col-span-3">
              <label for="LastName" class="block text-sm font-medium text-gray-700">
                Last Name
              </label>
  
              <input
                type="text"
                id="LastName"
                name="lastName"
                value={signupData.lastName}
                onChange={handleChange}
                class="mt-1 h-8 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>
  
            <div class="col-span-6">
              <label for="Email" class="block text-sm font-medium text-gray-700"> Email </label>
  
              <input
                type="email"
                id="Email"
                name="email"
                value={signupData.email}
                onChange={handleChange}
                class="mt-1 w-full  h-8 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>
  
            <div class="col-span-6 sm:col-span-3">
              <label for="Password" class="block text-sm font-medium text-gray-700"> Password </label>
  
              <input
                type="password"
                id="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={signupData.password}
                onChange={handleChange}
                class="mt-1 h-8 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={handleTogglePasswordVisibility}
                      >
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
  
            <div class="col-span-6 sm:col-span-3">
              <label for="PasswordConfirmation" class="block text-sm font-medium text-gray-700">
                Password Confirmation
              </label>
  
              <input
                type="password"
                id="PasswordConfirmation"
                name="password_confirmation"
                class="mt-1  h-8 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>
  
            <div class="col-span-6 mt-5">
              <label for="MarketingAccept" class="flex gap-4">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  class="size-5  h-5 rounded-md border-gray-200 bg-white shadow-sm"
                />
  
                <span class="text-sm text-gray-700">
                I agree to receive an OTP email at the provided email address.
                </span>
              </label>
            </div>
  
<<<<<<< HEAD
            {/* <div class="col-span-6">
              <p class="text-sm text-gray-500">
                By creating an account, you agree to our
                <a href="#" class="text-gray-700"> terms and conditions </a>
                and
                <a href="#" class="text-gray-700 "> privacy policy</a>.
              </p>
            </div> */}
  
=======
>>>>>>> 87cf9dc5fcbae85987f9fa8eb142e8a5258a3a03
            <div class="col-span-6  mt-3 sm:flex sm:items-center sm:gap-4">
              <button
               type="submit"
                class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              >
                Create an account
              </button>
                
              <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                Already have an account?
                <a href="/login" class="text-gray-700">  Log in</a>.
              </p>
            </div>
          </form>
        )}
        { !loading && progress && (
            <form onSubmit={handleOtpSubmit}>
              <TextField
                label="Enter OTP"
                variant="outlined"
                type="number"
                name="otp"
                value={otp}
                onChange={handleOtpChange}
                fullWidth
                margin="normal"
                inputProps={{
                  inputMode: 'numeric',
                  pattern: '[0-9]{6}'
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "10px" }}
              >
                `Verify OTP`
              </Button>
            </form>
          )}
        </div>
      </main>
    </div>
    </section>
   </>
  );
}

export default Signup;
