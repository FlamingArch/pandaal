import styles from "../styles/Scaffold.module.scss";

const Scaffold = ({ children, navigationBar, branding, primaryCTA }) => {
  return (
    <div className={styles.page}>
      <div className={styles.appBar}>
        <div className={styles.primarySection}>
          <div className={styles.branding}>{branding}</div>
          <div className={styles.primaryCTA}>{primaryCTA}</div>
        </div>
        <div className={styles.navigationBar}>{navigationBar}</div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Scaffold;
