import CartContainer from "./components/cart/CartContainer";
import NavBar from "./components/navbar/NavBar";
import { useDispatch,useSelector} from "react-redux";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";
//import CartContainer from "./components/cart/CartContainer";
const App = () => {
  const {cartItems}=useSelector((store)=>store.cart);
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems,dispatch])
  

  return (
    <>
      <NavBar />
      <CartContainer />
    </>
  );
};

export default App;
