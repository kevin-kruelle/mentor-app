import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Data from '../data';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 100,
    margin: 20,
  },
});

const Mentor = () => {
  const classes = useStyles();
  const mentor = Data[0];

  //const [value, setValue] = React.useState(2);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <div>
      <div className="mentor-card">
        <h3 style={{ marginBottom: '0px' }}>For Mentors</h3>
        
        <div className="mentor-profiles">
          
            <div className="mentor-card">
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1518933165971-611dbc9c412d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {mentor.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      Location:
                      <br />
                      {mentor.location}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      Company:
                      <br />
                      {mentor.company}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      Field:
                      <br />
                      {mentor.field}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      Interests:
                      <br />
                      {mentor.interests}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      Resources:
                      <br />
                      {mentor.resources}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                
              </Card>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Mentor;