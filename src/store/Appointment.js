import Swal from 'sweetalert2';
import { observable, makeObservable, action } from 'mobx';
class Appointment {
    meetingsList = [];
    constructor() {
        makeObservable(this, {
            meetingsList: observable,
            getMeeting: action,
            addMeeting: action

        })
    }
    addMeeting = async (meeting) => {
        const response = await fetch("http://localhost:8787/appointment", {
            method: "POST",
            body: JSON.stringify(meeting),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.status === 200) {
            this.meetingList = ([...this.meetingList, meeting])
            console.log("metting", this.meetingList.length)
            Swal.fire({
                title: "נקבעה פגישה",
                text: "פרטיך נקלטו בהצלחה",
                icon: "success"
            });
            return true
        }
        Swal.fire({
            title: 'error',
            text: 'לא ניתן לקבוע את הפגישה',
            icon: "error"
        });
        return false
    }

    getMeeting = async () => {
        const response = await fetch("http://localhost:8787/appointments");
        const data = await response.json();
        this.meetingsList = ([...data].sort((x, y) => new Date(y.dateTime) - new Date(x.dateTime)));
    }
}
export default new Appointment();