import _ from "lodash";

export default function BookingsPage() {
  return (
    <div className="bg-white">
      {_.range(0, 100).map((i) => (
        <div className="grid place-content-center p-4" key={i}>
          Booking {i}
        </div>
      ))}
    </div>
  );
}
