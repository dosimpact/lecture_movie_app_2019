import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

/*

  return <div>{this.state.isLoading ? "Loading.." : "We are ready"}</div>;
  return 

  최신 ES6 문법으로 다음과 같이 쓴다.
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading.." : "We are ready"}</div>;

  - 이거는 js문법이다. setTimeout(callback함수,ms초 뒤에));
    setTimeout(() => { this.setState({ isLoading: false }); } ,  6000);

  - state에 미래에 쓸 변수를 미리 적어두는것은 허용, 
    그리고 setState에서도 새로은 변수를 추가하는것도 허용.!
  
  js에서 데이터 API를 받아오는 방법은 fetch가 있다. 
  다른 방법은 Axios 라는 것.
  npm i axios

  - YTS에서 만든 API를 이용할 거임.
  https://yts.lt/api

  yts는 불법적인 영화 업로드를 하기떄문에 api주소가 항상 바뀐다.
  니코가 만든 프록시를 쓰자.
  https://github.com/serranoarevalo/yts-proxy
  https://yts-proxy.now.sh/list_movies.json

  API정보는 불러오는데 느릴수있다. 그래서 다 불러올때 까지 기달려야한다. 
  비동기 함수를 만들어서..다음과 같은함수가 끝날때까지 기다려야 한다.
    
    getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json"); //not fast !!
  };

  - ES6 문법으로 다음처름 바꿀 수 있다.

      const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json"); //not fast !!
      console.log(movies.data.data.movies);

      const {data: {  data: { movies }  } } = await axios.get("https://yts-proxy.now.sh/list_movies.json"); //not fast !!

  - react js 덕분에 스타일이 매우 쉬워졌다.
  style component라는걸 쓴다. 무료 강좌 참고!!

  - 스타일 컴포넌트
  import "./App.css";
  각 js의 이름에 맞는 컴포넌트를 만들어라.

  - class 컴포넌트 안에  html의 class를 정의하면, JSX는 혼란스러워한다.
  그래서 html class => html className이라고 써준다.

*/
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    ); //not fast !!
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
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
}
export default App;
