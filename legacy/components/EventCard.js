import _ from "lodash";
import { PageEvent } from "../../pages/eventPage";
import styles from "../styles/EventCard.module.scss";

// key={i}
// title={}
// date={e.startDate}
// image={e.bannerURL}

const EventCard = ({ event, className, classNames, setPage }) => {
  return (
    <div
      className={`${styles.container} ${
        classNames && classNames.container
      } ${className}`}
      style={{ flex: "0 0 10rem" }}
      onClick={() => {
        setPage(<PageEvent event={event} back={() => setPage(undefined)} />);
      }}
    >
      <img
        src={event.bannerURL || "https://source.unsplash.com/random"}
        className={`image ${styles.image} ${classNames && classNames.image}`}
        alt=""
      />
      <p className={`date ${styles.date} ${classNames && classNames.date}}`}>
        {event.startDate}
      </p>
      <p className={`title ${styles.title} ${classNames && classNames.title}}`}>
        {_.truncate(event.Title, { length: 50 })}
      </p>
      <p
        className={`address ${styles.address} ${
          classNames && classNames.address
        }}`}
      >
        {_.truncate(event.onlinePlatform || event.offlineLocationAddress, {
          length: 30,
        })}
      </p>
    </div>
  );
};

export default EventCard;
