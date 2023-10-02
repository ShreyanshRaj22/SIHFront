import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const signIn=(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        console.log(userCredential);
    }).catch((error)=>{
        console.log(error);
    })
  }
  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>Log In</h1>
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
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default SignIn;
