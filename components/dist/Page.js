import styles from "./Page.module.scss";

const Page = ({ children, appBar, primaryActionButton }) => {
  return (
    <div className={styles.container}>
      <div className={styles.appBar}>{appBar}</div>
      {children}
      <div className={styles.primaryActionButton}>{primaryActionButton}</div>
    </div>
  );
};

export default Page;
