import { Tabs } from "../../components/Tabs";
import Button from "../../components/elements/Button";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../stores/menu/productsSlice";
import { ReactComponent as ArrowRightSvg } from "../../assets/icons/arrow-right-long-svgrepo-com.svg";
const Cart  = () =>{
    const cart = useSelector(selectAllProducts);
    const tabs = ['Summary', 'Details', 'Payment'];
    if(!cart || cart.length === 0){
        console.log("Cart is empty");
        return(
            <div className="bg-white text-black flex justify-center items-center p-4">
                Your cart is empty
            </div>
        )
    }
    return(
    <>
    Cart
    </>
    )
}
export default Cart;