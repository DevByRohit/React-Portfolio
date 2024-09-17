import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Indicator,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import ProjectInfoModel from "./ProjectInfoModel";

const ProjectsCards = (props) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Card
        onClick={open}
        className="!bg-bgColor transition-transform duration-300 ease-in-out mb-5 !border-primaryColor border-[1.2px] cursor-pointer hover:!scale-[1.02] hover:!shadow-[0_0_10px_1px_#64FFDA]"
        w={362}
        shadow="lg"
        padding="sm"
        radius="lg"
        withBorder
      >
        <Card.Section className="p-3">
          <Image
            className="!rounded-lg !shadow-[0_0_5px_0_#64FFDA]"
            src={props.image}
            alt={props.image}
          />
        </Card.Section>

        <Group justify="space-between" mt="xs" mb="xs">
          <Text
            className="flex items-center gap-3 !text-2xl !font-bold !text-white"
            fw={500}
          >
            {props.title}
            {props.live === true && (
              <Badge
                className="flex items-center gap-1"
                variant="outline"
                color="#64FFDA"
                rightSection={
                  <Indicator
                    color="green"
                    position="middle-end"
                    size={7}
                    processing
                  ></Indicator>
                }
              >
                Live
              </Badge>
            )}
          </Text>
        </Group>

        <Group mb="xs">
          {props.technologies.map((tech, index) => {
            return (
              index < 3 && (
                <Badge variant="light" color="#64FFDA" key={index} size={"lg"}>
                  {tech}
                </Badge>
              )
            );
          })}
        </Group>
        <Text className="!text-justify" lineClamp={5} size={"md"} c="dimmed">
          {props.description}
        </Text>

        <Button
          onClick={open}
          className="!text-primaryColor border-[#64FFDA] hover:bg-[#64ffda12]"
          color={"#112240"}
          mt="md"
          radius="md"
          fullWidth
        >
          Show More
        </Button>
      </Card>
      <ProjectInfoModel
        opened={opened}
        close={close}
        title={props.title}
        description={props.description}
        image={props.image}
        link={props.link}
        github={props.github}
        live={props.live}
        technologies={props.technologies}
      />
    </>
  );
};

export default ProjectsCards;
