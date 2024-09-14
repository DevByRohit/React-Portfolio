import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import { IconHexagonLetterR, IconX } from "@tabler/icons-react";

function SideBar() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        className="sm:hidden"
        position="right"
        opened={opened}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        size="50vw"
        onClose={close}
        title={<IconHexagonLetterR size={60} color="#64FFDA" stroke={1.25} />}
        closeButtonProps={{
          icon: <IconX size={30} stroke={2} />,
        }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open} className="sm:!hidden">
        Open Drawer
      </Button>
    </>
  );
}

export default SideBar;
