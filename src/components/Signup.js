import {React,useState} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css"

function Signup() {
  
    const [credentials, setCred] = useState({name:"" , course:"" ,branch:"",year:"",semester:"", email:"" , password:"" , cpassword:""});
    const navigate=useNavigate(); //navigate hook
    const onChange=(e)=>{
        setCred({...credentials, [e.target.name]: e.target.value })
      }
    const signupUser=async(e)=>{
      
  
      e.preventDefault()
      
      const {name ,course , branch,year,semester,email , password , cpassword} = credentials;
      
      const res=await fetch("/Asignup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body: JSON.stringify({name , course , branch,year,semester ,email, password , cpassword})
      })
  
      const data=await res.json();
      
      if(data.status===422 || !data){
        window.alert("Invalid Registration")
      }
      else{
        window.alert("Successfull Registration")
        navigate("/")
        
      }
    }
  
    return (
      <div className="container-bsignup">
        <head>
        <link rel="stylesheet" href="../styles/Signup.css" />
</head>
        <h1 className="heading-signup">User Signup Form</h1>
        <form>
          <p className="text">Name: <input name="name" type="text" id="name" size="30" value={credentials.name} onChange={onChange} placeholder="Enter your name" required/></p>
          <p className="text">Course:<input name="course" type="text" id="Course" size="30" value={credentials.course} onChange={onChange} placeholder="Course Name" required/></p>
          <p className="text">Branch:<input name="branch" type="text" id="Branch" size="30" value={credentials.branch} onChange={onChange} placeholder="Branch Name" required/></p>
          <p className="text">Year:<input name="year" type="Number" id="Year" size="30" value={credentials.year} onChange={onChange} placeholder="Year Name" required/></p>
          <p className="text">Semester:<input name="semester" type="Number" id="Semester" size="30" value={credentials.semester} onChange={onChange} placeholder="Semester Name" required/></p>
          <p className="text">E-mail: <input name="email" type="email" id="email" size="30" value={credentials.email} onChange={onChange} placeholder="Enter your Email" required/></p>
          <p className="text">Password: <input name="password" type="password" id="password" size="30" value={credentials.password} onChange={onChange} placeholder="Enter your password" required/></p>
          <p className="text">Confirm Password: <input name="cpassword" type="password" id="confirm" size="30" value={credentials.cpassword} onChange={onChange} placeholder="Confirm password" required/></p>
          <button className="button" onClick={signupUser}  >Submit</button>
        </form>
      </div>
    );
  }
  
  export default Signup

      // function update1(e){
    //   setName(e.target.value)
    // }
    // function update2(e){
    //   setPhone(e.target.value)
    // }
    // function update3(e){
    //   setEmail(e.target.value)
    // }
    // function update4(e){
    //   setPassword(e.target.value)
    // }
    // function update5(e){
    //   setCpassword(e.target.value)
    // }