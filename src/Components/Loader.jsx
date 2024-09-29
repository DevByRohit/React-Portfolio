import IconCloud from "./magicui/icon-cloud";
import { Slugs } from "./User";
import { IconHexagon } from "@tabler/icons-react";



export function Loader() {
  return (
    <div className="relative flex h-full w-full items-center justify-center px-20 pb-20 pt-8 animate-[ping_1.5s_ease-in-out_1_4s]">
      <IconCloud iconSlugs={Slugs} />
      <IconHexagon
        className="absolute -z-10 animate-[spin_5s_linear_infinite] xs-mx:mt-10 size-[90px] xs-mx:size-16"
        color={"#64FFDA"}
        stroke={1.8}
      />
      <div className="text-4xl font-mono !text-primaryColor font-extrabold absolute -z-10 xs-mx:mt-10 xs-mx:text-2xl">
        RA
      </div>
    </div>
  );
}
