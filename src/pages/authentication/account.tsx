import React from "react";
import { AppBar, Input, Page, Scaffold, Text } from "../../components";
import {
  IconEdit,
  IconFeedback,
  IconMail,
  IconPhone,
  IconUser,
} from "../../components/icons";
import { FirebaseContext } from "../../contexts/firebase";
import { BackButton } from "../../fragments";

export default function PageAccount() {
  const { user } = React.useContext<any>(FirebaseContext);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  React.useEffect(() => {
    setName(user.displayName);
    setEmail(user.email);
    setPhone(user.phoneNumber);
  }, [user]);

  const handleSubmit = () => {};

  return (
    <Scaffold appBar={<AppBar leading={<BackButton />} />}>
      <Page padding={8} gap={6}>
        <Text headingLevel={3} bold>
          Edit User Info
        </Text>
        <Text>Change or edit your account information here.</Text>
        <div className="relative self-center rounded-full overflow-clip aspect-square w-36 h-36">
          <img
            src={"https://source.unsplash.com/random"}
            className="hover:brightness-50 transition-all"
          />
          <div className="transition-all hover:cursor-pointer absolute bg-black top-0 left-0 right-0 bottom-0 opacity-0 hover:opacity-50 grid place-content-center">
            <IconEdit className="fill-white w-12 h-12" />
          </div>
        </div>

        <div className="flex flex-col w-full max-w-lg gap-6 mx-auto">
          <Input
            placeholder="Name"
            leading={<IconUser className="w-6 h-6 fill-primary-500" />}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Email"
            leading={<IconMail className="w-6 h-6 fill-primary-500" />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Email"
            className="opacity-50"
            leading={<IconPhone className="w-6 h-6 fill-primary-500" />}
            value={phone}
            onChange={(e) => {}}
          />
          <div className="rounded-xl p-4 bg-primary-50 grid place-content-center cursor-pointer hover:fill-primary-500 hover:text-primary-500 grid-flow-col gap-2">
            <IconFeedback className="w-6 h-6" />
            Save Changes
          </div>
        </div>
      </Page>
    </Scaffold>
  );
}
