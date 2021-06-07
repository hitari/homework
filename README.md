# 무신사 과제

> React library 기반으로 작업하였습니다. 개인적으로 다른 미들웨어나 추가 라이브러리 없이 만들어 보고 싶어서 그대로 진행 하였고, thunk 나 redux의 applymiddleware는 해당 github을 참조해서 유사하게 제작하여 사용하였습니다.

## # 설치 및 실행방법

```sh
git clone https://github.com/hitari/homework.git
cd homework
npm i
npm start
```

## # 과제 진행시 고민사항 및 부연설명

- 요구조건에 필터는 타이틀과 마찬지로 고정이 아니라고 해서 가상의 mock data를 구성함.
- 필터 처리부분에서는 characters API 호출 할때 문서 스펙을 보니 6가지의 parameter를 지원 하는 것을 확인 하였다. '생존인물', '여자' 같은 조건들은 parameter로 처리 되지만 화면 참조에서 보면 'tvSeries 없음' 같은 조건은 브라우저에서 자체 filter로 처리 해야 가능 한 영역이라서 type을 분리 하여 각각 조건에 맞게 처리 되도록 구현했습니다.

- 필터는 되도록 추가될때 추가 개발 되지 않도록 구현 하여, api type일 경우 requirement에 parameter 값만 넣어주면 확장 되도록 구성하였습니다.

- books, tvSeries 개수를 구할때 [""]가 초기 값이라 1개이고 ""이면 0개가 되도록 조치하였습니다.

- key나 id값을 정할때 api에 특정 대표하는 유니크 필드가 보이가 않아서, 다른 uuid를 만들어서 사용할까 고민하다가 데이터를 살펴보니 url이 유니크 한 값으로 들어오는 것을 보고 url을 key,id 값으로 사용하였음.(이부분은 데이터 받아올때 id값을 주입해준다 던가 뭔가 다른 방법을 하고싶은 고민이 있다.)

- custom hook은 react 에서 { useState } 형태로 불러오는 것을 착안하여 index에 hook을 모아서 하나의 객체형태로 접근하도록 작업하였습니다.
