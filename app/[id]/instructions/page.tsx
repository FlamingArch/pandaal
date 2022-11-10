import { Text } from "../../../components";
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Link from "next/link";
import constants from "../../../constants";
import { parseHTML } from "../../../helpers";
import { IconBack } from "../../../components/icons";

async function fetchEvent(id: string) {
  const app = initializeApp(constants.firebaseConfig);
  const db = getFirestore(app);

  const docRef = doc(db, "Events", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    /// TODO: Handle event not found
  }
}

export default async function page({ params }: any) {
  const event = await fetchEvent(params.id);

  return (
    <div className="w-screen min-h-screen p-6 flex gap-4 flex-col dark:bg-black dark:text-white">
      <Link
        href={`/${params.id}`}
        className="p-4 rounded-2xl bg-primary-50 w-min dark:bg-primary-800"
      >
        <IconBack className="w-6 h-6 fill-primary-500 dark:fill-primary-200" />
      </Link>
      <Text headingLevel={2} bold>
        How to Register
      </Text>

      <div>{parseHTML(event?.howToRegisterHtmlText)}</div>
      <div className="fixed bottom-0 left-0 right-0 p-12 md:w-1/2 lg:w-1/3 mx-auto transition-all">
        <Link
          href={`/${params.id}/register`}
          className="bg-primary-500 hover:bg-primary-600 shadow-primary-300 dark:shadow-primary-700 shadow-xl hover:shadow-2xl hover:shadow-primary-500 transition-all px-8 py-4 grid place-content-center text-white rounded-2xl hover:scale-105"
        >
          Continue
        </Link>
      </div>
    </div>
  );
}
