import IconCloud from "./magicui/icon-cloud";
import { Slugs } from "./User";
import { IconHexagon } from "@tabler/icons-react";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function Loader() {
  return (
    <div className="relative flex h-full w-full items-center justify-center px-20 pb-20 pt-8 animate-[ping_1.5s_ease-in-out_1_4s]">
      <IconCloud iconSlugs={Slugs} />
      <IconHexagon
        className="absolute -z-10 animate-[spin_5s_linear_infinite]"
        size={90}
        color={"#64FFDA"}
        stroke={1.8}
      />
      <div className="text-4xl font-mono !text-primaryColor font-extrabold absolute -z-10">
        RA
      </div>
    </div>
  );
}
