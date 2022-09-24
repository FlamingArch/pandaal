import { IconBack } from "./Icons";

const AppBar = ({ heading, children, backFunction, backLabel }) => {
  return (
    <div className="flex flex-col p-6 bg-white backdrop-filter backdrop-blur-lg dark:bg-black bg-opacity-60 dark:bg-opacity-60">
      {backFunction && (
        <div className="cursor-pointer flex flex-row gap-3 fill-[#3F4882] text-[#3F4882] items-center w-fit">
          <div className="rounded-[0.8rem] bg-[#F4F8FD] p-4 w-fit h-fit">
            <IconBack className="w-4 h-4" />
          </div>
          {backLabel && backLabel}
        </div>
      )}
      <div className="flex flex-row">
        <p className="font-bold text-[2rem] flex-grow">{heading}</p>
        {children}
      </div>
    </div>
  );
};
export default AppBar;
