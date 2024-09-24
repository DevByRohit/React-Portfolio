import { Avatar } from "@mantine/core";
const SkillBadge = (skills) => {
  return skills.map((skill, index) => {
    return (
      <div
        key={index}
        className="flex items-center gap-1 border border-textColor rounded-xl px-3 py-2 xs-mx:px-2 xs-mx:py-1 xs-mx:rounded-[5px]"
      >
        <Avatar
          className="!w-[24px] !p-1"
          variant="filled"
          radius="sm"
          src={`/Icons/${skill}.png`}
        />
        <div className="text-xl text-textColor font-medium xs-mx:text-lg">
          {skill}
        </div>
      </div>
    );
  });
};

const SkillsCards = (props) => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="800"
      className="w-[47%] shadow-[0_0_10px_1px_#64FFDA50] rounded-xl border border-primaryColor p-5 md-mx:w-[48%] sm-mx:w-[95%] xs-mx:w-full"
    >
      <div className="text-3xl mb-4 text-white font-bold text-center">
        {props.title}
      </div>
      <div className="flex flex-wrap justify-center gap-3 bs-mx:gap-2 xs-mx:gap-3">
        {SkillBadge(props.skills)}
      </div>
    </div>
  );
};

export default SkillsCards;
