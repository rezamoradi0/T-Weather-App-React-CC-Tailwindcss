import React, { Component } from "react";
import VideoBg from "./VideoBg";
import Weather from "./Weather";
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.videoRain = new Map();
    
    //Rain Day
    this.videoRain.set(0, "/videos/rain-1.mp4");
    this.videoRain.set(1, "/videos/rain-2.mp4");
    this.videoRain.set(2, "/videos/rain-3.mp4");
    this.videoRain.set(3, "/videos/rain-4.mp4");
    this.videoRain.set(4, "/videos/rain-5.mp4");
    this.videoRain.set(5, "/videos/rain-6.mp4");

    //Clear Day
    this.clear_day_start = 6;
    this.clear_day_end = 8;
    this.videoRain.set(6, "/videos/day-01.mp4");
    this.videoRain.set(7, "/videos/day-02.mp4");
    this.videoRain.set(8, "/videos/day-03.mp4");

    //Clouds
    this.cloud_day_start = 9;
    this.cloud_day_end = 10;
    this.videoRain.set(9, "/videos/clouds-01.mp4");
    this.videoRain.set(10, "/videos/clouds-02.mp4");

    this.state = {
      nowStatus: "clear",
      videoLink: "/videos/rain-6.mp4",
   
    };
    this.PublicNowStatus = (icon) => {
      this.setState({ nowStatus: icon }, () => {
        this.PublicGetVideo(icon);
      });
    };
    this.PublicGetVideo = (icon) => {
      console.log(icon + " icon");
      let theLink = "";
      switch (icon) {
        case "cloud":
          case "cloudy":
        case "partly-cloudy-day":
          theLink = this.videoRain.get(
            Math.floor(
              Math.random() * (this.cloud_day_end - this.cloud_day_start + 1) +
              this.cloud_day_start
            )
          );
          break;
          case "clear-day":
            theLink = this.videoRain.get(
              Math.floor(
              Math.random() * (this.clear_day_end - this.clear_day_start + 1) +
              this.clear_day_start
              )
            );
            break;
        default:
          theLink = this.videoRain.get(0);
      }

      this.setState({ videoLink: theLink }, () => {
        console.log(this.state.videoLink);
      });
    };
  }

  render() {
    return (
      <div className="w-sceen h-screen">
        {/* <div className='h-full w-4/6 m-auto rounded-md overflow-hidden relative '> */}
        <div className="h-full w-full m-auto rounded-md overflow-hidden relative ">
          {console.log("MAINPAGE")}
          <VideoBg VideoLink={this.state.videoLink} />
          <Weather
            VideoLink={this.state.videoLink}
            SetStatus={this.PublicNowStatus}
          />
        </div>
      </div>
    );
  }
}

export default MainPage;
