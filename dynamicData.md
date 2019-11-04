```
import React from "react";
import PropTypes from "prop-types";

/*
class 컴포넌트를 이용해서 HTML그리자
왜냐면 state때문에 함수컴포넌트 대신 이를 쓴다.
자동적으로 render 메소드를 실행시킨다.
원래는 addevent리스너를 이용해서 버튼이 눌리면 특정 sj 함수를 호출해야 되는데.
여기서는 onClick에 함수만 연결하면 끝 by JSX(react magic)

직접 state의 변수를 바꾸려고하면 do not mutate stat directly, use setState() 라는 경고 메시지가 나온다.
직접 변수를 바꾸면, render함수를 재호출하지 않기 떄문이다.
setState함수를 호출하면, 우리는 HTML다시 refresh 하고 싶다는 의도를 파악해서 마술을 부린다.
virtualDOM 을 갖고 있어서 페이지가 리로드 되지도 않는다.

    this.setState({ count: this.state.count + 1 }); state에 완전 의존하는 방식은 성능에 문제가 있어서
    다른 방법으로 해야 한다.

    this.setState(current => ({ count: current.count + 1 }));
    이 방식은 어째든 react가 현재의 state를 반환해주고 그것을 이용해준다.

setState를 호출할때마가 react는 새로운 state화 함께 render function을 호출할 것이다.

React.Component는 기본적으로 life cycle method를 가진다. 기본적으로 리액트가 컴포넌트를 생성하고 없애는 방법임.
사실 랜더할때도 여러가지 함수들이 호출되고 난 결과임. 모든 함수들을 다 알필요는 없지만,
꼭 알아야되고 자주 사용되는 함수들:
https://reactjs.org/docs/react-component.html

Mounting 태어남
    constructor 생성자가 먼저 시행됨.
    static getDerivedStateFromProps() 잘 사용하지 않음.
    render()  랜더..
    componentDidMount() 처음 랜더시 ?!

Update - setState할때 시행됨.
    static getDerivedStateFromProps()
    shouldComponentUpdate() 기본적으로 업데이트를 할지말지 결정하는것
    render()
    getSnapshotBeforeUpdate() 인생에서 사용한적이 없음
    componentDidUpdate() 컴포넌트가 업데이트 되면 호출

Unmounting 죽음
    componentWillUnmount() 죽을때

*/
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("생성자.");
  }
  state = {
    count: 0
  };
  add = () => {
    console.log("add");
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    console.log("minus");
    this.setState(current => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("I just updated!!");
  }
  componentWillUnmount() {
    console.log("Good bye bitch");
  }
  render() {
    console.log("I am rendering");
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
