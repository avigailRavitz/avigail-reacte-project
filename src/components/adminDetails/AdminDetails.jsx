import { useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AdminData from '../../store/AdminData';
import { observer } from "mobx-react"
import Store from '../../store/Store';
import { useEffect } from 'react';
import one from "../../assets/images/one.jpg";
import EditAdminDetails from '../editAdminDetails/EditAdminDetails';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import './AdminDetails.css'
const AdminDetails = (observer(() => {
  useEffect(() => {
    async function fetchData() {
      Store.getDetalise();
    }
    console.log("admindetail", AdminData.business.name)
    fetchData();
  }, [])
  const chengsetsendToEdit = () => {
    AdminData.setsendToEdit(true);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }} className='details'>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={one}
            src={one}
            alt="AI"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {AdminData.business.id} :בעל עסק
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {AdminData.business.name} :שם עסק
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {AdminData.business.address} :כתובת
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {AdminData.business.phone} :טלפון
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {AdminData.business.owner} :owner
            </Typography>
            <Typography variant="body3" color="text.secondary">
              ברוכים הבאים לפרויקט שלנו
              <br></br>
              בהצלחה בהמשך החיים!!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {AdminData.isLogin ?

            <Fab color="primary" aria-label="edit" size="small" onClick={chengsetsendToEdit}>
              <EditIcon />
            </Fab>
            : <></>}

        </CardActions>
      </Card>
    </>
  )

}))

export default AdminDetails