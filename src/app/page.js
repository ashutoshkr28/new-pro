
import ContactSection from "./contact/page";
import HeroSection from "./home/page";
import Post from "./post/page";
// import TeacherInfo from "./teacher/page";

export default function Home() {
  // { Component, pageProps }
  return (
    <>
      <HeroSection></HeroSection>
      <Post></Post>
      {/* <TeacherInfo></TeacherInfo> */}
      {/* <ContactSectionn></ContactSectionn> */}
      <ContactSection></ContactSection>
      
      

    </>
  );
}
