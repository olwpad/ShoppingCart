import { useSelector,useDispatch } from "react-redux";

import { openModal } from "../../features/modal/modalSlice";
const CartFooter = () => {
  // Obtiene acceso a la variable 'total' definida en el store
  const { total } = useSelector((store) => store.cart);
  //objeto que invoca el action en el reducer
  const dispatch =useDispatch();
  return (
    <footer className="cart-footer">
      <hr />
      <div className="cart-footer__total">
        <h4>
          Total <span>${total}</span>
        </h4>
      </div>
      <button className="cart-footer__btn-clear" onClick={()=>dispatch(openModal())}>Clear cart</button>
    </footer>
  );
};

export default CartFooter;
