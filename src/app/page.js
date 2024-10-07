
// import '../styles/globals.css';
// import Navbar from '../components/Navbar';

import AuthForm from "./components/auth/page";
import HeroSection from "./components/home/page";
import Navbar from "./components/navbar/page";

export default function Home() {
  // { Component, pageProps }
  return (
    <>
      <Navbar />
      {/* <Component {...pageProps} /> */}
      <HeroSection></HeroSection>


      <AuthForm></AuthForm>
      
      

    </>
  );
}
