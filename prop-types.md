- npm i prop-types 컴포넌트 인자들이 잘 전달되는지 확인하는
  [ prop-types 문서 ](https://reactjs.org/docs/typechecking-with-proptypes.html)

```
PS C:\Users\Dos\Desktop\Projects\NodeJS1\movie_app_2019> npm i prop-types
이후에
npm install
그러면? 자동으로 필요했던 추가적인 것들이 다운받아 지나봐?!
```

```
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

```
//  number인자가 약속되어있는데 string을 보낼시 애러메시지 출력!
Warning: Failed prop type: Invalid prop `rating` of type `string` supplied to `Food`, expected `number`.
    in Food (at App.js:98)
    in App (at src/index.js:9)
```
