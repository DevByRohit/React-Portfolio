import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Indicator,
  useMatches,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import ProjectInfoModel from "./ProjectInfoModel";

const ProjectsCards = (props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const badge = useMatches({
    xsm: "sm",
    md: "md",
    lg: "lg",
  });
  const btn = useMatches({
    xs: "xs",
    sm: "sm",
    md: "md",
  });

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="800"
      className="w-[32%] lg-mx:w-[48%] md-mx:w-[50%] md-mx:p-1 sm-mx:w-[95%] xs-mx:w-full"
    >
      <Card
        onClick={open}
        className="!bg-bgColor transition-transform duration-300 ease-in-out mb-5 !border-primaryColor border-[1.2px] cursor-pointer hover:!scale-[1.02] hover:!shadow-[0_0_10px_1px_#64FFDA80]"
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
            className="flex items-center gap-3 !text-2xl !font-bold !text-white sm-mx:!text-xl"
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
                <Badge variant="light" color="#64FFDA" key={index} size={badge}>
                  {tech}
                </Badge>
              )
            );
          })}
        </Group>
        <Text className="!text-justify !text-base xs-mx:!text-sm" lineClamp={5} size={"md"} c="dimmed">
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
    </div>
  );
};

export default ProjectsCards;
