import React from "react";
import { AppBar, Button, Input, Page, Scaffold, Text } from "../../components";
import {
  IconEdit,
  IconFeedback,
  IconMail,
  IconPhone,
  IconUser,
} from "../../components/icons";
import { FirebaseContext } from "../../contexts/firebase";
import { BackButton } from "../../fragments";
import { useUserDoc } from "../../hooks";
import profileFemale from "../../assets/profile-female.svg";
import profileMale from "../../assets/profile-male.svg";
import { useNavigate } from "react-router-dom";

export default function PageAccount() {
  const { user, signOut } = React.useContext<any>(FirebaseContext);
  const userDoc = useUserDoc(user.uid);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  React.useEffect(() => {
    setName(user.displayName);
    setEmail(user.email);
    setPhone(user.phoneNumber);
  }, [user]);

  const navigate = useNavigate();

  const handleSubmit = () => {};

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  return (
    <Scaffold appBar={<AppBar leading={<BackButton />} />}>
      <Page padding={8} gap={6}>
        <Text headingLevel={3} bold>
          Edit User Info
        </Text>
        <Text>Change or edit your account information here.</Text>
        <div className="relative self-center rounded-full overflow-clip aspect-square w-36 h-36 bg-primary-500">
          <img
            src={
              userDoc?.imgBmp ?? userDoc?.gender == "male"
                ? profileMale
                : profileFemale
            }
            className="hover:brightness-50 transition-all"
          />
          <div className="transition-all hover:cursor-pointer absolute bg-black top-0 left-0 right-0 bottom-0 opacity-0 hover:opacity-50 grid place-content-center">
            <IconEdit className="fill-white w-12 h-12" />
          </div>
        </div>

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
          placeholder="Email"
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
          <Button className="flex-grow w-full ml-auto" type="primary">
            Save Changes
          </Button>
        </div>
      </Page>
    </Scaffold>
  );
}
