import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../style/SingUp.css";
 import www from "../video/www.mp4";
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Identity ,setIdentity]=useState("");
 
  const history = useHistory();
  const changeName = (e) => {
    setName(e.target.value);
   
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeIdentity=(e)=>{
    setIdentity(e.target.value);
  }

  const addUser = async (e) => {
    e.preventDefault();
    console.log({
      name: name,
      email: email,
      password: password,
      Identity:Identity,
    });

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signUp`, {
        name: name,
        email: email,
        password: password,
        Identity:Identity,
      });
      console.log(response);
    
      if (response.status === 201) {
        console.log("hanan");
        history.push("/login");
      }
    } catch (error) {
      console.log("err");
    } 
  };
  return (
    <>

    <video 
    autoPlay loop muted
     style={{ position:"fixed" ,
      width:"100%",
      left:"0%",
      top:"0%",
     
    objectFit:"cover",
    transorm:"translate(-50%, -50%)",
    zIndex:"-1",
    height:"150%"
    }}
   >
  
   <source  src={ www} type="video/mp4"/>



   
  </video>


    <div id="formInput">

    <div>
    <div id="logggo-2">
    <img src="https://yt3.ggpht.com/ytc/AKedOLRZiVaOhiyopxkS1brKSeKMrG9aOxkK020nA1BaSA=s176-c-k-c0x00ffffff-no-rj"  width={130}/>
    <br/>
    
    <h2 >Welcome to Neom</h2>
    </div>

<br/>
<br/>
      
      <form  id="form">
      <label>Name</label><br/>
        <input onChange={(e) => {  changeName(e);}} placeholder="enter youe name"  id="input1"/>
       <br/>
         <label>Email</label><br/>
        <input onChange={(e) => {changeEmail(e);}} placeholder="enter your email" id="input2"/>
        <br/>
        <label>Password</label><br/>
        <input onChange={(e) => { changePassword(e); }} type="password" placeholder="enter your password" id="input3"/>
        <br/>
        <label>Identity</label><br/>
        <input onChange={(e)=>{changeIdentity(e); }} id="input3"  placeholder="enter your Identity"></input><br/>
        <button onClick={(e) => {addUser(e); }}  id="btn">register</button>
        </form>
      </div>
    </div>
    </>
  );
}
