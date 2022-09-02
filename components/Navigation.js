export const NavigationItem = ({ Icon, label, active }) => {
  return (
    <div className="flex flex-row p-4 text-xl cursor-pointer place-items-center font-medium gap-4">
      <Icon
        className={"w-8 h-8 " + (active ? "fill-blue-700" : "fill-gray-700")}
      />
      <p
        className={
          "font-medium text-xl " + (active ? "text-blue-700" : "text-gray-700")
        }
      >
        {label}
      </p>
    </div>
  );
};

export const NavigationSelector = ({ children }) => {
  return (
    <div className="bg-blue-50 flex flex-col p-4 rounded-[2rem] m-6">
      {children}
    </div>
  );
};
