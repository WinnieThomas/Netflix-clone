import React,{useState} from 'react';
import './SignupScreen.css';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import {auth} from './firebase';
import{useNavigate} from 'react-router-dom';

function SignupScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');


    const register = async(e) =>{
        e.preventDefault();
    

    
      await createUserWithEmailAndPassword(
       auth,email,password
      )
      .then((authUser)=>{
        const userDetails = authUser.user
         console.log(userDetails);
         navigate("/profile")
      })
      .catch((error)=>{
        alert(error.message);
      });
    };

    const signIn =async(e) => {
        e.preventDefault();

    
    await signInWithEmailAndPassword(
       auth,email,password
      )
      .then((authUser)=>{
         console.log(authUser);
         navigate("/profile");
      })
      .catch((error)=>{
        alert(error.message);
      });
    };

  return (
    <div className='signupScreen'>
        <form>
            <h1>Sign In</h1>
            <input name="email" type='email' placeholder='Email Address' onChange={(e)=>setEmail(e.target.value)}/>
            <input name="password" type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit' onClick={signIn}>Sign In</button>
            <h4>
                <span className='signupScreen_gray'>New to Netflix?</span>
                <span className='signupScreen_link' onClick={register}>SignUp now.</span>
            </h4>
        </form>

    </div>
  );
}

export default SignupScreen;