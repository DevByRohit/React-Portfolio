import Info from "./User";

const About = () => {
  return (
    <div className="flex">
      <div>
        <div>Hi, I am</div>
        <div>{Info.name}</div>
        <div>I'm a</div>
        <div>
          I'm a passionate software engineer with a strong foundation in Data
          Structures and Algorithms. I specialize in the MERN stack which allows
          me to crafting efficient and scalable full-stack web applications and
          provide freelance services that exceed client expectations. I am
          always excited to collaborate with others who share the same
          enthusiasm for technology. Let's connect and build something great
          together!
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
