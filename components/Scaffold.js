import styles from "../styles/Scaffold.module.scss";

const Scaffold = ({
  children,
  navigationBar,
  branding,
  primaryCTA,
  className,
  classNames,
  ref,
  modalPresented,
}) => {
  return (
    <div
      ref={ref}
      className={`${styles.page} ${modalPresented ? styles.backstage : null} ${
        classNames && classNames.page
      } ${className} page`}
    >
      <div
        className={`${styles.appBar} ${classNames && classNames.appBar} appBar`}
      >
        <div
          className={`${styles.primarySection} primarySection ${
            classNames && classNames.primarySection
          }`}
        >
          <div
            className={`${styles.branding} ${
              classNames && classNames.branding
            } branding`}
          >
            {branding}
          </div>
          <div
            className={`${styles.primaryCTA} primaryCTA ${
              classNames && classNames.primaryCTA
            }`}
          >
            {primaryCTA}
          </div>
        </div>
        <div
          className={`${styles.navigationBar} navigationBar ${
            classNames && classNames.navigationBar
          }`}
        >
          {navigationBar}
        </div>
      </div>
      <div
        className={`${styles.content} ${
          classNames && classNames.content
        } content`}
      >
        {children}
      </div>
    </div>
  );
};

export default Scaffold;
