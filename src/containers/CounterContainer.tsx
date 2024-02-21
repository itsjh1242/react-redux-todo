import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import Counter from "../components/Counter";
import { increment, decrement, times } from "../modules/counter";

const CounterContainer = () => {
  const dispatch = useDispatch();
  //   Redux store의 counter 상태를 가져옴
  const counter = useSelector((state: any) => state.counter, shallowEqual);
  //   액션 생성 함수 준비: 배열 비구조화 할당 문법
  const [onIncrease, onDecrease, onTimes] = [() => dispatch(increment()), () => dispatch(decrement()), () => dispatch(times())];

  return <Counter number={counter} onIncrease={onIncrease} onDecrease={onDecrease} onTimes={onTimes} />;
};

export default CounterContainer;
