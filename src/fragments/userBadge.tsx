import { useState } from "react";
import { Button } from "../components";
import { AnimatePresence, motion } from "framer-motion";
import { User } from "firebase/auth";
import { IconUser } from "../components/icons";
import { useNavigate } from "@tanstack/router";

export default function userBadge({ user }: { user?: User | null }) {
  const navigate = useNavigate({ from: "/" });
  const [userExpanded, setUserExpanded] = useState(false);

  return (
    <div
      className="flex items-center hover:bg-primary-50 rounded-xl cursor-pointer"
      onClick={() => {
        if (!user) navigate({ to: "signin" });
      }}
      onMouseLeave={() => setUserExpanded(false)}
    >
      <Button
        buttonStyle={user ? "badge" : "emphasisAction"}
        onMouseEnter={() => setUserExpanded(true)}
        Icon={!user ? IconUser : undefined}
      >
        {user ? (
          <>
            <img
              src="https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8aGVhZHNob3R8ZW58MHx8fHwxNjgyMTQ1OTM2&force=true&w=640"
              className="w-12 h-12 object-cover"
            />
          </>
        ) : null}
      </Button>
      <AnimatePresence>
        {userExpanded && (
          <motion.p
            style={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
          >
            <span className="px-4 font-medium">
              {user ? user.displayName?.split(" ")[0] : "Sign In"}
            </span>
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
