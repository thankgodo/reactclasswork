
import Header from "./Header"
// import Body from "./Body"
import Footer from "./Footer"
import {Outlet} from "react-router-dom"
// import Profile from "./Profile"


const Layout = ()=>{
    return(
        <div>
            <Header />

            <Outlet />

            <Footer/>
        </div>
    )
}



export default Layout