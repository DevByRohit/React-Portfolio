import { Timeline } from "@mantine/core";
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { ExperienceInfo } from "./User";

const TimeLineItems = (items) => {
  return items.map((item, index) => {
    return (
      <Timeline.Item
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        className="dm-mono-medium !pt-11 !mb-2"
        key={index}
        bullet={<IconBriefcaseFilled size={20} className="!text-bgColor" />}
      >
        <div className="border shadow-[0_0_10px_0_#64FFDA50] flex flex-col gap-2 border-primaryColor p-4 rounded-2xl">
          <div className="flex gap-2 items-center">
            <img
              className="rounded-lg w-14"
              src={`${item.company}.png`}
              alt="companyLogo"
            />
            <div className="flex flex-col">
              <div className="text-white text-2xl font-semibold">
                {item.role}
              </div>
              <div className="text-textColor text-lg font-semibold">
                {item.company} &#x2022; {item.date}
              </div>
            </div>
          </div>
          <div className="text-textColor text-justify leading-6">
            {item.desc}
          </div>
          <div className="text-textColor font-medium">
            <span className="font-semibold text-white">Skills:</span>
            {item.skills.map((skill, index) => {
              return <span key={index}> &#x2022; {skill}</span>;
            })}
          </div>
        </div>
      </Timeline.Item>
    );
  });
};

const Experience = () => {
  return (
    <div className="px-10 mx-20 mt-16 mb-24 font-mono">
      <h1 className="text-4xl text-center text-white font-bold">
        <span className="text-primaryColor">04.&nbsp;</span>
        Experience
      </h1>
      <Timeline color={"#64ffda"} active={5} bulletSize={30} lineWidth={3}>
        {TimeLineItems(ExperienceInfo)}
        <Timeline.Item
          bullet={<IconBriefcaseFilled size={20} className="!text-bgColor" />}
        ></Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Experience;
