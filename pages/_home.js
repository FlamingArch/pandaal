import { useContext, useState } from "react";
import { IconLocationEdit } from "../legacy/components/Icons";
import { Page, AppBar } from "../components";
import { EventCard, List } from "../legacy/components";
import FirebaseIntegration from "../fragments/Firebase";
import Link from "next/link";
import { useEffect } from "react";
import _ from "lodash";

const PageHome = ({ actionButton }) => {
  const FirebaseEnv = useContext(FirebaseIntegration.Context);

  return (
    <Page
      appBar={
        <AppBar title="Home">
          <Link href="/settings">
            <div className="grid w-12 h-12 bg-indigo-600 rounded-full cursor-pointer aspect-square place-content-center">
              H
            </div>
          </Link>
        </AppBar>
      }
      primaryActionButton={actionButton}
    >
      <List.View gap={2}>
        <List.Section heading="Hey Harsh,">
          <p className="text-4xl font-bold">
            Showing all the getaway spots near
          </p>
          <div className="flex p-4 text-4xl font-bold text-pink-600 transition-colors duration-300 cursor-pointer rounded-3xl w-fit hover:bg-pink-50 dark:hover:bg-pink-900">
            Greater Noida
            <IconLocationEdit className="w-12 h-12 fill-pink-600" />
          </div>
        </List.Section>

        {Object.keys(FirebaseEnv.events.fetchedEvents).map((title, i) => (
          <List.Section gap={1.5} key={i} heading={title} orientation="row">
            {FirebaseEnv.events.fetchedEvents[title].map((e, i) => (
              <EventCard
                key={i}
                title={_.truncate(e.Title, { length: 50 })}
                date={e.startDate}
                image={e.bannerURL}
              />
            ))}
          </List.Section>
        ))}
        <div className="h-48" />
      </List.View>
    </Page>
  );
};

export default PageHome;
