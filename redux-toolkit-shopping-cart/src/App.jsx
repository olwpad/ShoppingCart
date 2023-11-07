import CartContainer from "./components/cart/CartContainer";
import NavBar from "./components/navbar/NavBar";
import Modal from "./components/modal";
import { useDispatch,useSelector} from "react-redux";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";
//import CartContainer from "./components/cart/CartContainer";
const App = () => {
  const {cartItems}=useSelector((store)=>store.cart);
  const {isOpen}=useSelector(store=>store.modal)
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems,dispatch])
  

  return (
    <>
      {isOpen && <Modal/>}
      <NavBar />
      <CartContainer />
    </>
  );
};

export default App;
