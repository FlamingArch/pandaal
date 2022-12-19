import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AppBar, Page, Scaffold, Text } from "../../components";
import { BackButton } from "../../fragments";

export default function PageRegistrationConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  const { eventId } = useParams();
  const response = location.state;

  if (!response) navigate("/");

  return (
    <Scaffold
      isOverlay
      appBar={
        <AppBar
          leading={<BackButton />}
          title={response.error ? "Error" : "Registration Success"}
        />
      }
    >
      <Page padding={8} gap={4}>
        <Text bold>{response.error.description}</Text>
        {JSON.stringify(response.error)}
      </Page>
    </Scaffold>
  );
}
