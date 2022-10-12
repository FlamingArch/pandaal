const BasicInfo = ({ event }) => {
  return (
    <div className="flex flex-col">
      <div
        className="uppercase text-primary"
        style={{ letterSpacing: "0.2rem" }}
      >
        {event.Category}
      </div>
      <div className="text-2xl">{event.Title}</div>
      <div className="text-primary">by {event.organisationName}</div>
    </div>
  );
};

export default BasicInfo;
