# React를 이용한 감정 일기장

### URL : https://hwan-react-project-diary.web.app/ 

### skill stack
    - React , JS , Firebase hosting 

### 🖥 완성된 화면 

1. 메인 Home 화면
<img src="https://user-images.githubusercontent.com/63918911/167430564-2c559fcd-d4a1-40be-b684-1df1cdb2e53f.png"  width="40%" height="40%" >


2. 새 일기 작성 New 화면 
<img src="https://user-images.githubusercontent.com/63918911/167429915-b3cfd3e3-9b03-404e-b919-9d5116bfff79.png" width="40%" height="40%" >


3. 일기 상세 화면 
<img src="https://user-images.githubusercontent.com/63918911/167430713-655cf6ef-6d35-434f-a0e0-412af0ad2b6c.png" width="40%" height="40%" >


 4. 일기 수정 화면
<img src="https://user-images.githubusercontent.com/63918911/167430795-4d7f5390-6c08-426b-a26a-1e67b678dc4e.png" width="40%" height="40%" >

 
 ## 🎯 목표
 > 1.  일기 쓰기 , 수정, 삭제, 조회 필터링 등의 데이터 CRUD 작업 모두 수행
 > 2.  새로고침, 컴퓨터 재부팅을 하여도 데이터가 사라지지 않고 남아있도록 웹 브라우저 데이터 스토리지를 사용하기
 > 3.  Firebase를 사용한 프로젝트 호스팅 및 링크를 이쁘게 포장하는 ‘Open Graph’ 사용


## 💡 성장 경험

### 날짜 데이터 관련된 이해

- 헤더 부분에 존재하는 달 별로 넘어가는 기능을 구현 하기 위한 날짜 데이터에 이해가 필요 했습니다.

    또한 일기 작성 날짜를 선택할때 발생한 오류 31일자는 표기 되지 않은 문제가 발생하였습니다.

### 최적화 기능에 대한 이해

- 컴포넌트에서 불필요한 랜더링이 발생되는 부분을 잡기 위한 최적화기능인 memoization을 추가했습니다.

### 배포 과정에서 발생된 에러

- Mac에서 발생된 문제시 sudo를 앞에 작성하지 않으면 발생된 문제였습니다.

### ❌ 버그 이슈

1. 키값 중복오류

Encountered two children with the same key, `1`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.

<aside>
💡 key값이 동일하게 사용되었을때 나타나는 에러 메시지로 
더미데이터를 이용하여 데이터 초기값을 셋팅한후 useRef와 같은 초기값 상태에 값을 살펴줘야한다.
ex) 더미테이터가 id가 5까지 있다면 useRef(6) 6으로 초기값 변경
</aside>
<br>

2.  일기 작성시 날짜 선택에서 31일을 선택하면 31일자 일기가 일기List에 보여지지 않음.

```jsx
const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0,
        23,
        59,
        59
        // Date객체는 시간 분 초 를 받는다.
      ).getTime();
```


