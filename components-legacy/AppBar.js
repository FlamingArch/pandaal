import styles from "../styles-legacy/AppBar.module.scss";
import { IconBack } from "./Icons";

const AppBar = ({
  heading,
  children,
  backFunction,
  backLabel,
  className,
  classNames,
}) => {
  return (
    <div
      className={
        styles.container + ` ${classNames && classNames.container} ${className}`
      }
    >
      {backFunction && (
        <div
          className="cursor-pointer flex flex-row gap-3 fill-[#3F4882] text-[#3F4882] items-center w-fit"
          onClick={backFunction}
        >
          <div className="rounded-[0.8rem] bg-[#F4F8FD] p-4 w-fit h-fit">
            <IconBack className="w-4 h-4" />
          </div>
          {backLabel && backLabel}
        </div>
      )}
      <div
        className={
          styles.actionsContainer +
          ` ${classNames && classNames.actionsContainer}`
        }
      >
        <p className={styles.heading + ` ${classNames && classNames.heading}`}>
          {heading}
        </p>
        {children}
      </div>
    </div>
  );
};
export default AppBar;
