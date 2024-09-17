import Typewriter from "typewriter-effect";
import DOTS from "vanta/src/vanta.dots";
import TRUNK from "vanta/src/vanta.trunk";
import { Button } from "@mantine/core";
import Info from "./User";
import { useEffect, useState } from "react";

const About = () => {
  // useEffect(() => {
  //   TRUNK({
  //     el: "#vanta",
  //   });
  // }, []);
  const [dots, setDots] = useState(null);
  const [trunk, setTrunk] = useState(null);

  useEffect(() => {
    if (!dots) {
      setDots(
        DOTS({
          el: "#bg",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          showLines: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x64ffda,
          color2: 0x204aff,
          backgroundColor: 0x112240,
          size: 3,
          spacing: 30,
        })
      );
    }
    if (!trunk) {
      setTrunk(
        TRUNK({
          el: "#photo",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x64ffda,
          backgroundColor: 0x112240,
          spacing: 0,
          chaos: 4.0,
        })
      );
    }
    return () => {
      if (dots) dots.destroy();
      if (trunk) trunk.destroy();
    };
  }, []);

  return (
    <div
      className="flex justify-around items-center overflow-hidden mt-9 h-[80vh] dm-mono-regular"
      id="bg"
    >
      <div className="ml-16 w-[61%] flex flex-col">
        <div className="text-primaryColor text-3xl font-bold font-mono">Hi, I am</div>
        <div className="text-white text-[4.1rem] font-extrabold">
          {Info.name}
        </div>
        <div className="text-white text-4xl flex font-mono font-bold">
          I'm a&nbsp;
          <span className="text-primaryColor font-mono font-extrabold">
            <Typewriter
              options={{
                strings: Info.stack,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <div className="text-textColor text-xl text-justify dm-mono-regular font-bold my-6 w-[95%]">
          {Info.bio}
        </div>
        <Button
          variant="filled"
          color="#64FFDA"
          size="lg"
          className="!text-bgColor !w-fit"
          component="a"
          href="https://github.com/DevByRohit"
          target="_blank"
        >
          Check resume
        </Button>
      </div>
      <div
        className="flex justify-center items-center h-[50vh] w-[24vw] overflow-hidden rounded-full mr-10"
        id="photo"
      >
        <img
          src="./rohitImage.png"
          alt="profile"
          className="w-[90%] rounded-full shadow-xl"
        />
      </div>
    </div>
  );
};

export default About;
