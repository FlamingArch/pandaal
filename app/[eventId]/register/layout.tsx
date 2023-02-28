type PageLayoutRegisterProps = {
  children: React.ReactNode;
};

export default function PageLayoutRegister(props: PageLayoutRegisterProps) {
  return (
    <>
      <header className="text-3xl font-bold">
        <h1>Register</h1>
      </header>
      {props.children}
    </>
  );
}
