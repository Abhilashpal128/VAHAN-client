import React, { useState } from "react";
import { TbLockSquareRoundedFilled } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';

function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const navigate=useNavigate();

  const submit= async (e)=>{
    // e.preventDefault();

    let result=await axios.post("/register",{fname,lname,contact,email,password,cpassword});
    console.log(result);

    let res= await result.data;
    let status= await result.status;

    if(status===201){
      alert('Registered Successfully')
      navigate('/')
    }
    else if (res==="user Alredy exists") {
      alert('user alredy exists');
      navigate('/') 
     }
     else{
      alert('Something Went Wrong');
     }
    
   

    console.log({fname,lname,contact,email,password,cpassword});

  }

  return (
    <div>
      <div className="  w-full">
        <div className=" grid place-items-center h-screen  ">
          <div className="grid place-items-center h-[90%] border-2 border-[#E63946] shadow-lg shadow-[#E63946] w-[40%]">
            <div className="">
              <TbLockSquareRoundedFilled className="text-4xl text-purple-600 " />
            </div>
            <div className="">
              <h1>Sign Up</h1>
            </div>
            <div className="w-[80%] ">
              <div className="py-3 ">
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className=" h-[40px] w-[100%] rounded-md pl-3 border-2 border-black "
                  required
                  value={fname}
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                  
                />
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className=" h-[40px] w-[100%] rounded-md pl-3 border-2 border-black"
                  required
                  value={lname}
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  type="text"
                  placeholder="Enter Contact Number"
                  className=" h-[40px] w-[100%] rounded-md pl-3 border-2 border-black "
                  required
                  value={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Enter Email"
                  className=" h-[40px] w-[100%] rounded-md pl-3  border-2 border-black"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <input
                  type="password"
                  placeholder="Enter Password"
                  className=" h-[40px] w-[100%] rounded-md pl-3  border-2 border-black "
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className=" h-[40px] w-[100%] rounded-md pl-3 border-2 border-black"
                  required
                  value={cpassword}
                  onChange={(e) => {
                    setCpassword(e.target.value);
                  }}
                />
              </div>
              <div className="py-3">
                <button className="w-[100%] h-[40px] border-2 border-black  bg-sky-700 rounded-lg " onClick={submit}>
                  {" "}
                  Sign up
                </button>
              </div>
              <div className="flex py-3 ">
                <div className=" w-[100%] text-right text-sm text-red-600">
                  <NavLink to="/"> Already have an Account? login.</NavLink>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
