import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Root = () => {
    const location= useLocation();
    const noheaderfooter= location.pathname.includes('time') 
    return (
        <div>
            {noheaderfooter|| <Navbar></Navbar>}
            <Outlet></Outlet>
            {noheaderfooter|| <Footer></Footer>}
        </div>
    );
};

export default Root;