const Email = () => {
  return (
    <div className="flex items-center gap-5 text-textColor fixed bottom-[8rem] right-[-13rem] rotate-90">
      <a
        href="mailto:work.rohitahirwar@gmail.com"
        className="dm-mono-regular text-[1.04rem] tracking-widest hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out"
      >
        work.rohitahirwar@gmail.com
      </a>
      <hr className="border-[1.3px] w-40 rounded-full bg-textColor border-textColor" />
    </div>
  );
};

export default Email;
