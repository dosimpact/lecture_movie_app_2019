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

```js
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
- Link컴포넌트를 사용했다면, HashRouter 안에서 컴포넌틀르 호출할것! | 반드시 HashRounter가 Link를 감싸는 구조가 되야함.

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
- 만약 바로 디테일 페이지로 URL로 적어서 접근하면, 홈으로 돌려보내기.

```js
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
```

# 6.5 Conclusions
