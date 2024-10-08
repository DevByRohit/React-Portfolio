import { useDisclosure } from "@mantine/hooks";
import { Drawer, Burger, useMatches } from "@mantine/core";
// import { IconHexagonLetterR, IconX } from "@tabler/icons-react";
import { navLinks } from "./Header";

// const links = ["About", "Work", "Experience", "Skills", "Contact"];
// const navigationLinks = () => {
//   return links.map((link, index) => (
//     <div className="flex flex-col items-center">
//       <span className="text-primaryColor">0{index + 1}. </span>
//       <a className="hover:text-primaryColor text-textColor" href={`#${link}`}>
//         {link}
//       </a>
//     </div>
//   ));
// };

function SideBar() {
  const [opened, { toggle }] = useDisclosure(false);
  const size = useMatches({
    xs: "lg",
    sm: "lg",
  });

  return (
    <>
      <Drawer.Root
        className="bs:hidden !-z-10"
        position="right"
        opened={opened}
        size="55vw"
        onClose={toggle}
      >
        <Drawer.Overlay
          className="!-z-0 !backdrop-opacity-85 blur-sm"
          style={{ backgroundOpacity: 0.5, blur: 4 }}
        />
        <Drawer.Content className="!-z-0" bg="#112240">
          <Drawer.Body
            bg="#112240"
            className="flex flex-col mt-20 gap-5 dm-mono-regular xs-mx:font-semibold xs-mx:mt-24 md-mx:mt-24 bs-mx:mt-24"
          >
            {/* {navigationLinks()} */}
            {navLinks(true, toggle)}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      {/* Burger Icon */}
      <Burger
        className="bs:!hidden !z-50 relative"
        color="#64FFDA"
        lineSize={2.5}
        size={size}
        opened={opened}
        onClick={toggle}
      />
    </>
  );
}

export default SideBar;
