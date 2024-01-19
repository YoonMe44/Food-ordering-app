import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts,selectAllProducts } from "../../stores/menu/productsSlice";

const Menu  = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return(
        <div>
            {
                products.status === 'pending' ? 
                <div>Loading...</div> :
                <div className="menu-wrapper">
                    {
                        products.products && products.products[0].products.map((product, index) => {
                            return(
                                <div className="text-white">{product.name}</div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}
export default Menu;