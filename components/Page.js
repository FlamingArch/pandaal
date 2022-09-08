import styles from "../styles/Page.module.scss";

const Page = ({ children, appBar }) => {
  return (
    <div className={styles.page}>
      <div className={styles.appBar}>{appBar}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Page;
