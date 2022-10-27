import React from "react"
import { Outlet, Link} from "react-router-dom"
import './AdminProfile.css'

 function AdminProfile () {
    return (
        <div className="adminprofile">
            <div className="container">
            <div className="profile-box">
        <img src="public/IMG_0296.JPG" className="image" width={120} height={120}/>
        <h3 style={{color: "white"}}>Name : Sifon Solomon</h3>
        <h4 style={{color: "white"}}>Username : Admin</h4>

        </div>
        </div>
       
        
        </div>

        
    )
}



export default AdminProfile