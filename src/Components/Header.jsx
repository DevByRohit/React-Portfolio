import { IconHexagonLetterR } from "@tabler/icons-react";
import SideBar from "./SideBar";
function Header() {
  return (
    <>
      {/* Navigation bar */}
      <nav className="flex bg-bgColor h-[15vh] px-10 dm-mono-medium justify-between items-center">
        <IconHexagonLetterR size={60} color="#64FFDA" stroke={1.25} />

        <div className="sm:flex gap-4 text-textColor hidden">
          <a href="#about" className="hover:text-primaryColor">
            About
          </a>
          <a href="#work" className="hover:text-primaryColor">
            Work
          </a>
          <a href="#experience" className="hover:text-primaryColor">
            Experience
          </a>
          <a href="#skills" className="hover:text-primaryColor">
            Skills
          </a>
          <a href="#contact" className="hover:text-primaryColor">
            Contact
          </a>
        </div>
        <SideBar></SideBar>
      </nav>
    </>
  );
}

export default Header;
