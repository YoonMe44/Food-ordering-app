import foody from "../assets/images/logo.png";
import cartIcon from "../assets/icons/cart.svg";
import { Link } from "react-router-dom";
export const Header = ({cartCount}) =>{
    return(
        <nav id="header" className="bg-black text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrapper pl-4 items-center">
                    <Link to="/" className="toogleColor text-white no-underLine hover:no-underLine font-bold text-2xl lg:text-4xl">
                    <img src={foody} alt="logo"className="w-40 h-40 object-cover" />
                    </Link>
                </div>
                <div className="nav-menu-wrapper text-white items-center justify-between space-x-10">
                    <Link to="/" className="text-xl">Home</Link>
                    <Link to="/about" className="text-xl">About</Link>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <Link to="/cart" className="m-4 relative">
                        <img src={cartIcon} alt="cartIcon" />
                        {cartCount > 0 ? <div className="rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-full absolute -top-1 -right-1">{cartCount}</div> : null}
                    </Link>
                    <Link to="/login">Log in</Link>
                    <Link to="/register">Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}