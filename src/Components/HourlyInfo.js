import React, { Component } from 'react';
class HourlyInfo extends Component {
   
    render() { 
        return (
        <div className='flex flex-col  align-middle text-center mr-2 h-full aspect-[3/5] justify-between p-2 border-[1px] border-gray-900 border-opacity-20  rounded-md bg-gray-900 bg-opacity-30 backdrop-blur-[4px]'>
            <span className='border-b-2 border-gray-600 text-xs pb-1 mb-1'>09:00</span>
            <span className='text-2xl bg-gray-400 bg-opacity-20 flex justify-center items-center  rounded-lg aspect-square '><i className="fa-light fa-cloud-sun-rain"></i></span>
            <span className='font-semibold'>   19°C</span>
        </div>
        );
    }
}
 
export default HourlyInfo;