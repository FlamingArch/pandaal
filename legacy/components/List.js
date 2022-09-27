import styles from "../styles/List.module.scss";

const View = ({ children, orientation, gap, className }) => {
  return (
    <div
      className={`${styles.list} ${className} ${
        orientation && orientation == "row" ? styles.row : null
      }`}
      style={{ gap: gap * 16 }}
    >
      {children}
    </div>
  );
};

const Section = ({
  heading,
  children,
  description,
  orientation,
  gap,
  padding,
  className,
  classNames,
}) => {
  return (
    <section
      className={`${styles.section} ${
        classNames && classNames.section
      } ${className}`}
    >
      {heading && <p className={styles.sectionHeading}>{heading}</p>}
      <div
        className={`${styles.sectionContent} ${
          classNames && classNames.sectionContent
        } ${orientation && orientation == "row" ? styles.row : null}`}
        style={{ gap: gap * 16, padding: padding || "0 1.5rem" }}
      >
        {children}
      </div>
      {description && (
        <p
          className={`${styles.sectionDescription} ${
            classNames && classNames.sectionDescription
          }`}
        >
          {description}
        </p>
      )}
    </section>
  );
};

const Heading = ({ children, className }) => {
  return <p className={`${styles.heading} ${className}`}>{children}</p>;
};

const List = { View: View, Section: Section, Heading: Heading };

export default List;
