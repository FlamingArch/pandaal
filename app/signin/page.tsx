"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Otp from "./otp";
import SignIn from "./signIn";

export default function page() {
  const router = useRouter();

  const [page, setPage] = useState(0);

  if (page === 0) {
    return <SignIn setPage={setPage} />;
  } else if (page === 1) {
    return <Otp callback={() => setPage(2)} />;
  } else {
    router.push("/");
    return null;
  }
}
