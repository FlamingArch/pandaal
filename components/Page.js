import styles from "../styles/Page.module.scss";

const Page = ({
  appbar,
  children,
  paddingBottom,
  margin,
  className,
  classNames,
}) => {
  return (
    <div className={`${classNames && classNames.page} ${className}`}>
      <div
        className={`${styles.appbar} ${classNames && classNames.appBar} appBar`}
      >
        {appbar}
      </div>
      <div
        style={{ margin: margin, paddingBottom: paddingBottom * 16 }}
        className={`${styles.content} ${
          classNames && classNames.content
        } content`}
      >
        {children}
      </div>
    </div>
  );
};
export default Page;
