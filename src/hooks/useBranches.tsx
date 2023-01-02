import React from "react";
import { FirebaseContext } from "../contexts/firebase";

export default function useBranches(course: string) {
  const [branches, setBranches] = React.useState<any>();
  const { fetchDoc } = React.useContext<any>(FirebaseContext);

  React.useEffect(() => {
    fetchDoc("appData/collegeDetails").then((e: any) => {
      console.log("FETCHED BRANCHES: ", e[course]?.branch);
      setBranches(e[course]?.branch ?? []);
    });
  }, []);

  return branches;
}
