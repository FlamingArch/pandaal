import styles from "../styles-legacy/EventCard.module.scss";

const EventCard = ({ date, title, image, address, className, classNames }) => {
  return (
    <div
      className={`${styles.image} ${
        classNames && classNames.image
      } ${className}`}
      style={{ flex: "0 0 10rem" }}
    >
      <img
        src={image || "https://source.unsplash.com/random"}
        className={`image ${styles.image} ${classNames && classNames.image}`}
        alt=""
      />
      <p className={`date ${styles.date} ${classNames && classNames.date}}`}>
        {date}
      </p>
      <p className={`title ${styles.title} ${classNames && classNames.title}}`}>
        {title}
      </p>
      <p
        className={`address ${styles.address} ${
          classNames && classNames.address
        }}`}
      >
        {address}
      </p>
    </div>
  );
};

export default EventCard;
