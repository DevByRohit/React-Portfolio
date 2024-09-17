import Header from "./Header";
import Email from "./Email";
import SocialMedia from "./SocialMedia";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
function HomePage() {
  return (
    <>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Email></Email>
      <SocialMedia></SocialMedia>
    </>
  );
}

export default HomePage;
