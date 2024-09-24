import { Loader } from "./Loader";
import Header from "./Header";
import Email from "./Email";
import SocialMedia from "./SocialMedia";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
// import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import ResumeViewer from "./ResumeViewer";
import { useEffect, useState } from "react";
function HomePage() {
  const [loaging, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div
      className={`${
        loaging ? "flex" : ""
      } items-center justify-center overflow-hidden min-h-[100vh]`}
    >
      {loaging !== true ? (
        <>
          <Header></Header>
          <About></About>
          <Projects></Projects>
          <Skills></Skills>
          {/* <Experience></Experience> */}
          <Contact></Contact>
          <Footer></Footer>
          <ResumeViewer></ResumeViewer>
          <Email></Email>
          <SocialMedia></SocialMedia>
        </>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
}

export default HomePage;
