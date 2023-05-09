import { useNavigate } from "@tanstack/router";
import React from "react";
import { Button } from "../components";
import { User } from "firebase/auth";

export default function userCard({ user }: { user: User }) {
  const navigate = useNavigate();

  return (
    <div className="flex shadow-xl rounded-2xl overflow-hidden">
      <img
        src="https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8aGVhZHNob3R8ZW58MHx8fHwxNjgyMTQ1OTM2&force=true&w=640"
        className="w-48 aspect-square object-cover"
      />
      <div className="flex flex-col p-6 flex-grow">
        <div className="flex flex-col justify-center flex-grow p-4 pb-8  gap-1">
          <p className="text-xl font-medium">
            {user?.displayName ?? "User Not Signed In"}
          </p>
          <p>{user?.phoneNumber ?? "Phone Number Not Linked"}</p>
          <p>{user?.email ?? "Email Not Linked"}</p>
        </div>
        <div className="flex-row-reverse flex">
          <Button
            label="Switch Accounts"
            onClick={() => navigate({ to: "/signin" })}
          />
        </div>
      </div>
    </div>
  );
}
