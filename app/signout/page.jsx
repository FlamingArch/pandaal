import { initializeApp } from "@firebase/app";
import constants from "../../constants";
import { signOut, getAuth } from "firebase/auth";
import Link from "next/link";
import { Text } from "../../components";

export default function () {
  const app = initializeApp(constants.firebaseConfig);
  const auth = getAuth(app);
  signOut(auth);

  return (
    <div className="w-screen h-screen grid place-content-center dark:bg-black dark:text-white gap-4">
      <Text headingLevel={4} bold>
        pandaal
      </Text>
      <Text headingLevel={2}>Signed out</Text>
      <div className="flex gap-4">
        <Link
          href="/signin"
          className="grid place-content-center bg-primary-500 px-8 py-2 rounded-xl"
        >
          Sign in
        </Link>
        <Link
          href="/"
          className="grid place-content-center bg-white text-primary-500 dark:text-primary-300 dark:bg-[#222] px-8 py-2 rounded-xl"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
