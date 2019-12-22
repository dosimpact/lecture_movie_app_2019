import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="movie">
          <div className="movie__data">
            <div className="movie__title">{location.state.title}</div>
            <div className="movie__year">{location.state.year}</div>
            <div className="movie__summary">{location.state.summary}</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
