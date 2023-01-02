import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { FirebaseContext } from "../contexts/firebase";
export default function useCollegeDetails() {
  const [collegeNames, setCollegeNames] = React.useState<any>([]);
  const { fetchDoc } = React.useContext<any>(FirebaseContext);

  React.useEffect(() => {
    // const ref = doc(firestore, "appData", "collegeDetails");
    // getDoc(ref)
    //   .then((e) => {
    //     setCollegeNames(e.data()?.collegeNames ?? []);
    //   })
    //   .catch((e) => {
    //     console.error(`ERROR: Error fetching College Names:\n${e}`);
    //   });
    fetchDoc("appData/collegeDetails").then((e: any) => {
      setCollegeNames(e?.collegeNames ?? []);
    });
  }, []);

  return collegeNames;
}
