const Email = () => {
  return (
    <div className="flex md-mx:hidden items-center gap-5 text-textColor fixed bottom-[8rem] right-[-13.5rem] rotate-90 hover:-translate-y-1.5 transition transform duration-300 ease-in-out">
      <div data-aos="fade-down-left" data-aos-duration="800">
        <a
          href="mailto:work.rohitahirwar@gmail.com"
          className="dm-mono-regular text-[1.04rem] tracking-widest hover:text-primaryColor"
        >
          work.rohitahirwar@gmail.com
        </a>
      </div>
      <hr className="border-[1.3px] w-40 rounded-full bg-textColor border-textColor" />
    </div>
  );
};

export default Email;
