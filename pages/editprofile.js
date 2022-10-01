import Link from "next/link";
import { AppBar, Page } from "../components";
import { List, TextField } from "../legacy/components";
import { IconBack, IconBookings } from "../legacy/components/Icons";

export default function editprofile() {
  return (
    <div className="w-screen h-screen bg-white">
      <Page
        appBar={
          <AppBar
            leading={
              <Link href="/settings">
                <div className="p-4 aspect-square w-fit rounded-[1rem] fill-primary bg-[#c7dbf5] cursor-pointer">
                  <IconBack />
                </div>
              </Link>
            }
          />
        }
      >
        <List.View>
          <List.Heading>Edit User Info</List.Heading>
          <List.Section>
            <div className="pb-4">Edit your profile details here.</div>
            <div className="grid m-6 place-content-center">
              <div className="grid w-32 mb-4 rounded-full cursor-pointer aspect-square bg-primary place-content-end">
                <div className="p-4 bg-white rounded-full shadow-md aspect-square">
                  <IconBack className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 pb-6">
              <TextField Icon={IconBookings} label="Name" />
              <TextField Icon={IconBookings} label="Emails" />
              <TextField Icon={IconBookings} label="Phone" />
            </div>
          </List.Section>
          <List.Section heading={"Your Interests"}>
            <div className="flex flex-row-reverse w-full">
              <button className="font-bold text-pink-400">EDIT</button>
            </div>
          </List.Section>
          <div className="grid p-6 place-content-center">
            <div className="px-12 py-6 rounded-[1.5rem] font-bold text-primary cursor-pointer bg-[#c7dbf5]">
              Save Changes
            </div>
          </div>
        </List.View>
      </Page>
    </div>
  );
}
