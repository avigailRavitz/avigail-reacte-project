import { Link, Outlet } from "react-router-dom";
import AdminDetails from "../adminDetails/AdminDetails";
import { Button } from '@mui/material'
import { useEffect } from "react";
import './AdminPage.css'
import Header from '../header/Header'

function AdminPage() {

    return (
        <>
        <AdminDetails className="adminDetails"/>
        <Header/>
            <div id="side">
            <Button className="custom-button">
                <Link to="./meeting" className="custom-link">
                 meetings
                </Link>
            </Button>
            <Button className="custom-button">
               <Link to="./services" className="custom-link">
                   services
                </Link>
            </Button>
            </div>
       <br/>
            <Outlet />
        </>
    )
}
console.log("adminpage")
export default AdminPage
