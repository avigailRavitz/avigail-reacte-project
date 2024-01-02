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
import * as React from 'react';
import Box from '@mui/material/Box';  // נכון: '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress';  // נכון: '@mui/material/CircularProgress'
import './AddServices.css';


const AddService = observer(() => {


      function CircularProgressVariants() {
      return (
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
          <CircularProgress variant="solid" />
          <CircularProgress variant="soft" />
          <CircularProgress variant="outlined" />
          <CircularProgress variant="plain" />
        </Box>
      );
    }
   
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        id:   String(AdminData.services.length),
        name: '',
        description: '',
        price: '',
        during: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (event) => {
        if (formData.name !== '' && formData.description !== '' && formData.price !== ''&&formData.during!=='') {
          <cancelAnimationFrame/>
            Store.addService(formData);
        }
        else {
            Swal.fire({
                title: "Error!",
                text: "required filds",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "image"
            });

        }

        // Reset the form after submitting
        setFormData({
            id:   String(AdminData.services.length),
            name: '',
            description: '',
            price: '',
            during: ''
        });
        setIsOpen(false);
    };



    return (
        <>
            <Button  className="addServicesButton"  variant="contained" onClick={() => setIsOpen(true)}>הוסף שירות</Button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <DialogTitle>  Set service</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit} className="Form">
                        <div className="PopupsInput">
                            <TextField
                                fullWidth
                                label="service Name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder=" service Name"
                            />
                        </div>
                        <p></p>
                        <div className="PopupsInput">

                            <TextField
                                fullWidth
                                label=" service Description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                placeholder="service Description"
                            />
                        </div>
                        <p></p>
                        <div className="PopupsInput">
                            <TextField
                                fullWidth
                                label="  service Price"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                placeholder="service Price"
                            />
                        </div>
                        <p></p>
                        <div className="PopupsInput">
                            <TextField
                                fullWidth
                                label="  service During"
                                name="during"
                                value={formData.during}
                                onChange={handleInputChange}
                                placeholder="service During"
                            />
                        </div>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button type="submit" onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
            
        </>
    )
})

export default AddService