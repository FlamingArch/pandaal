import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Branding,
  Button,
  Input,
  Page,
  Scaffold,
  Text,
} from "../../components";
import { IconMail, IconUser } from "../../components/icons";
import { FirebaseContext } from "../../contexts/firebase";
import { userDocExists } from "../../functions";
import { useCollegeDetails, useCourses, useBranches } from "../../hooks";

export default function PageSignUp() {
  const { user, firestore } = React.useContext<any>(FirebaseContext);
  const [response, setResponse] = React.useState({
    name: "",
    gender: "",
    email: "",
    occupation: "",
    collegeName: "",
    course: "",
    interest: [],
    branch: "",
    year: null,
    uid: user.uid,
    phoneNumber: user.phoneNumber,
    created: serverTimestamp(),
  });
  const [loading, setLoading] = React.useState(true);
  const collegeDetails = useCollegeDetails();
  const courses = useCourses();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path ?? "/";

  React.useEffect(() => {
    userDocExists(firestore, user.uid).then((e) => {
      console.log(`USERDOC EXISTS: ${e}`);
      if (e) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  }, []);

  const handleSubmit = (e: any) => {
    e?.preventDefault();
    const docRef = doc(firestore, "users", user.uid);
    setDoc(docRef, response, { merge: true }).then(() => {
      navigate(redirectPath);
    });
  };

  const range = (start: number, end: number) => {
    return Array(end - start + 1)
      .fill(0)
      .map((_, idx) => start + idx);
  };

  return loading ? (
    <Scaffold>
      <Text headingLevel={1} bold>
        "Loading..."
      </Text>
    </Scaffold>
  ) : (
    <Scaffold appBar={<AppBar title={<Branding />} backdrop="material" />}>
      <Page padding={6} gap={4} responsive>
        <Text bold headingLevel={3}>
          Seems Like You Are New Here
        </Text>

        <Text headingLevel={4}>Let us get to know you better</Text>

        <Text headingLevel={6}>Gender</Text>
        <Input
          value={response.gender}
          onChange={(e) => setResponse({ ...response, gender: e.target.value })}
          type="select"
          className="p-4"
        >
          <option value="male">Mr.</option>
          <option value="female">Ms./Mrs.</option>
          <option value="other">Other</option>
        </Input>

        <Input
          value={response.name}
          onChange={(e) => setResponse({ ...response, name: e.target.value })}
          leading={<IconUser className="w-6 h-6 fill-primary-500" />}
          placeholder="Name"
          className="mt-4"
        />

        <Input
          value={response.email}
          type="email"
          onChange={(e) => setResponse({ ...response, email: e.target.value })}
          leading={<IconMail className="w-6 h-6 fill-primary-500" />}
          placeholder="Email"
        />

        <Text headingLevel={4} bold>
          Occupation
        </Text>

        <Input
          value={response.occupation}
          onChange={(e) =>
            setResponse({ ...response, occupation: e.target.value })
          }
          className="p-4"
          placeholder="Occupation"
          type="select"
        >
          <option value="Student">Student</option>
          <option value="Teacher">Teacher/Professor</option>
          <option value="Working">Working Professional</option>
          <option value="other">Other</option>
        </Input>
        {(response.occupation === "Student" ||
          response.occupation === "Teacher") && (
          <>
            <Text headingLevel={4} bold>
              Details
            </Text>

            <Text headingLevel={6}>College Name</Text>
            <Input
              value={response.collegeName}
              onChange={(e) =>
                setResponse({ ...response, collegeName: e.target.value })
              }
              type="select"
              placeholder="College Name"
              className="p-4"
            >
              {collegeDetails.map(
                (college: any) =>
                  college.isactive && <option>{college.name}</option>
              )}
            </Input>

            <Text headingLevel={6}>Course</Text>
            <Input
              value={response.course}
              onChange={(e) =>
                setResponse({ ...response, course: e.target.value })
              }
              type="select"
              placeholder="College Name"
              className="p-4"
            >
              {Object.keys(courses).map((college: any) => (
                <option key={college} value={college}>
                  {college}
                </option>
              ))}
            </Input>

            {(courses[response.course]?.branch ?? []).length > 0 && (
              <>
                <Text headingLevel={6}>Branch</Text>
                <Input
                  value={response.branch}
                  onChange={(e) =>
                    setResponse({ ...response, branch: e.target.value })
                  }
                  type="select"
                  placeholder="Branch"
                  className="p-4"
                >
                  {(courses[response.course] ?? []).branch.map(
                    (branch: any) => (
                      <option value={branch} key={branch}>
                        {branch}
                      </option>
                    )
                  )}
                </Input>
              </>
            )}

            {response.occupation == "Student" && (
              <>
                <Text headingLevel={6}>Year</Text>
                <Input
                  value={response.year}
                  onChange={(e) =>
                    setResponse({ ...response, year: e.target.value })
                  }
                  type="select"
                  placeholder="College Name"
                  className="p-4"
                >
                  {range(1, courses[response.course]?.years ?? []).map(
                    (year: any) => (
                      <option value={year} key={year}>
                        {year}
                      </option>
                    )
                  )}
                </Input>
              </>
            )}
          </>
        )}

        <Button
          className="w-96 mx-auto mt-6"
          onClick={() => handleSubmit()}
          disabled={
            !(
              response.gender &&
              response.name &&
              response.email &&
              response.occupation
            )
          }
        >
          Continue
        </Button>
      </Page>
    </Scaffold>
  );
}
