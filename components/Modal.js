import styles from "../styles/Modal.module.scss";

const Modal = ({ isPresented, parentRef, children, className, classNames }) => {
  console.log(parentRef.current);

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
