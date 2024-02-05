import React from "react";
import { Link } from "react-router-dom";

const MinAbout = () => {
  return (
    <div className="pt-20 ">
      <div className="pt-2  lg:pt-20">
      <div className="flex items-center justify-center">
      <img
        className="w-[150px]"
        src="/src/components/Photo/Image/20240106_225436.png"
        alt=""
      />
      </div>
      
      <h1 className=" text-center text-xl lg:text-6xl text-white">Sholak Victoria Secondary School</h1>
      <h1 className=" text-center text-lg lg:text-2xl ml-5 mr-5 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima amet numquam fugit accusamus delectus itaque repellat magnam! Numquam libero voluptas ipsa earum velit in excepturi minima cum dolore doloremque officiis nobis illum nisi nam, unde id blanditiis esse odio et facilis consectetur. Cupiditate dolores voluptas porro, maxime hic similique vero.</h1>

      <h1 className="text-center"><Link to="/about"><button className=" text-blue-800 text-2xl font-bold p-3 pb-3 rounded-2xl mt-10 bg-white hover:bg-transparent transition hover:text-white hover:border-2 hover:border-white">Learn More</button></Link></h1>
      
    </div>
    </div>
  );
};

export default MinAbout;
