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
- JSX 에서 js부분은 {}를 치고 처리를 해야한다.!!

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

```js
import React from "react";

function Food({ favourite }) {
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

```js
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

```js
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

```js
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

```js
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
