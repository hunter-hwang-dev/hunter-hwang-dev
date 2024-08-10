## (1) 기술 스택 살펴보기 - 프론트엔드

#### 1. GraphQL이란? 

읽은 자료 : [GraphQL 개념잡기 - 카카오 기술 블로그](https://tech.kakao.com/posts/364) `hoon.choi, 2019.08.01`

- SQL같은 쿼리 언어
- (해당 블로그 글이 작성된 2019년 여름에는) 비교적 뉴페이스.
- 뉴페이스라고 하니 말인데, 페이스북에서 개발함.

<span style="color:gray">
그럼 다른 쿼리 언어에 비해 GraphQL이 가지는 장점이 있을 것이다.페이스북 나이가 몇인데, 뭐가 됐든 쿼리를 썼다가 너무 열이 받아서 자체 개발을 했겠지? GraphQL이란 이름으로 유추할 수 있는 것은, 그래프 형식을 사용한다 정도? 페이스북 유저 간의 관계도 그래프로 표현할 수 있으니까.
(x, y 축 있는 거 말고, '6다리 건너면 다 아는 사람!' 그래프.)</span>

실제로도 그럴까? 아티클을 마저 읽어 보자.

### SQL vs *GraphQL*
- DB에서 vs *서버에서* 퍼가용
- 주로 백엔드 vs *클라이언트* 에서 작동

_그럼 예컨대, hunter의 블로그 글을 목차에서 본다고 하자. SQL로 쿼리를 짰다면 대략 흐름이 이렇게 될 것이다.

    hunter의 블로그에 들어가기 > 
    클라이언트가 서버에게 '블로그 좀 보여줘' > 
    서버가 SQL 쿼리: 'hunter의 블로그 아티클을 작성시간 내림차순으로 앞에 10개 보여줘' > 
    쿼리 응답을 서버가 클라이언트에게 보냄 > 
    사용자가 hunter의 블로그 최신글 10개를 목차에서 읽음

웹 클라이언트 단에서 서버에 쿼리를 요청하고, 받는 GraphQL로 쿼리를 짰다면? 내 상상은 이렇다.

    hunter의 블로그에 들어가기 > 
    클라이언트가 서버에게 '블로그 좀 보여줘' > 
    서버가 클라이언트에게 hunter네 블로그 곳간을 통째로 보냄 (예컨대 글이 127개 있다고 하자.) > 
    클라이언트가 GraphQL 쿼리: '아티클 127개 중에 최신 글 10개만' 끊어서 보여줌 > 
    사용자가 hunter의 블로그 최신글 10개를 목차에서 읽음_

### REST API vs *GraphQL*

채용 공고를 읽다 보니, DevOps나 백엔드 경력직 공고를 보면 Kubernetes 가능자를 찾더라. 
'Kubernetes'? 어떻게 읽어야 할지도 난감한 이름이라, 오히려 머리에 박혔다.
[koo·br·neh·teez] 정도로 읽고, 한글로는 '쿠버네티스' 라고 적는 모양이다. k8s, kube 다 같은 말이다. (이름이 너무 길어서 별명을 붙였나 보다.)

IBM topics에서 다양한 기술 주제를 쉽게 설명해 주고, 한국어 번역 상태도 좋아 참고하고 있다.
쿠버네티스는 '컨테이너화된 애플리케이션의 배포, 관리 및 확장을 예약하고 자동화하기 위한 컨테이너 오케스트레이션 플랫폼' 이라고 한다.
 
스마트폰 앱 서비스는 스토어에서 배포를 관리하지만, Glyph와 같은 웹 서비스는 새로운 기능 출시를 자체적으로 관리해 주어야 하네.