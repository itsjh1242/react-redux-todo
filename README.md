# React-Redux-개념 익히기
Redux란 Javascript 상태관리 라이브러리

# Redux의 기본 세 가지 원칙
1. Single source of truth
   - 동일한 데이터는 항상 같은 곳에서 가지고 온다.
   - 즉, Store라는 하나뿐인 데이터 공간이 있다.
2. State is read-only
   - 리액트에서는 setState 메소드를 활용해서 상태를 변경한다.
   - 리덕스에서도 action이라는 객체를 통해서 상태를 변경한다.
3. Changes are amde with pure functions
   - 변경은 순수 함수로만 가능하다.
   - Reducer와 연관되는 개념이다.
   - Store(저장공간) - Action(액션) - Reducer(리듀서)
