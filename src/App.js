import app from './firebase.init';
import { getAuth } from 'firebase/auth';
import './App.css';


const auth = getAuth(app);

function App() {

  const handleEmailBlur = (event) => {
    console.log(event.target.value);
  }

  const handlePasswordBlur = event => {
    console.log(event.target.value);
  }

  const handleFormSubmit = event => {
    console.log('clicked kjhkjkjhgkjgkjkjgjkgkgjhghhjghjggjhjkg');
    event.preventDefault();
  }
  return (
    <div className="App">
      <h1>Log In Here</h1>
      <form onSubmit={handleFormSubmit}>
          <input onBlur={handleEmailBlur} type="email" name="" id="" placeholder='Your Email here' /> <br />
          <input onBlur={handlePasswordBlur} type="password" name="" id="" placeholder='Your password here' /> <br />
          <input type="submit" value="Submit" />
      </form>
      
    </div>
  );
}

export default App;
