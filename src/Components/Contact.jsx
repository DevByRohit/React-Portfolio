import { useState } from "react";
import FloatingInput from "./FloatingInput";
import { Button } from "@mantine/core";
import { IconArrowRight, IconTopologyStar3 } from "@tabler/icons-react";

const Contact = () => {
  const form = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(form);
  const handleChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };
  return (
    <div
      data-aos="flip-left"
      data-aos-duration="800"
      className="my-10 font-mono xs-mx:px-3 md-mx:px-8"
    >
      <h1 className="text-4xl text-center mb-10 text-white font-bold xs-mx:text-3xl">
        <span className="text-primaryColor">03.&nbsp;</span>
        Contact
      </h1>
      <div className="flex flex-col gap-6 w-[60%] shadow-[0_0_10px_0_#64FFDA50] m-auto border border-primaryColor rounded-3xl p-8 md-mx:w-[90%] md-mx:p-5 xs-mx:p-5 xs-mx:w-full xs-mx:gap-5 xs-mx:rounded-xl">
        <div className="flex gap-3 items-center text-3xl text-white font-semibold xs-mx:text-2xl xs-mx:font-bold">
          Let's Connect
          <IconTopologyStar3 className="w-10 h-10 text-primaryColor sm-mx:w-8 sm-mx:h-8" />
        </div>
        <FloatingInput
          id="name"
          name="Name"
          value={formData.name}
          handleChange={handleChange}
        />
        <FloatingInput
          id="email"
          name="Email"
          value={formData.email}
          handleChange={handleChange}
        />
        <FloatingInput
          id="phone"
          name="Phone Number"
          value={formData.phone}
          handleChange={handleChange}
        />
        <FloatingInput
          id="message"
          name="Message"
          value={formData.message}
          handleChange={handleChange}
        />
        <Button
          fullWidth
          variant="filled"
          size={"lg"}
          radius={"lg"}
          rightSection={<IconArrowRight size={20} />}
          color="#64FFDA"
          className="!text-bgColor !font-bold !text-2xl xs-mx:!text-xl"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Contact;