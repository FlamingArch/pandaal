import React from "react";
import { FirebaseContext } from "../contexts/firebase";

export default function useCourses() {
  const [courses, setCourses] = React.useState<any>();
  const { fetchDoc } = React.useContext<any>(FirebaseContext);

  React.useEffect(() => {
    fetchDoc("appData/collegeDetails").then((e: any) => {
      setCourses(e?.courses ?? {});
    });
  }, []);

  return courses;
}
