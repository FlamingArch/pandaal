import styles from "../styles/Modal.module.scss";

const Modal = ({
  isPresented,
  onDismiss,
  parentRef,
  children,
  className,
  classNames,
}) => {
  return (
    isPresented && (
      <div
        className={`${styles.container} ${
          classNames && classNames.container
        } ${className}`}
      >
        <div
          className={`${styles.modal} ${classNames && classNames.modal} modal`}
        >
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
