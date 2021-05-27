import toast from "../styles/Toast.module.css";

const Toast = ({ msg, handleShow }) => {
  return (
    <div className={toast.toast}>
      <div className={toast.toastHeader}>
        <strong className={toast.strong}>{msg.title}</strong>
        <button
          className={toast.close}
          onClick={handleShow}
          id="myBtn"
          data-dismiss="toast"
        >
          X
        </button>
      </div>
      <div className={toast.toastBody}>{msg.msg}</div>
    </div>
  );
};

export default Toast;
