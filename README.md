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

[./Docs/lecture01_03.md](./Docs/lecture01_03.md)  
[./Docs/lecture04_05.md](./Docs/lecture04_05.md)  
[./Docs/lecture06.md](./Docs/lecture06.md)

# 빠른 Recap

- JSX문법으로 js안에 HTMl,CSS, 컴포넌트까지 전부 쓸수있다.
- 컴포넌트는 함수, 클래스 두종류의 컴포넌트이다.
- 컴포넌트에게 props라는 변수를 넘겨 HTML 랜더에 사용한다.
- 컴포넌트는 재사용이 용이하다. -> 리스트데이터.map을 통해 -> 컴포넌트를 계속 뿌릴 수 있다.
- 컴포넌트 클래스에 state변수를 선언할수있고 | js함수를 선언할수있다.
- 컴포넌트의 생성과정은 정해져 있다.
- async 과 await를 통해 api를 호출한다. Axios를 이용할것!
- CSS는 컴포넌트에서 임포트 해줘서 사용가능.

```js
//react-router-dom을 설치한다

// HashRouter컴포넌트안에 Route 를 추가해서 경로를 지정한다.

// <Route path ="/" exact={true} component ={Home}/ >
// <Route path ="/movie/:id" component = {Detail} />

// 네이게이션을 통해 Link를 걸어주자. a href대신 쓰는거야.
<Link to="/">Home<Link>
//링크에 state정보까지 넣어서 보내보자.
<Link to= {{ pathname: `/~/${id}`, state:{year,...}}} >

//  함수 컴포넌트 (props인자받고) | 클래스 컴포넌트의 this.props에는
//히스토리의 push로 리다이렉팅이 가능하고
//location에 state라는 정보도 있다. 이를 이용해서 Detail 페이지 꾸미기

//Link를 타고온 컴포넌트는, state를 보고 undefined면 root로 리다렉
// 또 state 를 보고 null를반환시키기.
```
