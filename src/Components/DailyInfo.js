import React, { Component } from 'react';
class DailyInfo extends Component {

    render() { 
        let {icon,date,status,min,max}=this.props;
        return (
            <div className='flex w-full text-white mt-4 justify-between items-center h-8 '>
                <span className='w-1/5 p-[5px]'>
                <span className='text-base  w-full bg-gray-800 bg-opacity-20 flex justify-center items-center  rounded-lg aspect-square'><i className={`fa-thin fa-${icon}`}></i></span>

                </span>
                <div className='flex flex-col w-3/5  justify-between border-r-[1px] pr-1 mr-1 '>
                  <span className='text-[13px]'>{date}</span>
                  <span className='text-[13px] text-gray-100'>{status}</span>
                </div>
            
                <div className='flex flex-col w-max items-center justify-between'>
                    <span className='text-xs'>{min}°</span>
                    <span className='text-xs'>{max}°</span>
                </div>
            </div>
        );
    }
}
 
export default DailyInfo;