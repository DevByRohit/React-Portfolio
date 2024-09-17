import { SkillInfo } from "./User";
import SkillsCards from "./SkillsCards";
const Skills = () => {
  return (
    <div className="mx-20 my-10 font-mono">
      <h1 className="text-4xl text-center mb-10 text-white font-bold">
        <span className="text-primaryColor">03.&nbsp;</span>
        Skills
      </h1>
      <div className="flex flex-wrap gap-5 justify-between">
        {SkillInfo.map((skill, index) => {
          return (
            <SkillsCards
              key={index}
              title={skill.title}
              skills={skill.skills}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
