import React, { useState } from "react";
import { TbLockSquareRoundedFilled } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";


function Signin() {

  let navigate=useNavigate();

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

    const Submit=async ()=>{

      let result= await axios.post("/login",{email,password});
      let res= await result.data
      let status=await result.status;

      if(status===201){
        alert('Login Successful')
        navigate('/home')
      }
      else if(res==="invalid credentials"){
       alert('invalid credentials')
      }
      else{
        alert("something went wrong")
      }

      console.log({email,password});
    }

  return (
    <div className=" pt-32 w-full">
      <div className=" grid place-items-center h-screen  ">
        <div className="grid place-items-center h-[70%] border-2 border-[#E63946] shadow-lg shadow-[#E63946] w-[40%]">
          <div className="">
            <TbLockSquareRoundedFilled className="text-4xl text-purple-600 " />
          </div>
          <div className="">
            <h1>Sign in</h1>
          </div>
          <div className="w-[80%] ">
            <div className="">
              <input
                type="text"
                placeholder="Enter Email"
                className=" h-[40px] w-[100%] rounded-md pl-3 border-2 border-black"
                required
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>
            <div className="py-5">
              <input
                type="password"
                placeholder="Enter Password"
                className=" h-[40px] w-[100%] rounded-md pl-3  border-2 border-black"
                required
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
            <div>
              <button className="w-[100%] h-[40px] border-2 border-blue-500 bg-sky-700 rounded-lg " onClick={Submit} >
                {" "}
                Login
              </button>
            </div>
            <div className="flex py-5">
              <div className="w-[40%] text-left text-sm text-red-600">
                forget Password
              </div>
              <div className="w-[60%] text-right text-sm text-red-600">
                <NavLink to='/signup'>Don't have an Account? Sing Up.</NavLink>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
