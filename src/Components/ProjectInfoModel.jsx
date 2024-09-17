import {
  Modal,
  Badge,
  Indicator,
  Image,
  Group,
  Text,
  Button,
  ScrollArea,
} from "@mantine/core";

const ProjectInfoModel = (props) => {
  return (
    <Modal.Root
      size={"70%"}
      opened={props.opened}
      onClose={props.close}
      scrollAreaComponent={ScrollArea.Autosize}
      className="font-mono"
    >
      <Modal.Overlay />
      <Modal.Content className="!rounded-3xl">
        <Modal.Header className="!bg-bgColor !border-primaryColor !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
          <Modal.Title
            data-autofocus
            className="flex items-center gap-4 text-4xl text-white !font-bold"
          >
            {props.title}
            {props.live === true && (
              <Badge
                size="md"
                className="flex items-center gap-1 text-[12px] p-3"
                variant="outline"
                color="#64FFDA"
                rightSection={
                  <Indicator
                    color="green"
                    position="middle-end"
                    size={10}
                    processing
                  ></Indicator>
                }
              >
                Live
              </Badge>
            )}
          </Modal.Title>
          <Modal.CloseButton
            size={"md"}
            iconSize={"30px"}
            className="!bg-bgColor !text-gray-100"
          />
        </Modal.Header>
        <Modal.Body className="!bg-bgColor !border-primaryColor !border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl !pt-2">
          <Image
            className="!rounded-lg !shadow-[0_0_5px_0_#64FFDA]"
            src={props.image}
            alt={props.image}
          />
          <Group mt={"md"} mb={"md"}>
            {props.technologies.map((tech, index) => {
              return (
                <Badge variant="light" color="#64FFDA" key={index} size={"xl"}>
                  {tech}
                </Badge>
              );
            })}
          </Group>
          <Text className="!text-justify" size={"lg"} c="dimmed">
            {props.description}
          </Text>
          <Group mt={"md"} justify={"space-between"}>
            {/* view code button */}
            <a href={props.github} target="_blank" className="!w-[48%]">
              <Button
                variant={"outline"}
                size={"lg"}
                className="!text-primaryColor border-[#64FFDA] hover:bg-[#64FFDA12]"
                color={"#112240"}
                mt="md"
                radius="md"
                fullWidth
              >
                View Code
              </Button>
            </a>

            {/* view live app  button */}
            <a href={props.link} target="_blank" className="!w-[48%]">
              <Button
                size={"lg"}
                className="!text-bgColor border-[#64FFDA]"
                color="#64FFDA"
                mt="md"
                radius="md"
                fullWidth
              >
                View Live App
              </Button>
            </a>
          </Group>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ProjectInfoModel;
