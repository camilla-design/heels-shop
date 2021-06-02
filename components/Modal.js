import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
import { deleteItem } from "../store/Actions";

const Modal = () => {
  const { state, dispatch } = useContext(DataContext);
  const { modal } = state;
  const handleSubmit = () => {
    dispatch(deleteItem(modal.data, modal.id, "ADD_CART"));
    dispatch({ type: "ADD_MODAL", payload: {} });
  };
  return (
    <>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{modal.title}</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              Do you want to delete this product?
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                onClick={handleSubmit}
              >
                Yes
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
