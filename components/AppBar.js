const AppBar = ({ heading, children }) => {
  return (
    <div className="flex flex-row p-6 bg-white backdrop-filter backdrop-blur-lg dark:bg-black bg-opacity-60 dark:bg-opacity-60">
      <p className="font-bold text-[2rem] flex-grow">{heading}</p>
      {children}
    </div>
  );
};
export default AppBar;
