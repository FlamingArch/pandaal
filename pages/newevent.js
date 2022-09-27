import { AppBar, List, Page, TextField } from "../components-legacy";
import { IconBack } from "../components-legacy/Icons";

export default function PageNewEvent({ backFunction }) {
  return (
    <Page appbar={<AppBar backFunction={backFunction} />}>
      <List.View>
        <List.Heading>Create New Event</List.Heading>
        <List.Section padding="" gap={1}>
          <p className="opacity-80">
            Fill this form to place your event creation request.
          </p>
          <TextField
            Icon={IconBack}
            label="Event Name"
            value={""}
            onChange={function () {}}
          />
          <p className="opacity-80">
            Fill this form to place your event creation request.
          </p>
          <TextField
            Icon={IconBack}
            label="Event Name"
            value={""}
            onChange={function () {}}
          />
        </List.Section>
      </List.View>
    </Page>
  );
}
