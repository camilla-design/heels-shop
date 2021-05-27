import toastStyle from "../styles/Toast.module.css";

const Toast = ({ msg, handleShow }) => {
  return (
    <div className={toastStyle.toast}>
      <div className={toastStyle.toastHeader}>
        <strong className={toastStyle.strong}>{msg.title}</strong>
        <button
          className={toastStyle.close}
          onClick={handleShow}
          id="myBtn"
          data-dismiss="toast"
        >
          X
        </button>
      </div>
      <div className={toastStyle.toastBody}>{msg.msg}</div>
    </div>
  );
};

export default Toast;
