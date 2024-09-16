const Email = () => {
  return (
    <div className="flex items-center gap-6 text-textColor fixed bottom-32 -right-48 rotate-90">
      <a
        href="mailto:work.rohitahirwar@gmail.com"
        className="dm-mono-regular text-lg tracking-widest hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out"
      >
        work.rohitahirwar@gmail.com
      </a>
      <hr className="border-[2px] w-40 rounded-full bg-textColor border-textColor" />
    </div>
  );
};

export default Email;
