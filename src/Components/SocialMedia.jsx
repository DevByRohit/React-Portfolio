import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";

const SocialMedia = () => {
  const socialApps = [
    { link: "https://github.com/DevByRohit", icon: IconBrandGithub },
    { link: "https://leetcode.com/u/rohitverma8270", icon: IconBrandLeetcode },
    { link: "https://linkedin.com/in/07-rohit", icon: IconBrandLinkedin },
    { link: "https://x.com/home", icon: IconBrandTwitterFilled },
  ];

  const socialIcons = socialApps.map((socialLink) => {
    return (
      <a
        href={`${socialLink.link}`}
        target="_blank"
        className="dm-mono-medium hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out"
      >
        <socialLink.icon className="-rotate-90" size={30} />
      </a>
    );
  });
  return (
    <div className="flex items-center gap-8 text-textColor fixed bottom-44 -left-36 rotate-90">
      {socialIcons}
      <hr className="border-[2px] w-40 rounded-full bg-textColor border-textColor" />
    </div>
  );
};

export default SocialMedia;
