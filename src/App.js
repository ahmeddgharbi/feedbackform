import './App.css';
import StarRating from './StarRating';
import StarRating2 from './StarRating2';
import StarRating3 from './StarRating3';
import { Form, TextArea } from 'semantic-ui-react'


function App() {
  return (
    <form>
    <div className="App">
     <img src='solavievelogo.png'></img>
      <hr/>
      <h2>Leave a feedback!</h2>
     <StarRating></StarRating>
     <hr2/>
     <StarRating2></StarRating2>
     <hr2/>
     <StarRating3></StarRating3>
     <hr2/>
     <p>Please leave a comment about your experience below:</p>
     <TextArea cols="40" rows="5" placeholder=' Type your comment here...' ></TextArea>
     <br/>
    <button class="Button" type="submit"><span class="Button-inner">SEND FEEDBACK</span> </button>
    </div>
    </form>
  );
}

export default App;
