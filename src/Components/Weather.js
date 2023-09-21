import React, { PureComponent } from "react";
import Menu from "./Menu";
import Information from "./Information";
class Weather extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cityResult: [],
      selectedCity: null,
      selectedCityWeather: null,
      screenSize: window.innerWidth,
    };

    this.IconsDictaionry = new Map();
    this.IconsDictaionry.set("rain", "fa-light fa-cloud-drizzle");
    this.IconsDictaionry.set("clear-day", "fa-light fa-sun-cloud");
    this.IconsDictaionry.set("partly-cloudy-day", "fa-light fa-clouds");
    this.IconsDictaionry.set("partly-cloudy-night", "fa-light fa-cloud-moon");
    this.IconsDictaionry.set("cloudy", "fa-light fa-clouds");
    this.IconsDictaionry.set("clear-night", "fa-light fa-moon-cloud");
    this.apiKey = "295f01115b612a483c5c8f8eb5286e3b";
    this.apiKey2 = "FL2CVURZBAD7RS9ANTMWS7QZL";
    this.apiLimit = "3";
    this.SearchCity = (_cityName) => {
      this.apiCity = `http://api.openweathermap.org/geo/1.0/direct?q=${_cityName}&limit=${this.apiLimit}&appid=${this.apiKey}`;
      this.setState({ cityResult: [] }, () => {
        fetch(this.apiCity)
          .then((result) => result.json())
          .then((jsonRes) => {
            this.setState({ cityResult: jsonRes });
            console.log(jsonRes);
          });
      });
    };
    this.SelectCity = (_city) => {
      this.setState(
        {
          selectedCity: _city,
        },
        () => {
          this.SearchWeather(_city);
          console.log("City Info For Local : " + _city.lat);
          this.SaveUserCity(_city);
        }
      );
    };
    this.SearchWeather = (_cityObj) => {
      this.apiWeather = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${_cityObj.lat},${_cityObj.lon}?key=${this.apiKey2}`;
      console.log("Searcg Weather" + this.apiWeather);
      fetch(this.apiWeather)
        .then((result) => result.json())
        .then((jsonResult) => {
          this.setState({ selectedCityWeather: jsonResult });
          console.log(jsonResult);
          this.props.SetStatus(jsonResult.currentConditions.icon);
        });
    };
    this.SaveUserCity = (_city) => {
      window.localStorage.setItem("city", JSON.stringify(_city));
    };
    this.componentDidMount = () => {
      let promis = new Promise(function (resolve, reject) {
        let city_Info = JSON.parse(window.localStorage.getItem("city"));
        resolve(city_Info);
      });

      promis.then(
        (city_Info) => {
          if (city_Info != null) {
            console.log(city_Info);
            this.SearchWeather(city_Info);
          }
        },
        function (error) {
          console.log(error);
        }
      );
    };
  }
  render() {
    return (
      <div className="w-11/12 h-9/10 border-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border-gray-200 border-opacity-20 overflow-hidden">
        <div className="absolute z-10 w-full h-full flex">
          <Information
            IconDic={this.IconsDictaionry}
            Weather={this.state.selectedCityWeather}
          >
            {this.state.screenSize < 800 ?
             <Menu
             IconDic={this.IconsDictaionry}
             Weather={this.state.selectedCityWeather}
             SearchCity={this.SearchCity}
             SelectedCitys={this.state.cityResult}
             SelectCity={this.SelectCity}
             CustomWidth={"100%"}
           />:null
            }
           
          </Information>
          {this.state.screenSize >= 800 && (
            <Menu
              IconDic={this.IconsDictaionry}
              Weather={this.state.selectedCityWeather}
              SearchCity={this.SearchCity}
              SelectedCitys={this.state.cityResult}
              SelectCity={this.SelectCity}
            />
          )}
        </div>
        <video
          key={this.props.VideoLink}
          width="1280"
          height="1024"
          loop
          autoPlay
          muted
          className="absolute object-cover object-center w-full h-full scale-115"
        >
          <source src={this.props.VideoLink} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Weather;
