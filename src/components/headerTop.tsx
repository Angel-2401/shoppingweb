import React from "react";

import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";

const headerTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block"> 
    <div className="container py-4">
    <div className="flex justify-between items-center">
       <div className="hidden lg:flex gap-1">
<div className="header_top_icon_wrapper">
<IoLogoFacebook />
</div>
<div className="header_top_icon_wrapper">
<IoLogoInstagram />
</div>
<div className="text-gray-500 ml-[500px] text-[12px]"> 
  <b>FREE SHIPPING</b> THIS WEEK OVER -2000
</div>
<div className="flex gap-4">
  <select
  className="text-gray-500 ml-[200px] text-[12px] w-[70px]"
  name="currency"
  id="currency">
    <option value="USD $">USD $ </option>
    <option value="INR">INR</option>
  </select>
  <select  className="text-gray-500 text-[12px] w-[80px]"
  name="language"
  id="language">

    <option value="English">English</option>
    <option value="Hindi">Hindi</option>
  </select>

   </div> 
</div>
       </div>
    </div>
    </div>
  ); 
};

export default headerTop;
