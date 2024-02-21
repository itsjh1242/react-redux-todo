// 타입 선언
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";
const TIMES = "counter/TIMES";

// 리덕스 사용, 리듀서
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const times = () => ({ type: TIMES });

const initialState = 0;

// 리덕스 사용, 액션
const counter = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case TIMES:
      return state * 2;
    default:
      return state;
  }
};

export default counter;
