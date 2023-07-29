import React, { Component } from 'react';
import HourlyInfo from './HourlyInfo'
class HorizontalSlider extends Component {
  constructor(props){
    super(props);

  }
    render() { 
        return (
        <div className='min-w-full h-full border-red-400  overflow-x-hidden text-white flex flex-row'>
           <HourlyInfo/>
           <HourlyInfo/>
           <HourlyInfo/>
           <HourlyInfo/>
           <HourlyInfo/>
           <HourlyInfo/>
           <HourlyInfo/>
           <HourlyInfo/>
           <HourlyInfo/>
           <HourlyInfo/>
           <HourlyInfo/>
           <HourlyInfo/>
           <HourlyInfo/>
           <HourlyInfo/>
           <HourlyInfo/>

        </div>);
    }
}
 
export default HorizontalSlider;