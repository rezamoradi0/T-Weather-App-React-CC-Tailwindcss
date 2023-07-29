import React, { Component } from 'react';
import VideoBg from './VideoBg';
import Weather from './Weather';
class MainPage extends Component {
    
    render() { 
        return (<div className='w-sceen h-screen'>
            <div className='h-full w-4/6 m-auto rounded-md overflow-hidden relative'>
        
            <VideoBg/>
            <Weather/>
            </div>
        
               
        </div>);
    }
}
 
export default MainPage;