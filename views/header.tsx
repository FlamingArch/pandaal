import Header from "@/components/header";

export default function ViewHeader() {
  const placeholderProfilePicture =
    "https://unsplash.com/photos/p9tCx5hQZ9U/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzIyNTA5Mzg1fA&force=true&w=640";
  const branding = (
    <p className=" text-base font-bold text-branding-500">pandaal</p>
  );
  return (
    <Header
      branding={branding}
      leading={<div />}
      trailing={
        <img
          src={placeholderProfilePicture}
          className="w-12 h-12 object-cover rounded-xl"
        />
      }
    >
      <nav></nav>
    </Header>
  );
}
