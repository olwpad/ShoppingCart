import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Store
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";

// Componentes
import CartContainer from "./components/cart/CartContainer";
import Loading from "./components/Loading";
import Modal from "./components/Modal";
import NavBar from "./components/navbar/NavBar";
//import CartContainer from "./components/cart/CartContainer";
const App = () => {
  const {cartItems,isLoading}=useSelector((store)=>store.cart);
  const {isOpen}=useSelector(store=>store.modal)
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems,dispatch])
  
useEffect(() => {
  dispatch(getCartItems())
}, [dispatch])



if(isLoading) return<Loading/>
  return (
    <>
      {isOpen && <Modal/>}
      <NavBar />
      <CartContainer />
    </>
  );
};

export default App;
