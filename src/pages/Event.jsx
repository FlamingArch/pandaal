import React from "react";
import _ from "lodash";
import { Scaffold, Page, Button, Modal } from "../components";
import {
  ImageTile,
  DisplayBasicInfo,
  DisplayLocation,
  DisplayTime,
  FavouriteTile,
} from "../fragments";
import { Parser } from "html-to-react";
import { PageEventRegistration, PageEventRegistrationInstructions } from ".";

import FirebaseIntegration from "../components/Firebase";

export default function PageEvent({ eventID }) {
  const event = React.useContext(FirebaseIntegration.Context).fetchDocument();
  const [fav, setFav] = React.useState(false);
  const [overlayPage, setOverlayPage] = React.useState(undefined);
  const [descriptionExpanded, setDescriptionExpanded] = React.useState(false);

  const parser = new Parser();

  return (
    <Scaffold backdropImage={event.bannerURL}>
      <ImageTile src={event.bannerURL} />
      <Page>
        <DisplayBasicInfo event={event} />
        <DisplayLocation event={event} />
        <DisplayTime event={event} />
        <FavouriteTile event={event} />
        <div>
          <div className="text-2xl">Event Description</div>
          <p>
            {descriptionExpanded
              ? parser.parse(event.description)
              : _.truncate(parser.parse(event.description), { length: 300 })}
          </p>
          <button
            className="text-primary font-bold uppercase hover:text-primarylight transition-colors"
            onClick={() => setDescriptionExpanded(!descriptionExpanded)}
          >
            Read {descriptionExpanded ? "Less" : "More"}
          </button>
        </div>
        {null && (
          <div className="flex rounded-2xl justify-between text-slate-700 fill-primary transition-all border-gray-100 cursor-pointer shadow-md p-4 border gap-3 hover:bg-indigo-50 hover:shadow-indigo-200 hover:shadow-xl">
            <div className="flex flex-col flex-grow">
              <p className="text-xl font-bold">Share this Event?</p>
              <p className="opacity-80">
                Why have all the fun alone? Invite your friends too!
              </p>
            </div>
            <div className="flex flex-col justify-center items-center px-4">
              <IconShare className="w-8 h-8" />
            </div>
          </div>
        )}

        <div>
          <div className="text-2xl">Terms and Conditions</div>
          <p className="flex gap-1">{parser.parse(event.termsAndConditions)}</p>
        </div>
      </Page>

      <div className="fixed bottom-0 left-0 right-0 bg-primaryextralight shadow-2xl rounded-t-2xl p-8 z-10">
        <div className="max-w-[900px] mx-auto flex px-8">
          <div className="flex flex-col flex-grow">
            <p className="text-primary">Total Price</p>
            <p className="text-green-700 text-2xl">Free</p>
          </div>
          <div className="flex flex-col flex-grow items-stretch">
            <Button
              type="primary"
              onClick={() =>
                setOverlayPage(
                  <PageEventRegistrationInstructions
                    setOverlayPage={setOverlayPage}
                  />
                )
              }
            >
              Register
            </Button>
          </div>
        </div>
      </div>

      <Modal
        isPresented={!!overlayPage}
        dismiss={() => setOverlayPage(undefined)}
      >
        {overlayPage}
      </Modal>
    </Scaffold>
  );
}
