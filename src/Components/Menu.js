import React, { Component } from "react";
import "./../Sass/Main.scss";
import DailyInfo from "./DailyInfo";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state={
      degreeVisable:true,
      forcastDays:5,
      selectedForcast:1
    }
    this.inputRef = React.createRef();
    this.GetDateTex=(numbericDate)=>{
      // date="Fridy , 21 April"
      let date_=new Date(numbericDate);
      let monthName=date_.toLocaleDateString('default',{month:'long'});
      let dayName=date_.toLocaleDateString('default',{weekday:'short'});
      let dayNumber=date_.toLocaleDateString('default',{day:"2-digit"});

      return `${dayName} , ${dayNumber} ${monthName}`;
    }
    this.FarenhitToCentigrad=(Farenhit)=>{
        let centiGrad=Math.round((Number(Farenhit) -32 ) * (5/9));
      return centiGrad;
    }
    this.GetWindDir=(windDirNumber)=>{
      if(windDirNumber>=300&&windDirNumber<=360||windDirNumber>=0&&windDirNumber<=30){
        return "East";
      }
      else   if(windDirNumber>=30&&windDirNumber<=60){
        return "Northeast";
      }
      else   if(windDirNumber>=60&&windDirNumber<=120){
        return "North";
      }
      else   if(windDirNumber>=120&&windDirNumber<=150){
        return "Northwest";
      }
      else   if(windDirNumber>=150&&windDirNumber<=210){
        return "West";
      }
      else   if(windDirNumber>=210&&windDirNumber<=240){
        return "Southwest";
      }
      else   if(windDirNumber>=240&&windDirNumber<=300){
        return "South";
      }
      else   if(windDirNumber>=300&&windDirNumber<=330){
        return "Southeast";
      }
      else {
        return "WrongCalcut : "+windDirNumber;
      }
    }
    
  }
  render() {
    return (
      <div className="w-1/4 backdrop-blur-sm py-7 px-3">
        {/* MenuHolder */}
        <div className="w-full h-full outline-none border-none">
          {/* select Holder */}
          <div className="select-holder relative items-center flex px-1 py-[2px] border-gray-400 font-semibold bg-gray-900 bg-opacity-10 border-[1px] rounded-lg text-white ">
            <span className="pr-2 pl-1">
              {" "}
              <i className="fa-light fa-location-dot"></i>
            </span>
            <input
              ref={this.inputRef}
              className="w-full bg-transparent capitalize appearance-none outline-none"
              placeholder="Enter Your City..."
              onClick={()=>{
                this.inputRef.current.value="";
              }}
              onKeyDown={(event)=>{
               if( event.key=="Enter"){
                this.props.SearchCity(this.inputRef.current.value);
                this.setState({degreeVisable:false});
               }
              }}
            ></input>
            <span
              onClick={() => {
                // console.log(this.inputRef.current.value);
                this.props.SearchCity(this.inputRef.current.value);
                this.setState({degreeVisable:false});
                
              }}
         
              className="px-2  text-xs border-l-[1px] border-white border-opacity-40"
            >
              <i className="fa-light fa-magnifying-glass-location"></i>
            </span>
            <div className={`transition-all duration-500 absolute flex flex-col justify-start -bottom-1/2 left-0 rounded-se-xl translate-y-full w-full p-2 border-gray-500 border-[1px] overflow-hidden max-h-fit ${this.state.degreeVisable?" hidden":"block"}`}>
              
            {this.props.SelectedCitys.map((city) =>{
              return <div onClick={() =>{
                this.props.SelectCity(city);
                this.setState({degreeVisable:true});
                this.inputRef.current.value=city.name+","+ city.country;
              }}
               className="bg-white bg-opacity-20 h-8 mb-4 last:mb-auto rounded-md px-2 text-sm flex justify-between items-center" key={city.lat+Math.random()}> <span>{city.name}</span> <span className="text-black">{city.country}</span> </div>
            })}
            </div>
          </div>
          {/*End select Holder */}

          {/* Degree Holder */}
          <div className={ `text-center text-white flex flex-col w-full mt-9 mb-5 ${this.state.degreeVisable?"":" invisible"}`}>
            <span className="text-7xl font-bold">{this.props.Weather!=null&&this.FarenhitToCentigrad(this.props.Weather.currentConditions.temp)}°C</span>
            <span className="text-gray-200 mt-3 text-sm">
              {" "}
              <i className="fa-regular fa-wind text-white"></i> { this.props.Weather!=null&&this.GetWindDir(this.props.Weather.currentConditions.winddir)}. {this.props.Weather!=null&&this.props.Weather.currentConditions.windspeed } km<span  className="text-[9px] align-top font-serif">/</span>h
            </span>
          </div>
          {/* End Degree Holder */}
          <hr className="opacity-40" />
          {/* All Forcast */}
          <div className="mt-5 w-full">
            <span className="my-5 block text-white font-semibold tracking-widest">
              The Next Days Forcast
            </span>
            <div className="forcast-days w-full flex justify-evenly">
            <span onClick={()=>{
              this.setState({selectedForcast:1,forcastDays:5})
            }} className={`cursor-pointer px-2 py-1 bg-opacity-30 rounded-md text-white text-xs font-medium ${this.state.selectedForcast==1?"bg-gray-600":""}`}>
                5 days
              </span>
              <span onClick={()=>{
              this.setState({selectedForcast:2,forcastDays:10})
            }} className={`cursor-pointer px-2 py-1 bg-opacity-30 rounded-md text-white text-xs font-medium ${this.state.selectedForcast==2?"bg-gray-600":""}`}>
                10 days
              </span>
              <span onClick={()=>{
              this.setState({selectedForcast:3,forcastDays:15})
            }} className={`cursor-pointer px-2 py-1 bg-opacity-30 rounded-md text-white text-xs font-medium ${this.state.selectedForcast==3?"bg-gray-600":""}`}>
                15 days
              </span>
            </div>
          </div>

          {/* Forcast Status Days */}
          <div className="w-full flex flex-col">
          
            {this.props.Weather&& this.props.Weather.days.slice(0,this.state.forcastDays).map((day)=>{
                let _date= this.GetDateTex(day.datetime);
                  
              return  <DailyInfo
              
              key={day.datetimeEpoch}
              icon={this.props.IconDic.get(day.icon)}
              date={_date}
               status={day.conditions}
              //status={day.icon}
              min={this.FarenhitToCentigrad(day.tempmin)}
              max={this.FarenhitToCentigrad(day.tempmax)}
            />
            })}
            {/* <DailyInfo
              icon="cloud-sun-rain"
              date="Fridy , 21 April"
              status="Sun and Rain"
              min="10"
              max="18"
            />
            <DailyInfo
              icon="clouds"
              date="Sundaty , 22 April"
              status="Heavy Rain"
              min="11"
              max="19"
            />
            <DailyInfo
              icon="snowflake"
              date="Mondate , 23 April"
              status="Heavy Snow"
              min="10"
              max="17"
            />
            <DailyInfo
              icon="cloud-bolt"
              date="Satersday , 24 April"
              status="Bolt"
              min="8"
              max="13"
            />
            <DailyInfo
              icon="sun"
              date="Tulseday , 25 April"
              status="Sunny"
              min="9"
              max="15"
            /> */}
          </div>
          {/*End Forcast Status Days
  {/* End All  Forcast */}
        </div>
        {/*End MenuHolder */}
      </div>
    );
  }
}

export default Menu;
