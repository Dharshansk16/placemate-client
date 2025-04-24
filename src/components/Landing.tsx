import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { FaChartPie } from "react-icons/fa";
import SearchBar from "@/_components/SearchBar";
import CompanyCard from "@/_components/CompanyCard";

const Landing = () => {
  return (
    <section className="mx-10 my-6">
      <div className="flex p-2 h-auto w-[1024] justify-between items-center">
        <div className="flex justify-start items-center">
          <FaLocationDot className="text-4xl" />
          <h4 className="font-bold px-2 py-2 text-4xl">PLACEMATE</h4>
        </div>

        <div className="flex gap-4 px-4 py-2 hover:cursor-pointer ">
          <p className="text-2xl hover:scale-95 transition-all">
            Explore Companies
          </p>
          <p className="text-2xl hover:scale-95 transition-all">
            Join the community
          </p>
          <button className="bg-orange-500 text-lg text-white rounded-xl p-1 w-[90px] ml-4  hover:bg-orange-600 hover:scale-95 transition-all">
            Login
          </button>
        </div>
      </div>

      <div className="flex max-w-[700px] flex-wrap h-auto mt-8 mb-4">
        <h3 className="text-6xl font-bold">
          Crack Your Dream Job with Placemate
        </h3>
        <p className="mt-5 text-2xl">
          Get insights into top companies, interview tips and real student
          experiences.
        </p>
      </div>

      <SearchBar
        div_variant="bg-white w-1/2 rounded-2xl h-auto p-4 flex items-center border-2 border-gray-300"
        input_variant="bg-transparent h-4 text-lg w-full ml-5 border-none focus: outline-none"
        placeholder="Search for companies"
      />

      <div className="mt-6">
        <Button className="bg-orange-500 w-[15%] h-12 rounded-2xl text-xl hover:bg-orange-600 text-white hover:scale-95 transition-all">
          Get Started
        </Button>
      </div>
      <div className="w-full flex flex-row">
        <div className="w-[50%] flex justify-start items-center mt-3 gap-4">
          <CompanyCard
            companyName="Google"
            description="Learn about the culture"
            icon={FcGoogle}
          />
          <CompanyCard
            companyName="Apple"
            description="Explore career opportunities"
            icon={FaApple}
          />
          <CompanyCard
            companyName="Amazon"
            description="Discover hiring process"
            icon={FaAmazon}
          />
        </div>
        <div className="w-[650px] flex h-8 flex-col ml-10 mt-6 ">
          <div className="text-lg font-semibold flex">
            <h4>Featured Companies</h4>
          </div>
          <div className="w-auto flex">
            <div className="border-2 border-gray-400 w-[300px] h-auto mt-2 rounded-xl p-3 flex items-center cursor-pointer hover:scale-95 transition-all">
              <IoIosListBox className="flex text-6xl" />
              <div className="mx-3 my-2">
                <h3 className="font-semibold text-xl">Interview Process</h3>
                <p className="text-base">Labour accress</p>
              </div>
            </div>

            <div className="border-2 border-gray-400 w-[300px] h-auto mt-2 rounded-xl p-3 flex items-center ml-4 cursor-pointer hover:scale-95 transition-all">
              <FaChartPie className="flex text-6xl" />
              <div className="mx-3 my-2">
                <h3 className="font-semibold text-xl">Work Culture</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
