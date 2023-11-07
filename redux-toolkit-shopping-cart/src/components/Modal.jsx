import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

 const Modal = () => {

  const handleConfirmClick = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };
  const dispatch =useDispatch();
  return <aside className='modal-container'>
    <div className='modal'>
        <h4>Are you sure to clear the cart?</h4>
        <div className='btn-container'>
            <button className='btn btn-confirm' onClick={handleConfirmClick}>Confirm</button>
            <button className='btn btn-cancel' onClick={()=>dispatch(closeModal())}>Cancel</button>

        </div>

    </div>
  </aside>
}
export default Modal;

