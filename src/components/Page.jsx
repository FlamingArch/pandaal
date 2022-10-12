const Page = ({ children }) => {
  return (
    <div className="flex flex-col gap-8 p-8 rounded-3xl bg-white max-w-[900px] mx-auto shadow-2xl mb-32">
      {children}
    </div>
  );
};
export default Page;
