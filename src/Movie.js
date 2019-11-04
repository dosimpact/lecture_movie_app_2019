import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
/*
    - JSX js의 스타일 적용
    <h3 class="movie__title" style={{ backgroundColor: "red" }}>

    - map function은 또다른 키 인자를 너한테 준다.

        <ul className="genres">
          {genres.map(genre => (
            <li className="genres__genre">{genre}</li>
          ))}
        </ul>
        여기서 나오는 id 애러를 해결할 수 있다.


        <ul className="genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        
    - string.slice
    <p className="movie__summary">{summary.slice(0, 180)}...</p>
*/
function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} titel={title}></img>
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
}

Movie.propType = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Movie;
