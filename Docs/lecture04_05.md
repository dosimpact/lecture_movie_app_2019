# 4 Making the Movie App

# 4.0 Fetching Movies from API

- fetch대신에 axios를 사용할 것이다.! | npm install axios
- 비동기함수 설정하기 -> async(함수앞에서 이건 비동기함수야) + await(이 부분을 기달려야되.)
- yts라는 불법 영화 토렌트 사이트 이용할것임. API서비스를 제공하지만, 매번 주소가 바뀌기에 니코가 프록시를 만들어 버림.
  [https://github.com/serranoarevalo/yts-proxy](https://github.com/serranoarevalo/yts-proxy)
  [https://yts.lt/api](https://yts.lt/api)

```js
import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
```

# 4.1 Rendering the Movies

- ES6문법으로 json객체 참조하는 방법 {data:{data:{movies}}}
- GET API 영화리스트 받아오기 ?sort_by=rating

```js
import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    //const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //movies.data.data.movies에 리스트있는데 ES6문법으로 다음과 같이 씀
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
      </div>
    );
  }
}
```

- 아직은 낯선 ES6 문법임, {}로 객체속성 쏙 빼오는거!!

```js
getMovies = async () => {
  const {
    data: {
      data: { movies }
    },
    data: {
      data: { limit }
    }
  } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  console.log(movies);
  console.log(limit);
};
```

- Movie.js 컴포넌트 작성

```js
import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  return <h4>{title}</h4>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
```

# 4.2 Styling the Movies

- Movie 컴포넌트 HTML 작성 | CSS 임포트 가능 JS에서!!! html이 아니라?!!

```js
import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie__data">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <p class="movie__summary">{summary}</p>
      </div>
    </div>
  );
}
```

- App도 마찬가지고 HTML 꾸며주기 | CSS 임포트 in JS!!

```js
import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
...
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
```

# 4.3 Adding Genres

- JSX 사용할때, html코드에서의 class랑 for는 js랑 충돌이 일어나기때문에, html이 양보를 해야함. => class|className, for|htmlFor
- 장르 추가 | 사실 map 함수는 indexnumber를 같이 반환한다. 이를 가지고 컴포넌트의 key로 이용하자.

```js
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
```

```js
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
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
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
```

# 4.4 Styles Timelapse

# 4.5 Cutting the summary

```
const str = "ABCDEF;
str.slice(0,3); // ABC
```

# 5.0 Deploying to Github Pages

- npm i gh-pages | gh-pages를 통해 빠르고 쉽게 깃허브에 베포하기
- public폴더 부분의 index.html 바꾸기 | title이랑 아이콘 등등

- 1.패키지.json폴더의 homapage부분 추가하기. https://{아이디이름}.github.io/{레포이름}/
- 2.npm run deploy -> predeploy를 자동 실행(pre접두 ~) ->| build를먼저하고 ->| gh-pages -d build (디렉터리 빌드) 가 실행된다.!!

```
{
...
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
...
  "homepage": "https://dosimpact.github.io/movie_app_2019/"
}

```
