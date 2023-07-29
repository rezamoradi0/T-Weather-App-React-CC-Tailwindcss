import React, { Component } from 'react';

class VideoBg extends Component {
    state = {  } 
    render() { 
        return (
        
            <video width="1280" height="1024" autoPlay muted loop className='w-full h-full object-cover blur-sm object-center absolute top-0 right-0'>
            <source src="/videos/rain-1.mp4" type="video/mp4"/>
            </video>
            
       
           
            
        );
    }
}
 
export default VideoBg;