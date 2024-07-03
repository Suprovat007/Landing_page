import React from "react";
import { heroImg } from "../assets";
import { FaSearch } from "react-icons/fa";


const Hero = () => {
  return (
    <div className=" w-full bg-white py-24">
      <div className=" md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] p-4 md:px-0">
        <div className=" flex flex-col justify-start gap-4">
          <p className=" py-2 text-2xl uppercase text-[#20B486] font-medium">
            Start to Success
          </p>
          <h1 className=" md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold">
            Access to <span className=" text-[#20B486]">5000+</span> Courses
            from <span className=" text-[#20B486]">300</span> Instructors &
            Institutions
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Various versions have evolved over the years, sometimes by accidents
          </p>
          <form className=" bg-white border-2 focus:border-none max-w-[500px] p-2 input-box-shadow rounded-md flex ">
            <input
              className=" bg-white w-full p-2 placeholder-custom-green"
              type="text"
              placeholder="What do you want to learn?"
            />
            <button className=" text-gray-500 text-2xl">
              <FaSearch/>
            </button>
          </form>
        </div>
        <img src={heroImg} className=" md:order-last order-first" />
      </div>
    </div>
  );
};

export default Hero;
