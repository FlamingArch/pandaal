import styles from "../styles/List.module.scss";

const View = ({ children, orientation }) => {
  return (
    <div
      className={`${styles.list} ${
        orientation && orientation == "row" ? styles.row : null
      }`}
    >
      {children}
    </div>
  );
};

const Section = ({ heading, children, description, orientation }) => {
  return (
    <section className={styles.section}>
      {heading && <p className={styles.sectionHeading}>{heading}</p>}
      <div
        className={`${styles.sectionContent} ${
          orientation && orientation == "row" ? styles.row : null
        }`}
      >
        {children}
      </div>
      {description && (
        <p className={styles.sectionDescription}>{description}</p>
      )}
    </section>
  );
};

const Heading = ({ children }) => {
  return <p className={styles.heading}>{children}</p>;
};

const List = { View: View, Section: Section, Heading: Heading };

export default List;
