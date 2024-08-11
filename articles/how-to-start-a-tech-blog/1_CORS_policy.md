# 1. '퀵 팁' 기능과 CORS 정책


#### 초기 기획 의도

- **MVP `퀵 팁`** HTML + JavaScript만 이용, JSON 형식으로 짧은 팁을 관리, 랜덤 호출하는 기능 구현.
- **문제** CORS 정책! 개발 환경에서 로컬 JSON 파일을 불러올 수 없음
- **해결** VS Code에서 `Live Server` Extension을 사용함

##### JSON 형식을 선택한 이유
1. 안드로이드 개발 수업에서 REST API를 다룰 때 살펴보았기 때문이다.
2. ChatGPT가 기능을 듣고 추천해 주었다.

---

##### 1차 시도

1. ChatGPT에게 문의 결과, fetch + http-server를 이용해 CORS 문제를 해결할 수 있다고.
2. node.js 설치 후, 자동 설치된 npm을 이용해 http-server를 설치했다.
(이 때엔 npm이 뭔 말인지 몰랐다.)
3. Localhost를 커맨드로 켜니 JSON 파일을 문제 없이 불러올 수 있었다.

**결과** 됨. 하지만 매번 서버를 커맨드로 켜야 해서 불편, 실제 개발 환경에서 쓰기에 부적합.

##### 2차 시도
- **관련 Issue** `CORS policy 지키기 (1): fetch와 http-server 사용해 Localhost 커맨드로 켜기 #8`
1. 구글링 결과, 개발용 Localhost를 편히 열 수 있는 VS Code Extension이 있다는 것을 배움.
2. `Live Server`를 사용함.

**결과** 더 편해짐. 하지만 quick-tips.JSON 파일을 JS에서 불러와 파싱하려고 하니 문제가 발생했다.

##### 3차 시도
- **관련 Issue** `import한 JSON 데이터 파싱해서, id별로 구분 짓기 #11`
1. JSON 파일의 확장자를 JS로 변경하고, quickTips 라는 이름의 const 배열로 정의함.
2. HTML에서 여러 개의 JS 파일을 불러옴.

결론: 가능. 하지만 블로그 글이 많아지면 쿼리 처리, 검색 기능이 필요할 것이다.

---

#### 이 다음 할 일
블로그 서비스들이 한 블로그 내의 게시글을 찾아 보여주는 기능을 어떻게 구현하는지 조사하기

`작성일: 2024-08-11` | `최종 수정일: 2024-08-11`