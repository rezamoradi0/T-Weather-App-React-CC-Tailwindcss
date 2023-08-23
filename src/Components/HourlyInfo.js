import React, { PureComponent } from 'react';
class HourlyInfo extends PureComponent {
    constructor(props){
        super(props);
        this.ref_Div=React.createRef();
    }
    componentDidUpdate(){
        if(this.props.selectedHour==this.props.time.slice(0,2)){
            // this.props.PublicScroll()
            console.log("DidMount LeftOffset : " + this.ref_Div.current.offsetLeft);
            this.props.PublicScroll(this.ref_Div.current.offsetLeft);
        }
      
    }
    render() { 
        let {time,icon,degree}=this.props;
        if(this.props.selectedHour!=null){
           // console.log("this.props.selectedHour :"+ this.props.selectedHour);
        }
      
        return (
        <div ref={this.ref_Div}    className={`hour-weather-card snap-left ${this.props.selectedHour==time.slice(0,2)?"selected bg-gray-100 bg-opacity-[0.8] border-white border-opacity-40   border-2 group":"border-opacity-20   border-[1px] border-gray-900  bg-gray-900 bg-opacity-30"} flex flex-col items-center align-middle text-center mr-2 h-full w-fit aspect-[6/10] justify-between p-2  rounded-md bg-gray-900 bg-opacity-30 backdrop-blur-[4px] `}>
            <span className='border-b-2 border-gray-600 text-xs pb-1 mb-1'>{time}</span>
            <span className='w-2/3 text-2xl   bg-gray-400 bg-opacity-20 flex justify-center items-center  rounded-lg aspect-square group-[.selected]:bg-opacity-90 group-[.selected]:bg-gray-500'><i className={`text-lg px-1 py-2 ${icon}`}></i></span>
            <span className='font-semibold'>   {degree}°C</span>
        </div>
        );
    }
}
 
export default HourlyInfo;