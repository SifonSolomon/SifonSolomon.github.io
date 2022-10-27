import {Outlet, Link } from "react-router-dom";
import './NotFound.css'
export default function NotFound() {
    return (
        <div className="notfound">
            <h1 className="oop">Oops! 404 page.</h1>
             {/* <p className="text">Here are some helpful links, also click the button to know the products:</p> */}
            
            {/* <nav>

           <div id="four"> <Link to='/'>Home</Link> </div>
           <div id="four"><Link to='/AdminProfile'>AdminProfile</Link></div> 
           <div id="four"><Link to='/Users'>Users</Link></div>
            </nav>  */}
            
        <p><Link to='/NotFound/MoreInfo' className="button">MoreInfo</Link></p>
        <div>
        </div>

        <Outlet/>
        </div>
    )
}