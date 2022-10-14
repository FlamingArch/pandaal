import React from "react";
import { Button, Input, Page, Text } from "../components";
import Firebase from "../contexts/Firebase";

export default function PageSignUp({ callback }) {
  const firebase = useContext(Firebase.Context);
  const [title, setTitle] = React.useState("Others");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <Page.Full className="p-6">
      <Text headingLevel={3} bold>
        Seems like you are new here
      </Text>
      <Text headingLevel={4} bold>
        Let us get to know you better
      </Text>
      <Input
        type="choiceAnswer"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      >
        <option value="male">Mr.</option>
        <option value="female">Mrs./Ms.</option>
        <option value="Others">Others</option>
      </Input>

      <Input
        placeholder={"Name"}
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <Input
        type="email"
        placeholder={"Email"}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <Button
        type="primary"
        onClick={() => {
          firebase.createUser(title, name, email);
          callback();
        }}
      >
        continue
      </Button>
    </Page.Full>
  );
}
