import React from "react";
import { AppBar, Button, Input, Page, Scaffold, Text } from "../../components";
import {
  IconBack,
  IconMail,
  IconPhone,
  IconPreloader,
  IconUser,
} from "../../components/icons";
import { FirebaseContext } from "../../contexts/firebase";
import profileFemale from "../../assets/profile-female.svg";
import profileMale from "../../assets/profile-male.svg";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import constants from "../../constants";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import illustration from "../../assets/queue.svg";

export default function PageAccount() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [text, setText] = React.useState("Save Changes");

  const { user, signOut } = React.useContext<any>(FirebaseContext);

  const app = initializeApp(constants.firebaseConfig);
  const firestore = getFirestore(app);
  const [userDoc, setUserDoc] = React.useState<any>(null);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      const ref = doc(firestore, "users", user.uid);
      getDoc(ref)
        .then((doc) => {
          if (doc.exists()) setUserDoc(doc.data());
          else navigate("/signup");
        })
        .catch((e) => {
          setUserDoc({ name: user.displayName });
        });
    }
  }, [user]);

  React.useEffect(() => {
    if (userDoc) {
      if (!(userDoc.name || userDoc.email)) {
        navigate("/signup");
      }
      setName(userDoc.name);
      setEmail(userDoc.email);
      setPhone(userDoc.phoneNumber);
    }
  }, [userDoc]);

  const handleSubmit = () => {
    const ref = doc(firestore, "users", user.uid);
    setDoc(ref, { name: name, email: email }, { merge: true });
    setText("Saved!");
    setTimeout(() => setText("Save Changes"), 1000);
  };

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  if (!userDoc) {
    return (
      <div className="w-screen h-screen flex gap-4 items-center justify-center">
        <IconPreloader className="w-8 h-8 stroke-gray-500" />
        <p className="text-gray-500 text-xl"> Loading</p>
      </div>
    );
  }

  return (
    <Scaffold
      leading={
        <div className="relative bg-primary-50 grid place-content-center mb-24">
          <div className="absolute w-[80vw] max-h-full lg:w-[40vw] md:w-[60vw] inset-0 grid place-content-center mx-auto p-6 transition-all">
            <img src={illustration} className="max-h-full" />
          </div>
          <Page responsive padding={8} margin={{ bottom: 20, top: 30 }}>
            <div className="relative self-center rounded-full overflow-clip aspect-square w-36 h-36 bg-primary-500 translate-y-44 items-start mr-auto shadow-xl">
              <img
                src={
                  userDoc?.imgBmp ?? userDoc?.gender == "male"
                    ? profileMale
                    : profileFemale
                }
              />
            </div>
          </Page>
        </div>
      }
      appBar={
        <AppBar
          background="clear"
          leading={
            <Button
              type="primary"
              onClick={() => navigate("/")}
              leading={<IconBack className="w-6 h-6" />}
            />
          }
        />
      }
    >
      <Page padding={8} gap={6} responsive className="pt-20">
        <Text headingLevel={3} bold>
          Edit User Info
        </Text>
        <Text>Change or edit your account information here.</Text>

        <Input
          placeholder="Name"
          leading={<IconUser className="w-6 h-6 fill-primary-500 ml-4" />}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          leading={<IconMail className="w-6 h-6 fill-primary-500 ml-4" />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Phone Number"
          className="opacity-50"
          leading={<IconPhone className="w-6 h-6 fill-primary-500 ml-4" />}
          value={phone}
          onChange={(e) => {}}
        />
        <div className="flex gap-4">
          <Button
            className="flex-grow w-full ml-auto"
            type="secondary"
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
          <Button
            onClick={handleSubmit}
            className="flex-grow w-full ml-auto"
            type="primary"
          >
            {text}
          </Button>
        </div>
      </Page>
    </Scaffold>
  );
}

// className="hover:brightness-50 transition-all"

{
  /* <div className="transition-all hover:cursor-pointer absolute bg-black top-0 left-0 right-0 bottom-0 opacity-0 hover:opacity-50 grid place-content-center">
            <IconEdit className="fill-white w-12 h-12" />
          </div> */
}
