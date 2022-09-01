import React from 'react'
import { auth } from '../firebase-config';
import { useState } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
import { Link } from 'react-router-dom';

const Signin = () => {
    const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      alert(error.message)
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      alert(error.message)
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
    return (
        <div>
            <div className="App  shadow-xl m rounded grid grid-cols-1 bg-slate-300 ">
      {/* <div className='ml-[20%]'>
        <h3 className='text-start text-2xl p-4 m-4 text-blue-500 font-bold '> Register User </h3>
        <input
  className='outline-none shadow-xl text-2xl rounded m-4 p-4'        
  placeholder='email'
          onChange={(event) => {
            setRegisterEmail(event.target.value);
            
          }}
        />
        <input
  className='outline-none shadow-xl text-2xl rounded m-4 p-4'          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button className='bg-cyan-500 p-4 m-2 rounded' onClick={register}> SignUp</button>
      </div> */}

      {/* <div className='ml-[20%]'>
        <h3 className='text-center text-2xl p-4 m-4 '> Login </h3>
        <input
  className='outline-none shadow-xl text-2xl rounded m-4 p-4'       
     placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
  className='outline-none shadow-xl text-2xl rounded m-4 p-4'          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button className='bg-cyan-500 p-4 m-2 rounded text-2xl first-letter:text-white' onClick={login}> Login</button>
      </div> */}

      {/* <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button> */}
    
    <div className='flex grid-cols-1 justify-center  h-[500px] bg-white shadow-xl '>

    <div className='  '>
        <img className='ml-20 mt-2' width={'100px'} src="data:image/png;base64,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" alt="a" />
    <div className='bg-white   w-[348px] h-[279] pl-[26px] pr-[26px] pb-[20px] pt-[20px] border-2 border-gray-200 mt-4'>
        <h1 className='text-[28px] pb-[4px] mb-[10px] h-[37px]  font-semibold text-start '>Sign-in</h1>
        <p className=' text-[13px] h-[21px] font-bold w-full'>Email or mobile phone number</p>
        <input  onChange={(event) => {
            setLoginEmail(event.target.value);
          }} placeholder='Email' className=' border-2 border-gray-300 pt-[3px] pb-[3px] pr-[7px] w-[300px] h-[31px] ' type="text" name="" id="" />
        <input onChange={(event) => {
            setLoginPassword(event.target.value);
          }} placeholder='Password' className=' border-2 mt-2 border-gray-300 pt-[3px] pb-[3px] pr-[7px] w-[300px] h-[31px] ' type="password" name="" id="" />
        <button onClick={login} className='bg-[#f0c14b] text-[13px] mt-1 w-[294px] pr-[6px] pl-[6px] h-[31px] rounded shadow-xl'>Continue</button>
        <p className='ml-6 text-[12px] pt-7'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <p className=' text-[12px] text-blue-400 pt-7'>Need Help.</p>
    </div>
        <h1 className='text-center pt-4 text-gray-400 '> New To Amzon</h1>
       <Link to='/Signup'>
       
       <button className='bg-[#e7e9ec] w-[350px] h-[31px] mr-2 ml-1 rounded   border-2 border-gray-500 text-[13px]'>Creante New Account</button>
       </Link> 
    </div>
    </div>
    </div>
    <div className='flex gap-10 text-blue-500 text-[11px] justify-center mt-6 border-r-2 border-black'>
<p>Condition use</p>  
<p>Privacy </p>  
<p>Help</p>  
 </div>
 <h1 className='text-center text-[13px] pt-4 ' >
    © 1996-2022, Amazon.com, Inc. or its affiliates
    </h1>
        </div>
    )
}

export default Signin
