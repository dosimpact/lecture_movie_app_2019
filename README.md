# ReactJS 1

[React.JS 인트로 강좌 링크](https://academy.nomadcoders.co/courses/216871/lectures/10881272)

- 환경 설치

1. node.js 사이트 가서 node.js 설치하기  
   확인 node -v  
   확인 npm -v
2. npx 설치하기
   npm install npx -g
3. npm 업데이트 하기  
   npm install -g npm

#### formatOnSave vs code 플러그인 on

```cmd
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

- why react.js  
  많은 회사가 react.js를 사용한다. 페이스북이 만들고 있고, 많은 돈과 사람이 투자된다. 빵빵혀~
  리액트는 자바스크립트이므로 리액트가 없어진다 하더라고 수준높은 js개발자가 되 있을것이다.

- Webpack, Babel  
  react을 이용해서 아름답고 섹시한 웹를 만들수 있으나, 몇몇 멍청한 브라우저떄문에 이를 어리석은 코드로 바꿔주어야 한다.  
  하지만 이 단계를 생략한다.  
  npx덕분인가??!

```c
//시작하기

npx create-react-app moive_app_2019
npm start
```

1. public의 index.html에 여러 컴포넌트들을 리액트가 집어 넣어준다. 가상돔 덕분에 속도도 빨라지고
   HTML구성하는데 있어 엄청난 효과.

- React의 매직

1. 컴포넌트간의 인자전달. HTML코드를 완전히 반복,확장 가능
2. ES6 최신 js 문법으로 간편하게 이용 가능.!

```
<Love fav="doyoung" />

function Love(props){
  console.log(props.fav);
  return <h1>I loving you</h1>;
}


<Love fav="doyoung" />

function Love({fav}){
  console.log(fav);
  return <h1>I loving you</h1>;
}
```

example01

```
//JSX는 HTML과 매우 유사한 문법. JSX = HTML + js
function Love({ fav }) {
  console.log(fav);
  return <h1>I loving you and {fav}</h1>;
}

내부의 컴포넌트 사용.
      <h2>Love라는 컴포넌트를 이용함.</h2>
      컴포넌트에 인자를 전달해 줄 수있고 최신 ES6문법으로 객체를 받을 수 있다.
      <Love fav="kimchi" />
      <Love fav="cookie" />
      <Love fav="samgiopsal" />
      <Love fav="chukumi" />
      <hr></hr>
인자 전달은 HTML처럼 fav = "전달할것" 으로 쓰면 된다.
```

example02

```
import React from "react";

function Potato() {
  return <h3>I love potato</h3>;
}

export default Potato;
```

```
import Potato from "./Potato";

<h2>외부의 js를 통해서 컴포넌트를 가져옴</h2>
<Potato />

```

- js 친구이름 배열에서 각 이름에 하트를 붙이고 싶다면

```javascript

람다식 변수 => () 중괄호 이네 ~

const friends = ["KDY","alphaGo","BetaGo"];
friends.map(current =>(
    return current+" Heart!";
))

friends.map(function(current){
    return current+" Heart!";
})
```

- react에서는 요소들의 유니크함을 요구한다.  
  내가 배열을 map으로 다뤄서 다시 새로운 배열을 만드는것은 그들의 유니크함을 없앤것임.  
  그래서 JSX에 id 요소를 추가해서 컴포넌트를 호출한다. 그냥 id만 주면됨. HTML상에서 안쓰더라도.

  <p>
  배열을 map이라는 함수를 통해서 순환한다. 이때 각 원소를 꺼내어
  컴포넌트의 인자로 사용한다.
  <br />
  이때 컴포넌트 인자에 id를 주어서 고유성을 갖도록 한다. 새로운 배열을
  만드는 것은 고유성이 파괴되는 것으로 react에서 오류!
  </p>

- prop-types
  [prop-types example](./prop-types.md)

- function 컴포넌트 + 정적 데이터  
  [ function 컴포넌트 + 정적 데이터](./staticData.md)

- class 컴폰너트 + 동적 데이터

# Movie App 2019

React Js Fundamentals Course (2019 Update!)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
