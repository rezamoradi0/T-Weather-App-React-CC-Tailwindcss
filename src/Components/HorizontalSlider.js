import React, { PureComponent } from "react";
import HourlyInfo from "./HourlyInfo";
class HorizontalSlider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedHour: "00",
      mouseIsDawn:false,
      lastMousePosX:null
    };
    this.HorizontalSliderRef=React.createRef();
  
   
  }
  
 MouseClicks = (event) => {
    this.setState(prevState=>( { mouseIsDawn:!prevState.mouseIsDawn}),()=>{console.log("this mouse down  : " + this.state.mouseIsDawn);});
   if(event.touches==null||event.touches.length<1){
    this.setState({lastMousePosX : event.clientX});
   }else {
    this.setState({lastMousePosX : event.touches[0].clientX});
   }
  };
  componentDidMount() {
    if (this.props.CurrentDay != null) {
      this.setState({
        selectedHour: this.props.CurrentDay.datetime.slice(0, 2),
      });
    }
  }
  componentDidUpdate() {
    if (this.props.CurrentDay != null) {
      this.setState({
        selectedHour: this.props.CurrentDay.datetime.slice(0, 2),
      });
    }
  }
  FarenhitToCentigrad = (Farenhit) => {
    let centiGrad = Math.round((Number(Farenhit) - 32) * (5 / 9));
    return centiGrad;
  };
  PublicScroll=(x,y=0)=>{
    this.HorizontalSliderRef.current.scrollTo(x, 0);
   
  }
  ChangeScroll = (event) => {
    if (this.state.lastMousePosX == null) {
      this.setState({lastMousePosX : event.clientX});
      console.log("lastMousePosX :" +this.state.lastMousePosX);
    }
    if (this.state.mouseIsDawn) {
      event.currentTarget.scrollBy(this.state.lastMousePosX - event.clientX, 0);
      this.setState({lastMousePosX : event.clientX});
      console.log("Scrolling : "+ this.state.lastMousePosX);
    }
  };
  ChangeScrollTouch = (event) => {
    if (this.state.lastMousePosX == null) {
      this.setState({lastMousePosX : event.touches[0].clientX});
      console.log("lastMousePosX Touches:" +this.state.lastMousePosX);
    }
    if (this.state.mouseIsDawn) {
      event.currentTarget.scrollBy(this.state.lastMousePosX - event.touches[0].clientX, 0);
      this.setState({lastMousePosX : event.touches[0].clientX});
      console.log("Scrolling Touches : "+ this.state.lastMousePosX);
    }
  };
  SaveScroll = (event) => {
    this.setState({lastMousePosX :null});
  };
  ExitMouseOverScroll=(event)=>{
    this.setState({lastMousePosX :null,mouseIsDawn:false});


  }

  render() {
    return (
      <div
        ref={this.HorizontalSliderRef}

        onMouseUp={(e) => this.MouseClicks(e) }
        onTouchStart={(e) =>{ 
          this.MouseClicks(e);
     
        }}

        onMouseDown={(e) => this.MouseClicks(e) }
        onTouchEnd={(e) => {this.MouseClicks(e);
          this.ExitMouseOverScroll(e);

        } }

        onMouseEnter={(event) => {
          this.SaveScroll(event);
        }}
      
        onMouseLeave={(event) => {
          this.ExitMouseOverScroll(event);
        }}
        onMouseMove={(event) => {
          this.ChangeScroll(event);
        }}
        onTouchMove={  (event) => {this.ChangeScrollTouch(event);}}
        className={`scrollbar-hidden select-none snap-mandatory snap-x min-w-full h-full border-red-400  overflow-x-scroll text-white flex flex-row border-0}`}
      >
        {this.props.Today != null &&
          this.props.Today.hours.map((hour) => {
            return (
              <HourlyInfo
               
                time={hour.datetime.slice(0, 5)}
                icon={this.props.IconDic.get(hour.icon)}
                degree={this.FarenhitToCentigrad(hour.temp)}
                selectedHour={this.state.selectedHour}
                key={hour.datetimeEpoch}
                PublicScroll={this.PublicScroll}
              />
            );
          })}
        {/* <HourlyInfo time="07:00" icon="fa-light fa-cloud-bolt" degree ="10"/>
           <HourlyInfo time="08:00" icon="fa-light fa-cloud-hail-mixed" degree ="10"/>
           <HourlyInfo time="09:00" icon="fa-light fa-cloud-showers-heavy" degree ="11"/>
           <HourlyInfo time="10:00" icon="fa-light fa-cloud-hail-mixed" degree ="12"/>
           <HourlyInfo time="11:00" icon="fa-light fa-cloud-sun-rain" degree ="14"/>
           <HourlyInfo time="12:00" icon="fa-light fa-cloud-rainbow" degree ="18"/>
           <HourlyInfo time="13:00" icon="fa-light fa-cloud-sun-rain" degree ="18"/>
           <HourlyInfo time="14:00" icon="fa-light fa-cloud-sun-rain" degree ="20"/>
           <HourlyInfo time="15:00" icon="fa-light fa-cloud-sun-rain" degree ="20"/> */}
      </div>
    );
  }
}

export default HorizontalSlider;
