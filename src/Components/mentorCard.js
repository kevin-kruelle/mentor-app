import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import data from '../data';
import MentorProfile from './MentorProfile';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 100,
    margin: 20,
  },
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ResourceCard(){
  return(
    <div>
      {/* <a href={props.resources}>{props.data.name}</a> */}
    </div>
  );
}

export default function MentorModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [ currentCard, setCurrentCardData] = useState(data);

  useEffect(()=>{
    console.log(currentCard);
  })

  return (
    <div>
      <Button onClick={handleOpen}>< Mentor data={props.data}/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        data={data}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.data.name}<br/>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.data.location}<br/>
            {props.data.company}<br/>
            {props.data.field}<br/>
            {props.data.interests}<br/>
            {/* {props.resources.map(resource => < ResourceCard data={data} /> )} */}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

const Mentor = (props) => {
  const classes = useStyles();
  // const mentor = Data[0];
  // const [ render, setRender ] = useState(false);

  // function onClick(){
  //   !render ? setRender(true) : setRender(false);
  //   console.log('clicked')
  // }

  return (
    <div>
      {/* { !render && <MentorProfile /> } */}
      <div className="mentor-card" >      
        <div className="mentor-profiles">
            <div className="mentor-card">
              <Card className={classes.root}>
                <CardActionArea>
                  <div className='card-padding'>
                  <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1518933165971-611dbc9c412d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className='card-padding'>
                      {props.data.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      <strong>Location: </strong>
                      <br />
                      {props.data.location}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      <strong>Company:</strong><br/>
                      {props.data.company}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      <strong>Field:</strong>
                      <br />
                      {props.data.field}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      <strong>Interests:</strong>
                      <br />
                      {props.data.interests}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      component="p">
                      Resources:
                      <br />
                      Click for resources
                    </Typography>
                  </CardContent>
                  </div>
                </CardActionArea>
                
              </Card>
            </div>
         
        </div>
      </div>
  </div>
  );
};