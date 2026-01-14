import { Tabs } from "../../components/Tabs";
import Button from "../../components/elements/Button";
import { useSelector } from "react-redux";
import { cartProducts } from "../../stores/cart/cartSlice";
import { getProducts } from "../../stores/menu/productsSlice";
const Cart  = () =>{
    return(
        <div className="text-white">
            Cart
        </div>
    )
}
export default Cart;