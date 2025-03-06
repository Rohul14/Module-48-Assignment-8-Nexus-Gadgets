import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useState } from "react";


const Root = () => {
    const [card ,setCard]=useState([])
    return (
        <div className="bg-[#F6F6F6]">
            <NavBar card={card}></NavBar>
            <Outlet></Outlet>  
            <Footer></Footer> 
        </div>
    );
};

export default Root;