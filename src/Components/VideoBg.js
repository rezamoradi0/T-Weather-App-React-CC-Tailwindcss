import React, { Component } from 'react';

class VideoBg extends Component {
      
    render() { 
        return (
        
            <video key={this.props.VideoLink} width="1280" height="1024" autoPlay muted loop className='w-full h-full object-cover blur-sm object-center absolute top-0 right-0'>
               
            <source src={this.props.VideoLink} type="video/mp4"/>
            </video>
            
       
           
            
        );
    }
}
 
export default VideoBg;