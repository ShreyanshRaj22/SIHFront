import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const signUp=(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        console.log(userCredential);
    }).catch((error)=>{
        console.log(error);
    })
  }
  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
        <input type="email" 
        placeholder="Enter your email" 
        onChange={(e)=>{setemail(e.target.value)}}
        value={email}
        
         />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e)=>{setpassword(e.target.value)}}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
