
// import '../styles/globals.css';
// import Navbar from '../components/Navbar';

import AuthForm from "./components/auth/page";
// import Login from "./components/logIn/page";
import Navbar from "./components/navbar/page";
// import SignUp from "./components/signup/page";

export default function Home() {
  // { Component, pageProps }
  return (
    <>
      <Navbar />
      {/* <Component {...pageProps} /> */}
      {/* <Login></Login>

      <SignUp></SignUp> */}

      <AuthForm></AuthForm>
      
      

    </>
  );
}
