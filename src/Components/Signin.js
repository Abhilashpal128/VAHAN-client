import React, { useState } from "react";
import { TbLockSquareRoundedFilled } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Signin() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Submit = async (e) => {
    e.preventDefault();
    try {
      console.log({ email, password });
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
        email,
        password,
      });
      // const data = await result.json();
      // const result = await res.data.json();

      if (res.data && res.data.status === 200 && res.data.result) {
        const { token, userExist } = res.data.result;
        token
          ? localStorage.setItem("Jwtoken", token)
          : toast.error("Token Not Found");

        userExist
          ? localStorage.setItem("user", JSON.stringify(userExist))
          : toast.error("User Not Found");
        navigate("/home");
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  //   token
  //   ? localStorage.setItem("Jwtoken", token)
  //   : toast.error("Token Not Found");

  return (
    <div className="  w-full bg-black">
      <div className=" grid place-items-center h-screen  ">
        <div className="grid place-items-center h-[70%] border-2 border-[#E63946] shadow-lg shadow-[#E63946] w-[40%]">
          <div className="">
            <TbLockSquareRoundedFilled className="text-4xl text-purple-600 " />
          </div>
          <div className="">
            <h1>Sign in</h1>
          </div>
          <div className="w-[80%]">
            <div className="">
              <input
                type="text"
                placeholder="Enter Email"
                className=" h-[40px] w-[100%] rounded-md pl-3 border-2 border-black"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="py-5">
              <input
                type="password"
                placeholder="Enter Password"
                className=" h-[40px] w-[100%] rounded-md pl-3  border-2 border-black"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <button
                className="w-[100%] h-[40px] border-2 border-blue-500 bg-sky-700 rounded-lg "
                onClick={Submit}
              >
                {" "}
                Login
              </button>
            </div>
            <div className="flex py-5">
              <div className="w-[40%] text-left text-sm text-red-600"></div>
              <div className="w-[60%] text-right text-sm text-red-600">
                <NavLink to="/signup">Don't have an Account? Sing Up.</NavLink>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Signin;
