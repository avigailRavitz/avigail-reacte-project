import { observer } from "mobx-react"
import Store from '../../store/Store'
import Login from '../login/Login'
import AdminPage from '../adminPage/AdminPage'
import AdminData from "../../store/AdminData"
import AdminDetails from "../adminDetails/AdminDetails"
import EditAdminDetails from "../editAdminDetails/EditAdminDetails"
import { useEffect } from 'react';
import Appointment from "../../store/Appointment"
const Admin = (observer(() => {
    useEffect(() => {
        if (localStorage.getItem("isLogin") === "true")
            AdminData.setIsLogin(true);
        Store.getDetalise();
        Store.getService();
        Appointment.getMeeting();
    }, [])
    return (
        <>
            {!AdminData.isLogin && <Login />}
            {AdminData.isLogin && !AdminData.sendToEdit && <AdminPage />}
            {AdminData.sendToEdit && <EditAdminDetails />}

        </>
    )
}))




export default Admin

