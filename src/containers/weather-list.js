import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Sparklines,SparklinesLine} from 'react-sparklines'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'
class WeatherList extends Component {

  renderWeather(cityData) {

    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const {lon, lat} = cityData.city.coord;
    return(
      <tr key={name} id="comp">
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temps} color='red' unit='K'/>
        </td>
        <td>
          <Chart data={pressure} color='blue' unit='hPa'/>
        </td>
        <td>
          <Chart data={humidity} color='black' unit='%'/>
        </td>
      </tr>
    );
  }

  render() {
    return(
      <table className="table table-hover">
        <thead style={{border : "none"}}>
        <tr>
           <th>City</th>
           <th>Temperature K (Kelvin)</th>
           <th>Pressure hPa (High Pressure Air)</th>
           <th>Humidity % (Percentage)</th>
        </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>

    );
  }
}

function mapStateToProps({weather}) {
  return ({weather }); //ES6
}


export default connect(mapStateToProps)(WeatherList);
