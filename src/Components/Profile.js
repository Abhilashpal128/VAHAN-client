import React, { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData);
  }, []);

  return (
    <div className="text-black md:py-44 py-20 flex justify-center items-center">
      <div className="md:w-[80%] w-[95%] h-[70%] md:py-32 py-10 border-2 border-black rounded-xl shadow-lg shadow-black flex flex-col md:flex-row items-center justify-center gap-10  ">
        <div className=" flex justify-center">
          <div className="w-[200px] h-[150px] bg-slate-400">
            <h1 className="text-9xl text-center ">
              <span className="flex justify-center items-center ">
                <h1 className="capitalize"> {user?.fname?.charAt(0)}</h1>
                <h1 className="capitalize">{user?.lname?.charAt(0)}</h1>
              </span>
            </h1>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold flex gap-6">
            {" "}
            <span>Name:</span>
            <span>
              {user?.fname} {user?.lname}
            </span>
          </h1>
          <h1 className="text-2xl font-bold flex gap-6">
            <span>Email :</span> <span>{user?.email}</span>
          </h1>
          <h1 className="text-2xl font-bold flex gap-6">
            <span>Contact :</span> <span>{user?.contact}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Profile;
