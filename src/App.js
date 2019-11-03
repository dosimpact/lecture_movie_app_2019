import React from 'react';
import Potato from './Potato';

//JSX는 HTML과 매우 유사한 문법. JSX = HTML + js
function Love({fav}){
  console.log(fav);
  return <h1>I loving you and {fav}</h1>;
}
//컴포넌트끼리 인자를 전달할수있다. ~!!
function App() {
  return (
    <div className="App">
      Hello!!!!
     <Potato />
     <Love fav = "kimchi" />
     <Love fav = "cookie" />
     <Love fav = "samgiopsal" />
     <Love fav = "chukumi" />
    </div>
  );
}

export default App;
