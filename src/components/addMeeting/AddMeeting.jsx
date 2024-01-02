import { useState } from "react";
import { observer } from 'mobx-react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import AdminData from "../../store/AdminData";
import Store from '../../store/Store';
import Swal from 'sweetalert2';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Modal from 'react-modal';
import Appointment from '../../store/Appointment';
import dayjs from 'dayjs';
import MyDatePicker from "../MyDataPicker";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './AddMeeting.css';
const AddMeeting = observer(() => {
    const [isOpen, setIsOpen] = useState(false);
    const [age, setAge] = useState("");
    const [meetings, setMeetings] = useState({
        id: String(Appointment.meetingsList.length),
        serviceName: "",
        serviceDescribtion: '',
        date: "",
        clientName: "",
        clientPhone: "",
        clientEmail: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMeetings({ ...meetings, [name]: value });
    };

    const handleAddMeeting = (event) => {
        if (meetings.serviceDescribtion !== '' && meetings.date !== '' &&
            meetings.clientName !== '' && meetings.clientPhone !== '' && meetings.clientEmail != '') {
            const meetingsList = {
                serviceName: meetings.serviceName,
                serviceDescribtion: meetings.serviceDescribtion,
                dateTime: meetings.date,
                clientName: meetings.clientName,
                clientPhone: meetings.clientPhone,
                clientEmail: meetings.clientEmail
            };
            Appointment.addMeeting(meetingsList);
        }
        else {
            Swal.fire({
                title: "Error!",
                text: "required filds",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "image"
            });
        };
        const handleCloseModal = () => {
            setIsOpen(false);
        };
        setMeetings({
            id: String(Appointment.meetingsList.length),
            serviceName: "",
            serviceDescribtion: '',
            date: "",
            clientName: "",
            clientPhone: "",
            clientEmail: ""
        });
        handleCloseModal();
    }
    const handleChange = (event) => {
        console.log("addmeeting-age", event);
        setAge(event.target.value);
        handleInputChange(event);

        console.log("addmeeting-age2222222222", age);
    };
    return (
        <>
            <Button variant="contained" style={{ width: '70%' }} onClick={() => setIsOpen(true)}>לקביעת פגישה</Button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <DialogTitle>  Set meeting</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleAddMeeting} className="Form">
                        <div className="PopupsInput">
                            {/* select */}
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">סוג השירות</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        name="serviceName"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        {AdminData.services.map((x, key) =>
                                            <MenuItem value={x.name} key={key}>{x.name}</MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <p></p>
                        <div className="PopupsInput">
                            <TextField
                                fullWidth
                                label="serviceDescribtion"
                                name="serviceDescribtion"
                                value={meetings.serviceDescribtion}
                                onChange={handleInputChange}
                                placeholder="serviceDescribtion"
                            />
                        </div>
                        <p></p>
                        <MyDatePicker
                            name="dateTime"
                            onChange={(date) => {
                                setMeetings((prevService) => ({
                                    ...prevService,
                                    date: date,
                                }));
                            }}
                        />
                        <p></p>
                        <div className="PopupsInput">
                            <TextField
                                fullWidth
                                label="  clientEmail"
                                name="clientEmail"
                                value={meetings.clientEmail}
                                onChange={handleInputChange}
                                placeholder="clientEmail"
                            />
                        </div>
                        <p></p>
                        <div className="PopupsInput">
                            <TextField
                                fullWidth
                                label="  clientName"
                                name="clientName"
                                value={meetings.clientName}
                                onChange={handleInputChange}
                                placeholder="clientName"
                            />
                        </div>
                        <p></p>
                        <div className="PopupsInput">
                            <TextField
                                fullWidth
                                label="  clientPhone"
                                name="clientPhone"
                                value={meetings.clientPhone}
                                onChange={handleInputChange}
                                placeholder="clientPhone"
                            />
                        </div>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button type="submit" onClick={handleAddMeeting}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    );
})
export default AddMeeting;