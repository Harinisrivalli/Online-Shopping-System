import { Link } from "react-router-dom";
import "../css/home.css";
import userContext from "../utils/userContext";
import { useContext } from "react";
function Header(){
    const data = useContext(userContext);
    return(
        <div id="header">
            <ul>
                <Link to="/home">
                    <li>Home</li>
                </Link>
                <Link to="/products">
                    <li>Product</li>
                </Link>
                <Link to="/cart">
                    <li>Cart</li>
                </Link>
                <Link to="/login">
                    <li>{data.loggedInUser}</li>
                </Link>
            </ul>
        </div>
    )
}
export default Header;