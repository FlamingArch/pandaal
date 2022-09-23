import styles from "../styles/Page.module.scss";

const Page = ({ appbar, children, paddingBottom }) => {
  return (
    <div>
      <div className={styles.appbar}>{appbar}</div>
      <div
        style={{ paddingBottom: paddingBottom * 16 }}
        className={styles.content}
      >
        {children}
      </div>
    </div>
  );
};
export default Page;
