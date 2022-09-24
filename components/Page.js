import styles from "../styles/Page.module.scss";

const Page = ({ appbar, children, paddingBottom, margin }) => {
  return (
    <div>
      <div className={styles.appbar}>{appbar}</div>
      <div
        style={{ margin: margin, paddingBottom: paddingBottom * 16 }}
        className={styles.content}
      >
        {children}
      </div>
    </div>
  );
};
export default Page;
