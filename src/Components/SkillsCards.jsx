import { Avatar } from "@mantine/core";
const SkillBadge = (skills) => {
  return skills.map((skill, index) => {
    return (
      <div
        key={index}
        className="flex items-center gap-1 border border-textColor rounded-xl px-3 py-2"
      >
        <Avatar
          className="!w-[24px] !p-1"
          variant="filled"
          radius="sm"
          src={`/Icons/${skill}.png`}
        />
        <div className="text-xl text-textColor font-medium">{skill}</div>
      </div>
    );
  });
};

const SkillsCards = (props) => {
  return (
    <div className="w-[49%] rounded-2xl border border-primaryColor p-5">
      <div className="text-3xl mb-4 text-white font-bold text-center">
        {props.title}
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {SkillBadge(props.skills)}
      </div>
    </div>
  );
};

export default SkillsCards;
