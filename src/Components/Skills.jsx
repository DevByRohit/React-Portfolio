import { SkillInfo } from "./User";
import SkillsCards from "./SkillsCards";
const Skills = () => {
  return (
    <div className="px-[4rem] my-14 font-mono md-mx:px-8 xs-mx:px-3" id="Skills">
      <h1 className="text-4xl text-center mb-10 text-white font-bold sm-mx:text-3xl xs-mx:text-3xl">
        <span className="text-primaryColor">03.&nbsp;</span>
        Skills
      </h1>
      <div className="flex flex-wrap gap-10 justify-around md-mx:justify-between sm-mx:justify-center bs-mx:gap-5 xs-mx:gap-8">
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
