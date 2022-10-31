import React from "react";
import { useParams } from "react-router-dom";
import { Scaffold } from "./components";
import PageEvent from "./pages/Event";

export default function App() {
  const id = useParams().id;
  console.log("Fetching event", id);
  return (
    <Scaffold.View>
      <PageEvent match={id} />
    </Scaffold.View>
  );
}
