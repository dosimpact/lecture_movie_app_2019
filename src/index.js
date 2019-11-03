import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//<App /> 이것을 컴포넌트라고 부른다. = HTML반환하는 함수.
//JSX : js안의 HTML 이다. 컴포넌트를 만들고 붙이고 

//한번에 하나의 컴포넌트만 랜더를 해야한다. -> 그래서 App.js 에서 완성되서 나와야 한다.
ReactDOM.render(<App />, document.getElementById('root'));

