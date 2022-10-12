const Scaffold = ({ children, backdropImage }) => {
  return (
    <div className="w-screen p-8 grid gap-8">
      <img
        src={backdropImage}
        className="fixed top-0 left-0 w-screen h-screen object-cover -z-10 blur-xl scale-110"
      />
      {children}
    </div>
  );
};

export default Scaffold;
