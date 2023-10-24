import { useState, useEffect } from "react";
import { LOGO_URL } from "../utilities/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStaus = useOnlineStatus();

    //console.log("Header Render");

    useEffect(() => {
        console.log("useEffect called");
    }, [btnNameReact]);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStaus ? "green" : "red" }</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" 
                    onClick={()=>{
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                        }}
                    >
                            {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;