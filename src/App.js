import React from "react";
import Potato from "./Potato";
import PropTypes from "prop-types";

//JSX는 HTML과 매우 유사한 문법. JSX = HTML + js
function Love({ fav }) {
  console.log(fav);
  return <h1>I loving you and {fav}</h1>;
}

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2> i Like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}></img>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: "5"
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 3.4
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 2
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 2.4
  }
];
function renderFood(dish) {
  return (
    <Food
      key={dish.id}
      name={dish.name}
      picture={dish.image}
      rating={dish.rating}
    ></Food>
  );
}
//컴포넌트끼리 인자를 전달할수있다. ~!!
function App() {
  return (
    <div className="App">
      <hr />
      <h2>외부의 js를 통해서 컴포넌트를 가져옴</h2>
      <Potato />
      <hr />
      <h2>Love라는 컴포넌트를 이용함.</h2>
      컴포넌트에 인자를 전달해 줄 수있고 최신 ES6문법으로 객체를 받을 수 있다.
      <Love fav="kimchi" />
      <Love fav="cookie" />
      <Love fav="samgiopsal" />
      <Love fav="chukumi" />
      <hr></hr>
      <h2> 배열에 담긴 정보를 HTML만들기</h2>
      <p>
        배열을 map이라는 함수를 통해서 순환한다. 이때 각 원소를 꺼내어
        컴포넌트의 인자로 사용한다.
        <br />
        이때 컴포넌트 인자에 id를 주어서 고유성을 갖도록 한다. 새로운 배열을
        만드는 것은 고유성이 파괴되는 것으로 react에서 오류!
      </p>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
      <hr></hr>
      다른구조
      <div>{foodILike.map(renderFood)}</div>
    </div>
  );
}

export default App;
