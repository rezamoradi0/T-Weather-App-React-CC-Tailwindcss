import React, { Component } from 'react';
import Menu from './Menu';
import Information from './Information';
class Weather extends Component {
   
    render() { 
        return (<div className='w-11/12 h-9/10 border-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border-gray-200 border-opacity-20 overflow-hidden' >
              <div className='absolute z-10 w-full h-full flex'>
                <Information/>
                <Menu/>
            </div>
            <video width="1280" height="1024" loop autoPlay muted className='absolute object-cover object-center w-full h-full scale-115'>
            <source src="/videos/rain-1.mp4" type="video/mp4"/>
            </video>
       
        
        </div>);
    }
}
 
export default Weather;