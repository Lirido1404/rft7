import React from "react";
import UserForm from "../(components)/UserForm";

function page() {
  return (
    <div className="relative overflow-hidden">
      
      
      <div className=" absolute right-12 -top-12 flex h-full bandrot">
        <div className="h-full w-12 divgrad1"></div>
        <div>
          <div className="h-full w-12 divgrad2"></div>
        </div>
      </div>

      <div className=" absolute left-24 top-0 flex h-full">
        <div className="h-full w-12 bg-black"></div>
        <div>
          <div className="h-full w-12 bg-gray-200"></div>
        </div>
      </div>
      <img
        src="/Images/merces2.png"
        className="h-[400px] absolute right-0 bottom-0 imgmerctune"
        alt=""
      />
      <img
        src="/Images/bmwtune.png"
        className="h-80 absolute left-0 top-0 imgbgmtune"
        alt=""
      />
      <UserForm />
      
    </div>
  );
}

export default page;
