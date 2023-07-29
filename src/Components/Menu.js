import React, { Component } from "react";
class Menu extends Component {
  render() {
    return (
      <div className="w-1/4 backdrop-blur-sm py-7 px-3">
        <div className="w-full h-full outline-none border-none">


        {/* select Holder */}
          <div className="select-holder  items-center flex px-1 py-[2px] border-gray-400 font-semibold bg-gray-900 bg-opacity-10 border-[1px] rounded-lg text-white ">
            <span className="pr-2 pl-1"> <i className="fa-light fa-location-dot"></i></span>
            <select className="w-full bg-transparent capitalize appearance-none outline-none">
              <option className="bg-red-500 w-full" value="tehran">tehran</option>
              <option className="bg-red-500" value="tehran">tehran</option>

              <option className="bg-red-500" value="tehran">tehran</option>

            </select>
            <span className="pr-2 pl-1 text-xs" ><i class="fa-sharp fa-regular fa-chevron-down"></i></span>
          </div>


        </div>
      </div>
    );
  }
}

export default Menu;
