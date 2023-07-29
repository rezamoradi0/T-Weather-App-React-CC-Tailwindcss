import React, { Component } from 'react';
import HourlyInfo from './HourlyInfo'
class HorizontalSlider extends Component {
  constructor(props){
    super(props);

  }
    render() { 
        return (
        <div className='min-w-full h-full border-red-400  overflow-x-hidden text-white flex flex-row'>
           <HourlyInfo time="07:00" icon="fa-light fa-cloud-bolt" degree ="10"/>
           <HourlyInfo time="08:00" icon="fa-light fa-cloud-hail-mixed" degree ="10"/>
           <HourlyInfo time="09:00" icon="fa-light fa-cloud-showers-heavy" degree ="11"/>
           <HourlyInfo time="10:00" icon="fa-light fa-cloud-hail-mixed" degree ="12"/>
           <HourlyInfo time="11:00" icon="fa-light fa-cloud-sun-rain" degree ="14"/>
           <HourlyInfo time="12:00" icon="fa-light fa-cloud-rainbow" degree ="18"/>
           <HourlyInfo time="13:00" icon="fa-light fa-cloud-sun-rain" degree ="18"/>
           <HourlyInfo time="14:00" icon="fa-light fa-cloud-sun-rain" degree ="20"/>
           <HourlyInfo time="15:00" icon="fa-light fa-cloud-sun-rain" degree ="20"/>
        </div>);
    }
}
 
export default HorizontalSlider;