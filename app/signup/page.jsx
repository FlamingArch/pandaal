"use client";

import React from "react";
import { Input, Text } from "../../components";
import { IconDiversity, IconMail, IconUser } from "../../components/icons";
import { initializeApp } from "firebase/app";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import constants from "../../constants";
import _ from "lodash";

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function () {
  const app = initializeApp(constants.firebaseConfig);
  const auth = getAuth(app);
  const [user, loading] = useAuthState(auth);

  const db = getFirestore(app);
  const router = useRouter();

  const [collegeDetails, setCollegeDetails] = React.useState({});

  React.useEffect(() => {
    if (!loading) {
      if (!auth.currentUser) {
        router.push("/signin");
      }
      const ref = doc(db, "users", auth.currentUser.uid);
      getDoc(ref).then((doc) => {
        if (doc.exists()) {
          router.push("/");
        }
      });
      const collegeListRef = doc(db, "appData", "collegeDetails");
      getDoc(collegeListRef).then((doc) => {
        console.log(doc.data());
        setCollegeDetails(doc.data());
      });
    }
  }, [user]);

  const [response, setResponse] = React.useState({
    email: "",
    gender: "",
    interest: [],
    name: "",
    occupation: "",
    registrations: {},
  });
  const [disable, setDisable] = React.useState(true);

  const onOccupationChange = (newOccupation) => {
    if (
      response.occupation != "Teacher/Professor" ||
      response.occupation != "Student"
    ) {
      setResponse(_.omit(response, "collegeName"));
      setResponse(_.omit(response, "course"));
      setResponse(_.omit(response, "branch"));
      setResponse({ ...response, occupation: newOccupation });
    }
    if (response.occupation == "Teacher/Professor") {
      setResponse(_.omit(response, "year"));
      setResponse({ ...response, occupation: newOccupation });
    }
  };

  React.useEffect(() => {
    console.log(response);
    if (
      response.name &&
      response.gender &&
      response.occupation &&
      response.email.match(emailRegex)
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [response]);

  if (loading) {
    return (
      <div className="w-screen min-h-screen flex flex-col dark:bg-black dark:text-white gap-8 p-10">
        <Text headingLevel={4} bold>
          Loading...
        </Text>
      </div>
    );
  }

  const handleSubmit = () => {
    if (!loading) {
      if (!auth.currentUser) {
        router.push("/signin");
      }
      const ref = doc(db, "users", auth.currentUser.uid);
      getDoc(ref).then((doc) => {
        if (doc.exists()) {
          router.push("/");
        }
      });
    }
    const ref = doc(db, "users", auth.currentUser.uid);
    setDoc(ref, {
      ...response,
      created: serverTimestamp(),
      phoneNumber: auth.currentUser.phoneNumber,
      uid: auth.currentUser.uid,
    });
    router.push("/");
  };

  return (
    <div className="w-screen min-h-screen flex flex-col dark:bg-black dark:text-white gap-8 p-10">
      <div className="">
        <Text headingLevel={2} bold>
          Seems Like You Are New Here
        </Text>
        <Text headingLevel={3}>Let us get to know you better</Text>
      </div>
      <Input
        placeholder="Prefix"
        type="select"
        leading={
          <IconDiversity className="w-6 h-6 fill-primary-500 dark:fill-primary-300" />
        }
        onChange={(e) => {
          setResponse({
            ...response,
            gender:
              e.target.value == "Mr"
                ? "male"
                : e.target.value == "Mrs" || e.target.value == "Ms"
                ? "female"
                : (e.target.value = "Others" ? "others" : ""),
          });
        }}
      >
        <option>Mr</option>
        <option>Mrs</option>
        <option>Ms</option>
        <option>Others</option>
      </Input>
      <Input
        type="text"
        placeholder="Name"
        leading={
          <IconUser className="w-6 h-6 fill-primary-500 dark:fill-primary-300" />
        }
        onChange={(e) => {
          setResponse({ ...response, name: e.target.value });
        }}
      />
      <Input
        type="email"
        placeholder="Email"
        leading={
          <IconMail className="w-6 h-6 fill-primary-500 dark:fill-primary-300" />
        }
        onChange={(e) => {
          setResponse({ ...response, email: e.target.value });
        }}
      />
      <Text headingLevel={3} bold>
        Occupation
      </Text>

      <Input
        placeholder="Prefix"
        type="select"
        leading={
          <IconDiversity className="w-6 h-6 fill-primary-500 dark:fill-primary-300" />
        }
        onChange={(e) => {
          onOccupationChange(e.target.value);
        }}
      >
        <option>Student</option>
        <option>Teacher/Professor</option>
        <option>Working Professional</option>
        <option>Others</option>
      </Input>
      {(response.occupation === "Student" ||
        response.occupation === "Teacher/Professor") && (
        <Input
          type="select"
          placeholder="Year"
          leading={
            <IconUser className="w-6 h-6 fill-primary-500 dark:fill-primary-300" />
          }
          onChange={(e) => {
            setResponse({ ...response, collegeName: e.target.value });
          }}
        >
          {collegeDetails.collegeNames.map((college) => (
            <option key={college.name}>{college.name}</option>
          ))}
        </Input>
      )}
      {(response.occupation === "Student" ||
        response.occupation === "Teacher/Professor") && (
        <Input
          type="select"
          placeholder="Year"
          leading={
            <IconUser className="w-6 h-6 fill-primary-500 dark:fill-primary-300" />
          }
          onChange={(e) => {
            setResponse({ ...response, course: e.target.value });
          }}
        >
          {Object.keys(collegeDetails.courses).map((course) => (
            <option key={course}>{course}</option>
          ))}
        </Input>
      )}
      {response.occupation === "Student" && (
        <Input
          type="number"
          placeholder="Year"
          leading={
            <IconUser className="w-6 h-6 fill-primary-500 dark:fill-primary-300" />
          }
          onChange={(e) => {
            setResponse({ ...response, year: e.target.value });
          }}
        />
      )}
      <button
        disabled={disable}
        onClick={handleSubmit}
        className="rounded-2xl text-white pt-[auto] p-4 grid place-content-center shadow-xl hover:shadow-2xl shadow-primary-300 dark:shadow-primary-700 hover:shadow-primary-500 cursor-pointer hover:bg-primary-700 bg-primary-500 disabled:shadow-none disabled:opacity-60 disabled:hover:bg-primary-500 disabled:cursor-not-allowed"
      >
        Submit
      </button>
    </div>
  );
}

// TODO: Missing Branch
// TODO: Clear Values on change of Occupation
