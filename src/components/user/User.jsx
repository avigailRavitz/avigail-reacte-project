import AdminDetails from "../adminDetails/AdminDetails"
import Services from '../services/Services'
import Store from '../../store/Store'
import EditAdminDetails from "../editAdminDetails/EditAdminDetails"
import Meetings from "../meetings/Meetings"
import AdminData from "../../store/AdminData"
import AddMeeting from "../addMeeting/AddMeeting"
import { useEffect } from "react"
import Appointment from "../../store/Appointment"
import { observer } from "mobx-react"
import './User.css';
import Header from "../header/Header"
const User= observer(()=>{
  useEffect(()=>{
    localStorage.removeItem("isLogin");
    Store.getDetalise();
    Store.getService();
    Appointment.getMeeting();
},[])
    //const [count, setCount] = useState(0)
  console.log("user")
    return (
      <>
       <AdminDetails/>
        <Header/>
       <div className='servicesCards'> <Services/></div>
        <div className='addMeeting'><AddMeeting/></div>
      </>
    )
  })
  
  export default User
  