import React, { Component } from "react";
import { connect } from "react-redux";

import { GOOGLE_MAP_API_KEY } from "../secrets/secrets";
import Graph from "./Chart";
import MapView from "./Map";

class WeatherList extends Component {
  renderWeather(cityData) {
    console.log("City Data: ", cityData);
    if (cityData.hasOwnProperty("city")) {
      const name = cityData.city.name;
      const temps = cityData.list.map(weather => weather.main.temp);
      const pressures = cityData.list.map(weather => weather.main.pressure);
      const humidities = cityData.list.map(weather => weather.main.humidity);
      const { lon, lat } = cityData.city.coord;
      return (
        <tr key={name}>
          <td>
            <MapView
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `200px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              lat={lat}
              lng={lon}
              isMarkerShown={true}
            />
          </td>
          <td>
            <Graph data={temps} color="orange" units="k" />
          </td>
          <td>
            <Graph data={pressures} color="green" units="hPa" />
          </td>
          <td>
            <Graph data={humidities} color="black" units="%" />
          </td>
        </tr>
      );
    } else {

    }
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ weather }) => ({ weather });

export default connect(mapStateToProps, null)(WeatherList);
