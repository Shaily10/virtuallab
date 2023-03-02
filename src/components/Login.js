import {React,useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";


function  Alogin() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const onChange = () =>{
      
    };
    function updateEmail(e){
      setEmail(e.target.value)
    }
  
    function updatePassword(e){
      setPassword(e.target.value)
    }
  
    const loginUser=async(e)=>{
      e.preventDefault();
  
      const res=await fetch("/Alogin",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        } ,
        body: JSON.stringify({
          email,password
        })
      })
  
      const data=await res.json();
      if(res.status===401 || !data){
        window.alert("Invalid Credential")
      }
      else{
        window.alert("Successfull Login")
    }
}

return (
  <>
  <div className="container-login">
    <h1 className="heading-signup">Login Form</h1>
    <form method="POST" >
      <p className="text">Email: <input type="email" id="email" size="30" value={email} onChange={updateEmail} placeholder="Enter your email" required/></p>
      <p className="text">Password:<input type="password" id="password" size="30" value={password} onChange={updatePassword} placeholder="Enter your password" required/></p>
      <ReCAPTCHA
sitekey="6Lc0t8IkAAAAAKA4EKOpR8ChwC51FPi9FIH0V_s8"
onChange={onChange}
/>
      <button type="submit" onClick={loginUser} className="button">Submit</button>
    </form>
  </div>
  </>
);
}



export default Alogin