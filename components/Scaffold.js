import styles from "../styles/Scaffold.module.scss";

const Scaffold = ({ children, appBar }) => {
  return (
    <div className={styles.page}>
      <div className={styles.appBar}>{appBar}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Scaffold;
