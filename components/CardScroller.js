const CardScroller = ({ children, title }) => {
  return (
    <section className="p-6 grid grid-flow-row gap-4">
      <div className="text-2xl">{title}</div>
      <div className="flex flex-row gap-4 overflow-scroll w-screen">
        {children}
      </div>
    </section>
  );
};

export default CardScroller;
