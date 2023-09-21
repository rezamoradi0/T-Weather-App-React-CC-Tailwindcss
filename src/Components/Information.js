import React, { PureComponent } from "react";
import HorizontalSlider from "./HorizontalSlider";
class Information extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: "00:00",
    };
  }
  componentDidMount = () => {
    setInterval(() => {
      this.GetCurrentTime();
    }, 1000);
  };
  GetDateTex = (numbericDate) => {
    //21 April 2023
    let date_ = new Date(numbericDate);
    let monthName = date_.toLocaleDateString("default", { month: "long" });
    let yearNumber = date_.toLocaleDateString("default", { year: "numeric" });
    let dayNumber = date_.toLocaleDateString("default", { day: "2-digit" });

    return `${dayNumber} ${monthName} ${yearNumber}`;
  };
  GetCurrentDate = () => {
    //21 April 2023
    let date_ = new Date();
    let monthName = date_.toLocaleDateString("default", { month: "long" });
    let yearNumber = date_.toLocaleDateString("default", { year: "numeric" });
    let dayNumber = date_.toLocaleDateString("default", { day: "2-digit" });

    return `${dayNumber} ${monthName} ${yearNumber}`;
  };
  GetCurrentTime = () => {
   // let today = new Date();
   // let secend = today.getSeconds();
    //  let time = today.getHours() + ":" + today.getMinutes().toLocaleString() + ":" +(secend.length<1?("0"+secend).toString():secend);
    //let time = today.getHours() + ":" + today.getMinutes();
    let time = new Date().toLocaleTimeString([], {
      hour: "2-digit" ,
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    this.setState({ currentTime: time });
  };
  render() {
    return (
      <div className={`${this.props.children!=null?"w-full":"w-3/4"} h-full justify-end flex flex-col align-bottom p-7 relative border-r-2 border-r-gray-300  border-opacity-50`}>
        {this.props.children}
      
        {/* MainStatus */}
        <div className="main-status capitalize  text-7xl text-right my-9">
          <span className="main-status-text   bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 font-semibold">
            {this.props.Weather&&this.props.Weather.currentConditions.conditions}
          </span>
        </div>
        <span className="bg-white opacity-30 h-0.5 border-none w-full"> </span>
        {/*HourlyStatus */}
        <div className="hour-status min-h-[120px] mt-5 overflow-y-hidden">
          <HorizontalSlider
          IconDic={this.props.IconDic}
            Today={
              this.props.Weather != null ? this.props.Weather.days[0] : null
               

            }
            CurrentDay={  this.props.Weather != null ? this.props.Weather.currentConditions : null}
          />
        </div>
        <div className="absolute top-7  font-medium right-10 text-white  py-1 px-4 rounded-xl backdrop-blur-[1px] bg-gray-900 bg-opacity-10">
          <span className="mr-2">
            {" "}
            {this.props.Weather != null
              ? this.GetDateTex(this.props.Weather.days[0].datetime)
              : this.GetCurrentDate()}{" "}
          </span>
          <span className="ml-2 border-l-2 pl-3 font-[jet] text-sm font-light">
            {" "}
            {this.state.currentTime}
          </span>
        </div>
      </div>
    );
  }
}

export default Information;
