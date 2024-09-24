import Typewriter from "typewriter-effect";
import DOTS from "vanta/src/vanta.dots";
import TRUNK from "vanta/src/vanta.trunk";
import { Button, useMatches } from "@mantine/core";
import Info from "./User";
import { useEffect, useState } from "react";
import ResumeViewer from "./ResumeViewer";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload } from "@tabler/icons-react";
import Particles from "./magicui/Particles";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

const About = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [dots, setDots] = useState(null);
  const [trunk, setTrunk] = useState(null);
  const btn = useMatches({
    xs: "md",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

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
    <>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="800"
        className="mt-[6.5rem] flex relative justify-around items-center overflow-hidden py-10 h-fit dm-mono-regular lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-5 xs-mx:p-0"
      >
        {/* id="bg" for 3D background */}
        <Particles
          className="absolute inset-0 -z-20"
          quantity={1100}
          ease={80}
          color={"64FFDA"}
          vx={0.2}
          vy={0.2}
          refresh
        />
        <div className="ml-16 w-[61%] flex flex-col lg-mx:gap-3 bs-mx:items-center bs-mx:ml-0 bs-mx:w-[85%] sm-mx:gap-2 xs-mx:w-[95%]">
          <div className="text-primaryColor text-3xl font-bold font-mono lg-mx:text-2xl sm-mx:text-2xl xs-mx:text-2xl xsm-mx:text-lg">
            Hi, I am
          </div>
          <div className="text-white text-[4.1rem] font-extrabold lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xsm-mx:text-[27px]">
            {Info.name}
          </div>
          <div className="text-white text-4xl flex font-mono font-bold lg-mx:text-[29px] sm-mx:text-[23px] xs-mx:text-[20px] xsm-mx:text-[17px]">
            I'm a&nbsp;
            <span className="text-primaryColor font-mono font-extrabold xs-mx:font-bold">
              <Typewriter
                options={{
                  strings: Info.stack,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className="text-textColor text-xl text-justify dm-mono-regular font-extrabold my-6 w-[95%] lg-mx:text-base lg-mx:font-semibold lg-mx:my-0 sm-mx:my-0 xs-mx:text-lg xs-mx:font-medium">
            {Info.bio}
          </div>
          <div className="flex gap-3 xs-mx:w-full xs-mx:p-3 xs-mx:justify-around">
            <Button
              variant="filled"
              color="#64FFDA"
              size={btn}
              radius={"xl"}
              className="!text-bgColor !w-fit xs-mx:text-base focus-visible:!outline-none"
              onClick={open}
            >
              Check Resume
            </Button>

            <Button
              variant="outline"
              color="#64FFDA"
              size={btn}
              radius={"xl"}
              className="!text-primaryColor !w-fit xs-mx:text-base focus-visible:!outline-none"
              rightSection={<IconDownload size={20} />}
              component="a"
              href="/resume.pdf"
              download={Info.name}
            >
              Download
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center h-fit w-fit rounded-full mr-12 bs-mx:-mr-5">
          {/* id="photo" for 3D background */}
          <NeonGradientCard className="w-[19.7rem] h-[19rem] items-center justify-center text-center lg-mx:w-[17rem] lg-mx:h-[16.5rem] lg-mx:mr-4 xsm-mx:w-[14rem] xsm-mx:h-[13.5rem]">
            <img
              src="./rohitImage.png"
              alt="profile"
              className="w-full h-full rounded-full"
            />
          </NeonGradientCard>
        </div>
      </div>
      <ResumeViewer opened={opened} close={close} />
    </>
  );
};

export default About;
