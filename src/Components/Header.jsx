import { IconHexagonLetterR } from "@tabler/icons-react";
import SideBar from "./SideBar";

const links = ["About", "Projects", "Experience", "Skills", "Contact"];
const navLinks = (col = Boolean) => {
  return links.map((link, index) => (
    <a
      className={`${
        col ? "flex flex-col items-center" : ""
      } text-textColor hover:text-primaryColor text-[1.1rem]`}
      href={`#${link}`}
    >
      <span className="text-primaryColor">0{index + 1}. </span>
      {link}
    </a>
  ));
};
function Header() {
  return (
    <>
      {/* Navigation bar */}
      <nav className="flex bg-bgColor h-[15vh] px-10 dm-mono-regular justify-between items-center">
        <IconHexagonLetterR
          className="z-10"
          size={60}
          color="#64FFDA"
          stroke={1.25}
        />

        <div className="md:flex gap-8 hidden">{navLinks(false)}</div>
        <SideBar />
      </nav>
    </>
  );
}

export default Header;
export { navLinks };
