import React, { Component } from 'react';
import HorizontalSlider from './HorizontalSlider';
class Information extends Component {
   
    render() { 
        return (<div className='w-3/4 h-full justify-end flex flex-col align-bottom p-7 relative border-r-2 border-r-gray-300  border-opacity-50'>
            {/* MainStatus */}
            <div className='main-status capitalize  text-7xl text-right my-9'>
              <span className='main-status-text bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 font-semibold'>
                Heavy Rain
                </span>
            </div>
            <span className='bg-white opacity-30 h-0.5 border-none w-full'> </span>
            {/*HourlyStatus */}
            <div className='hour-status min-h-[120px] mt-5 overflow-y-hidden'>
                <HorizontalSlider/>
            </div>
            <div className='absolute top-7  font-medium right-10 text-white  py-1 px-4 rounded-xl backdrop-blur-[1px] bg-gray-900 bg-opacity-10'>
                <span className='mr-2'> 21 April 2023</span>
                <span className='ml-2 border-l-2 pl-3'>11:00</span>
            </div>
        </div>);
    }
}
 
export default Information;