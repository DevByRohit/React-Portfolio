const FloatingInput = (props) => {
  return (
    <div>
      <div className="relative">
        {props.id != "message" ? (
          <input
            type="text"
            id={props.id}
            value={props.value}
            onChange={(e) => props.handleChange(props.id, e.target.value)}
            className="block px-2.5 pb-2.5 pt-4 w-full text-xl sm-mx:text-lg xs-mx:text-base xs-mx:rounded-lg sm-mx:rounded-lg rounded-xl text-white bg-transparent border border-gray-300 appearance-none hover:shadow-[0_0_8px_0_#64FFDA70] focus:outline-none focus:ring-0 focus:border-primaryColor peer"
            placeholder=""
          />
        ) : (
          <textarea
            id={props.id}
            value={props.value}
            onChange={(e) => props.handleChange(props.id, e.target.value)}
            name={props.id}
            rows={5}
            className="block px-2.5 pb-2.5 pt-4 w-full text-xl rounded-xl text-white bg-transparent border border-gray-300 appearance-none hover:shadow-[0_0_8px_0_#64FFDA70] focus:outline-none focus:ring-0 focus:border-primaryColor peer sm-mx:text-lg xs-mx:text-base"
            placeholder=""
          ></textarea>
        )}
        <label
          htmlFor={props.id}
          className={`absolute text-xl text-textColor dark:text-gray-400 duration-300 transform -translate-y-4 scale-100 top-1 z-10 origin-[0] bg-bgColor px-2 peer-focus:px-2 peer-focus:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 ${
            props.id != "message"
              ? "peer-placeholder-shown:top-1/2"
              : "peer-placeholder-shown:top-6"
          } peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 sm-mx:text-lg xs-mx:text-base`}
        >
          {props.name}
        </label>
      </div>
      {props.error && (
        <div className="text-red-500 sm-mx:text-sm xs-mx:text-xs  ml-1 mt-1">
          {props.error}
        </div>
      )}
    </div>
  );
};

export default FloatingInput;
