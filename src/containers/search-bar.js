import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/index'
class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <div>
      <div className="row">
      <img className="col-xs-1" src="./icon.png" />
      <h1 className="col-xs-4" id="head">Weather Forecast</h1>
      </div>
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
        placeholder="Get a five day forecast for a city"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange}
        id="sbar"
        />
        <span className="input-group-btn" id="bspan">
          <button className="btn btn-secondary btn-success" id="button" type="submit">Submit</button>
          </span>
      </form>
      </div>
    );

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);
