import * as React from 'react';
import './App.css';
import StarRating from './StarRating';
import StarRating2 from './StarRating2';
import StarRating3 from './StarRating3';
import { TextArea } from 'semantic-ui-react';
import AlertDialogSlide from './confirmation';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import { useState } from "react";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function App() {
  const [open, setOpen] = React.useState(false);

   const [comment, setComment] = useState("");
   const [rating1, setRating1] = useState("");
   const [rating2, setRating2] = useState("");
   const [rating3, setRating3] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location = "/";
  };

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = {  rating1, rating2,rating3, comment };
      const response = await fetch("http://localhost:5000/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      
    } catch (err) {
      console.error(err.message);
    }
    
  };


  return (
    
    <form onSubmit={onSubmitForm} >
    
    <div className="App">
     <img src='solavievelogo.png'></img>
      <hr/>
      <h2>Leave a feedback!</h2>
     <StarRating rating={rating1} updateRating={(e) => setRating1(e)}
      onChange={e => setRating1(e.target.value)}></StarRating>
     <hr2/>
     <StarRating2 rating={rating2} updateRating={(e) => setRating2(e)}
      onChange={e => setRating2(e.target.value)}></StarRating2>
     <hr2/>
     <StarRating3 rating={rating3} updateRating={(e) => setRating3(e)}
      onChange={e => setRating3(e.target.value)}></StarRating3>
     <hr2/>
 
     <p>Please leave a comment about your experience below:</p>
     <TextArea  placeholder=' Type your comment here...' 
      value={comment}
      onChange={e => setComment(e.target.value)}
      ></TextArea>
     <br/>
    <button class="Button" type='submit'  variant="outlined" onClick={handleClickOpen}><span class="Button-inner">SEND FEEDBACK</span> </button>
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
        <img src='confirm.png'></img>
          <DialogContentText id="alert-dialog-slide-description">
          <p>Thank you for your message!</p>
          <p> We will be in contact soon..</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions >
        <button class="Button" type='button'  onClick={handleClose} ><span class="Button-inner">Close</span> </button>
        </DialogActions>
      </Dialog>
    </div>

    </form>
    
  );
}

export default App;
