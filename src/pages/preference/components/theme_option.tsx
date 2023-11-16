const ThemeOption = (props: {type: string}): JSX.Element => {
  return (
    <div className="w-full">
      <a
        className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
        href="#"
      >
        <div className=" relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
          <img
            className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
            src={"/" + props.type + ".png/"}
            alt="Image Description"
          />
        </div>
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white self-center">
            {props.type}
          </h3>
        </div>
      </a>
    </div>
  );
};

export default ThemeOption;
