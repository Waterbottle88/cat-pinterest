import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    return(
        <div className="bg-blue-500 p-4 flex justify-between mb-4 text-white text-center">
            <div>
                <Link to="/">
                <div className="flex-row flex ">
                    <div className="text-center align-middle p-1">Cat-Pinterest</div>
                    <img src="/icons/logo.svg" className="w-8 h-8 invert hover:invert-0" alt="LOGO"/>
                </div>
                </Link>
            </div>
                <div>
                    <Link to="/saved">
                        <img src="/icons/heart.svg" className="w-8 h-8 invert hover:invert-0" alt="favourites"/>
                    </Link>
                </div>
        </div>
    );
};

export default NavBar;