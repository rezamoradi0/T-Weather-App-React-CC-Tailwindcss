import React, { Component } from "react";
import "./../Sass/Main.scss"
import DailyInfo from "./DailyInfo";
class Menu extends Component {
  render() {
    return (
      <div className="w-1/4 backdrop-blur-sm py-7 px-3">
        {/* MenuHolder */}
        <div className="w-full h-full outline-none border-none">

        {/* select Holder */}
          <div className="select-holder  items-center flex px-1 py-[2px] border-gray-400 font-semibold bg-gray-900 bg-opacity-10 border-[1px] rounded-lg text-white ">
            <span className="pr-2 pl-1"> <i className="fa-light fa-location-dot"></i></span>
            <select className="w-full bg-transparent capitalize appearance-none outline-none">
              <option className="bg-red-500 w-full" value="tehran">tehran</option>
              <option className="bg-red-500" value="tehran">tehran</option>

              <option className="bg-red-500" value="tehran">tehran</option>

            </select>
            <span className="px-2  text-xs border-l-[1px] border-white border-opacity-40" ><i class="fa-sharp fa-regular fa-chevron-down"></i></span>
          </div>
          {/*End select Holder */}

        {/* Degree Holder */}
        <div className="text-center text-white flex flex-col w-full mt-9 mb-5">
            <span  className="text-7xl font-bold">11°C</span>
            <span className="text-gray-200 mt-3 text-sm"> <i className="fa-regular fa-wind text-white"></i> Northwest, 38.9 km/h</span>
        </div>
             {/* End Degree Holder */}
        <hr className="opacity-40"/>
        {/* All Forcast */}
        <div className="mt-5 w-full">

            <span className="my-5 block text-white font-semibold tracking-widest">The Next Days Forcast</span>
            <div className="forcast-days w-full flex justify-evenly" >
                <span className="cursor-pointer px-2 py-1  bg-gray-600 bg-opacity-30 rounded-md text-white text-xs font-medium">5 days</span>
                <span className="cursor-pointer px-2 py-1 bg-opacity-30 rounded-md text-white text-xs font-medium">14 days</span>
                <span className="cursor-pointer px-2 py-1 bg-opacity-30 rounded-md text-white text-xs font-medium">30 days</span>
              

            </div>
        </div>

        {/* Forcast Status Days */}
        <div className="w-full flex flex-col">
            <DailyInfo icon="cloud-sun-rain" date="Fridy , 21 April" status="Sun and Rain" min="10" max="18"/>
            <DailyInfo icon="clouds" date="Sundaty , 22 April" status="Heavy Rain" min="11" max="19"/>
            <DailyInfo icon="snowflake" date="Mondate , 23 April" status="Heavy Snow" min="10" max="17"/>
            <DailyInfo icon="cloud-bolt" date="Satersday , 24 April" status="Bolt" min="8" max="13"/>
            <DailyInfo icon="sun" date="Tulseday , 25 April" status="Sunny" min="9" max="15"/>
         
        </div>
          {/*End Forcast Status Days
  {/* End All  Forcast */}

        </div>
        {/*End MenuHolder */}



      </div>
    );
  }
}

export default Menu;
