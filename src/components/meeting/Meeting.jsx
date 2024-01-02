import { observer } from 'mobx-react';
import './Meeting.css'
import Appointment from '../../store/Appointment';
const Meeting = (observer(({ i }, { key }) => {
  return (<>
    <div >

      <p>service meetingType:{Appointment.meetingsList[i]?.meetingType}</p>
      <p>service name:{Appointment.meetingsList[i]?.name}</p>
      <p>service date:{Appointment.meetingsList[i]?.date}</p>
      <p>service email:{Appointment.meetingsList[i]?.email}</p>

    </div>


  </>
  )
}))
export default Meeting