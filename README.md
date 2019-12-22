[ReactJS 1](https://dosimpact.github.io/movie_app_2019/)

# ReactJS 1

[React.JS 인트로 강좌 링크](https://academy.nomadcoders.co/courses/216871/lectures/10881272)

# 환경 설치

1. node.js 사이트 가서 node.js 설치하기  
   확인 node -v  
   확인 npm -v
2. npx 설치하기
   npm install npx -g
3. npm 업데이트 하기  
   npm install -g npm

```js
PS C:\Users\Dos\Desktop\Projects\NodeJS1> npm -v
6.12.1
PS C:\Users\Dos\Desktop\Projects\NodeJS1> node -v
v12.13.0
PS C:\Users\Dos\Desktop\Projects\NodeJS1> npx -v
6.12.1
PS C:\Users\Dos\Desktop\Projects\NodeJS1> git --version
git version 2.23.0.windows.1
PS C:\Users\Dos\Desktop\Projects\NodeJS1>
```

# 1.0 Creating your first React App

- why react.js  
  많은 회사가 react.js를 사용한다. 페이스북이 만들고 있고, 많은 돈과 사람이 투자된다. 빵빵혀~
  리액트는 자바스크립트이므로 리액트가 없어진다 하더라고 수준높은 js개발자가 되 있을것이다.

- Webpack, Babel  
  react을 이용해서 아름답고 섹시한 웹를 만들수 있으나, 몇몇 멍청한 브라우저떄문에 이를 어리석은 코드로 바꿔주어야 한다.  
  하지만 이 단계를 생략한다. create-react-app 하나면 가능!

- 리액트 개발 서버 시행하기.

```js
npx create-react-app moive_app_2019
npm start
```

# 2 JSX & Props

# 2.0 Creating your first React Component

- 컴포넌트는 HTML을 반환하는 함수이다.
- js와 HTML의 이러한 관계를 JSX | JSX는 리액트에서만

- App.js에 하나의 컴포넌트(보통 App.js)만 랜더링 해야 한다. 그래서 App.js에서 최종적으로 컴포넌트를 합친다.

```js
import React from "react"; //반드시 임포트해야 함수를 컴포넌트로 인지
function Potato() {
  //함수 이름은 대문자 | 컴포넌트는 HTML를 반환함.
  return <h3>I love potato</h3>;
}
export default Potato; // 익스포트 해주어야지 사용한다는 의미.
```

```js
import React from "react";
import Potato from "./Potato";

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Potato /> //컴포넌트 삽입
    </div>
  );
}
export default App;
```

# 2.1 Reusable Components with JSX + Props

- 컴포넌트는 꼭 분할 병합을 안해도 된다

```js
import React from "react";
import Potato from "./Potato";
function Potato() {
  //함수 이름은 대문자 | 컴포넌트는 HTML를 반환함.
  return <h3>I love potato</h3>;
}
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Potato /> //상위 컴포넌트 삽입
    </div>
  );
}
export default App;
```

- 컴포넌트는 함수처럼 변수를 주고 HTML을 리턴한다.

```js
import React from "react";

function Food(props) {
  return <h1>I like {props.favourite}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Potato />
      <Food favourite="kimchi" isgood={true} related={["danmu", "bibiam"]} />
      <Food favourite="ramen" />
    </div>
  );
}
```

-ES6 의 최신문법으로 변환가능 객체{key} 형태로 받을수 있따.

```
import React from "react";

function Food({favourite}) {
  return <h1>I like {favourite}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Potato />
      <Food favourite="ramen" />
    </div>
  );
}
```

# 2.2 Dynamic Component Generation

- js문법 배열.forEach | 배열.map | map은 리턴값으로 새로운 배열을 만듦

```
friends=["Yoon","monk","kkk"]
(3) ["Yoon", "monk", "kkk"]

friends.forEach(e=>{console.log(e);});
VM599:1 Yoon
VM599:1 monk
VM599:1 kkk

friends.map(e=>{return e+"|ZIB"});
(3) ["Yoon|ZIB", "monk|ZIB", "kkk|ZIB"]
```

- 배열안의 객체들의 값을 읽어와서 , 컴포넌트로 뿌려주기

```js
import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}
const foodILike = [
  {
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food favourite="kimchi" />
      <Food favourite="ramen" />
      <Food favourite="samgiopsal" />
      <Food favourite="chukumi" />
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}
```

# 2.3 .map Recap

- 이미지에는 alt가 필요하다고 react에서 알려준다. 규칙
- 모든 컴포넌트는 id가 필요하다. 리액트 내부에서 구분할수 있게. 컴포넌트에 key값을 주기만 하면된다.| 컴포넌트의 유일성

```
import React from "react";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
...
];

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
```

# 2.4 Protection with PropTypes

- 설치하기 npm i prop-types 컴포넌트 인자들이 잘 전달되는지 확인하는 패키지  
  [ prop-types 문서 ](https://reactjs.org/docs/typechecking-with-proptypes.html)

```
PS C:\Users\Dos\Desktop\Projects\NodeJS1\movie_app_2019> npm i prop-types
이후에 애러나가오면
npm install
그러면? 자동으로 필요했던 추가적인 것들이 다운받아 지나봐?! 그리고 서버 재시작
```

- example basic

```js
//임포트
import PropTypes from "prop-types";

//Food 함수
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2> i Like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}></img>
    </div>
  );
}
//Food 함수에 대한 메타 데이터
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};
```

```js
//  number인자가 약속되어있는데 string을 보낼시 애러메시지 출력!
Warning: Failed prop type: Invalid prop `rating` of type `string` supplied to `Food`, expected `number`.
    in Food (at App.js:98)
    in App (at src/index.js:9)
```

# 3 State

# 3.0 Class Components and State

- class 컴포넌트로 변경 | 클래스이므로 리턴대신 render오버라이딩할것! | state라는 변수 저장소 | ES6의 함수선언법 | onClick을 통해 함수연결하기.

```js
class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
```

# 3.1 All you need to know about State

- setState를 통해, state데이터를 쓰기 해야한다 -> 그래야 render함수가 호출됨 | 바뀔부분만 똑똑하게 리액트가 고쳐줌
- setState(current => ) 로 this.state.count를 대처 | 외부의 state를 직접 참조하는것은 멋진 코드가 아니다. 하지만 허용은 해줌.
- 하지만 this.state.count = 1 등의 직접 코드를 수정하는것은 허용 X .!!

```
import React from "react";
import PropTypes from "prop-types";
class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
```

# 3.2 Component Life Cycle

- 문서를 통해, 컴포넌트가 만들어지고, 업데이트 될때, 어떤 보이지 않는 함수들이 호출되는지 알 수 있다.!
  [https://ko.reactjs.org/docs/react-component.html](https://ko.reactjs.org/docs/react-component.html)
- 그림 참조  
  [http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

```js
import React from "react";

class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("Component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
```

# 3.3 Planning the Movie Component

- loading 만들기, 6초후에 로딩 완료!
- setTimeout은 js 문법이다. 6초후에 해당 함수 호출!

```
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

```

# 4 Making the Movie App

# 4.0 Fetching Movies from API

- fetch대신에 axios를 사용할 것이다.! | npm install axios
- 비동기함수 설정하기 -> async(함수앞에서 이건 비동기함수야) + await(이 부분을 기달려야되.)
- yts라는 불법 영화 토렌트 사이트 이용할것임. API서비스를 제공하지만, 매번 주소가 바뀌기에 니코가 프록시를 만들어 버림.
  [https://github.com/serranoarevalo/yts-proxy](https://github.com/serranoarevalo/yts-proxy)

```
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

- ES6문법으로 json객체 참조하는 방법 data:{data:{movies}}
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

# 6.0 Getting Ready for the Router

- npm install react-router-dom
- 파일구조 : 컴포넌트는 폴더에 몰아 둠. (영화정보 5개를 넘기면 예쁘게 html로 뿌려주는 컴포넌트) | routes는 HomePage.html, detail.html 등의 한페이지 한페이지가 되겠고| App.js가 길을 터준다.
  App.js
  /routes/About.js
  /routes/Home.js
  /components/Movie.js

# 6.1 Building the Router

- 리액트의 route는 path와 뿌려줄 컴포넌트를 명시하는데, exact 옵션을 주지 않으면, 하위 path경로들도 전부 랜더링이 된다.
- 예를들어, /about 이면, path="/"와 path="/about" 이 선택이 된다. 이런점을 이용해서 검색바,등을 모든 html에 뿌릴수있다.

```
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}
export default App;

```

# 6.2 Building the Navigation

- html의 a태그는 페이지를 전부 새로고침한다. react가 죽고 다시 시행되는것.> Link컴포넌트를 이용해라
- Link컴포넌트를 사용했다면, HashRouter 안에서 컴포넌틀르 호출할것!

```js
src/App.js

import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
```

```js
src / components / Navigation.css;

import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
```

# 6.3 Sharing Props Between Routes

- 영화 리스트 카드 누르면 디테일 페이지로 이동하기
- import { Link } from "react-router-dom";의 Link는 경로와, 경로를 통해 보낼 데이터도 지정할수 있다.

```js
<Link
  to={ {pathname: "/movie-detail",
      state: { year,title...}
      }
    }
>
  <div className="movie">...</div>
</Link>
```

```js
import React from "react";

function Detail(props) {
  console.log(props); //state를 통해 위에서 보낸 데이터를 확인할수있다.!!
  return <span>hello</span>;
}
export default Detail;
```

# 6.4 Redirecting

- 디테일 페이지 완성 | id를 주소에 적어서 링크를 걸어둘수있다..|?리액트 이거는 완전 서버처럼 작동을 하는데?? 서버리스라니.
-

# 6.5 Conclusions
