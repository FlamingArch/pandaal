import { useNavigate } from "react-router-dom";
import { Button } from "../components";
import { User } from "firebase/auth";
import { IconUser } from "../components/icons";

export default function userCard({ user }: { user: User }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex bg-primary-50 gap-6 rounded-3xl overflow-hidden p-4">
        <img
          src="https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8aGVhZHNob3R8ZW58MHx8fHwxNjgyMTQ1OTM2&force=true&w=640"
          className="w-24 h-fit rounded-2xl max-w-[50%] aspect-square object-cover"
        />
        <div className="flex flex-grow">
          <div className="flex flex-col justify-center flex-grow gap-1">
            <p className="text-lg font-medium">
              {user?.displayName ?? "User Not Signed In"}
            </p>
            <p className="text-sm">
              {user?.phoneNumber ?? "Phone Number Not Linked"}
            </p>
            <p className="text-sm">{user?.email ?? "Email Not Linked"}</p>
          </div>
        </div>
      </div>
      <Button
        Icon={IconUser}
        label="Switch Accounts"
        onClick={() => navigate("/signin")}
      />
    </>
  );
}
