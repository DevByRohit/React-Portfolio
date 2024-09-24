import {
  Modal,
  Badge,
  Indicator,
  Image,
  Group,
  Text,
  Button,
  ScrollArea,
  useMatches,
} from "@mantine/core";

const ProjectInfoModel = (props) => {
  const download = useMatches({ xs: "xs", md: "sm", lg: "md", bs: "lg" });
  const techno = useMatches({ xs: "md", sm: "md", md: "lg", bs: "xl" });
  const btn = useMatches({ xs: "xs", sm: "sm", md: "md", lg: "lg" });

  return (
    <Modal.Root
      size={"auto"}
      opened={props.opened}
      onClose={props.close}
      scrollAreaComponent={ScrollArea.Autosize}
      className="font-mono"
    >
      <Modal.Overlay />
      <Modal.Content className="!rounded-3xl">
        <Modal.Header className="!bg-bgColor !border-primaryColor !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl xs-mx:!p-2">
          <Modal.Title
            data-autofocus
            className="flex items-center gap-4 text-4xl text-white !font-bold xs-mx:gap-1 sm-mx:!text-3xl xs-mx:!text-2xl xsm-mx:!text-xl"
          >
            {props.title}
            {props.live === true && (
              <Badge
                size={download}
                className="flex items-center gap-1"
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
        <Modal.Body className="!bg-bgColor !border-primaryColor !border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl !pt-2 xs-mx:!p-2">
          <Image
            className="!rounded-lg !shadow-[0_0_5px_0_#64FFDA]"
            src={props.image}
            alt={props.image}
          />
          <div className="flex flex-wrap gap-3 xs-mx:gap-2 my-3">
            {props.technologies.map((tech, index) => {
              return (
                <Badge
                  variant="light"
                  color="#64FFDA"
                  key={index}
                  size={techno}
                >
                  {tech}
                </Badge>
              );
            })}
          </div>
          <Text
            className="!text-justify !text-lg sm-mx:!text-base xs-mx:!text-xs"
            c="dimmed"
          >
            {props.description}
          </Text>

          <Group mt={"md"} mb={3} justify={"space-between"}>
            {/* view code button */}
            <a
              href={props.github}
              target="_blank"
              className="!w-[48%] sm-mx:!w-[46%]"
            >
              <Button
                variant={"outline"}
                size={btn}
                className="!text-primaryColor border-[#64FFDA] hover:bg-[#64FFDA12]"
                color={"#112240"}
                radius="md"
                fullWidth
              >
                View Code
              </Button>
            </a>

            {/* view live app  button */}
            <a
              href={props.link}
              target="_blank"
              className="!w-[48%] sm-mx:!w-[46%]"
            >
              <Button
                size={btn}
                className="!text-bgColor border-[#64FFDA]"
                color="#64FFDA"
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
