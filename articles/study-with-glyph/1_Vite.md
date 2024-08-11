작성일: 2024-08-11
최종 수정일: 2024-08-11

Vite
---

#### 1. 등장 배경
읽은 자료: [Bonjour, Vite! (Vite 실무 적용기)](https://blog.hectodata.co.kr/bonjour-vite/) `hectodata, 2024.02.28`

`대규모 웹페이지는 파일이 너무 많아` > `번들러` 등장! 하나의 JS 파일로 묶어주고, 버전 지원도 됨. 둘 셋 안녕하세요 `Webpack` 입니다! >  시대가 지나니 너도 느리다 > 빌드 속도 100배 빠른 `esbuild` 등장 > 그래도 브라우저 모듈 부가기능을 놓치기엔 아쉽네 > 두 장점을 합친  `Vite` 쓰자!

#### 2. 어디에 쓰나요?
[Vite in 100 Seconds](https://www.youtube.com/watch?v=KCrXgy8qtjM) `FireShip, 2022.02.24` 영상을 보기로 했다. 

- 헐. [veet] 뷔이-트 라고 읽는 거였다.
- 개발 중 localhost 지원! 바로바로 확인해요.
- 여러 JS, CSS 등 에셋을 JS 번들로 합치기 (등장 배경에 나온 대로)

그렇구나. 내가 기술 블로그를 구현하면서 가장 먼저 겪은 벽이 `로컬에 있는 JSON 파일을 보안 이슈로 불러올 수 없음` 이었는데, 처음부터 Vite가 뭔지 알았으면 좋았겠다. 

![vite-in-100-seconds-comment-1](image.png)
`전 이제 Vite를 어디에나 써요. 심지어 순정 HTML, CSS, JS 쓸 때도요! 진짜 좋구요. 영상도 잘 봤습니다.`
헉, 댓글까지 이러니 혹하는데?

#### 3. 나도 쓸까? 업, 다운

읽은 자료: [Vite 이야기(feat. Svelte)](https://yozm.wishket.com/magazine/detail/1620/) `요즘IT, 테오의 프론트엔드, 2022.08.02`

이해하기 어려운 내용은 형광펜으로 표시했다.

`JS에는 module이 없다` 즉, 파일을 여러 개로 분리를 못했다. > 
<span style="background-color: #f5f0ff">이후 `node`가 만들어지고 서버에서 JS를 사용할 수 있게 되면서 ></span>

    Q1. 예전엔 서버에서 JS를 못 썼나?
    Q2. 여기서 말하는 node가 node.js인가?

 `commonJS` 라는 게 나왔는데, 표준이 아니어서 애먹었고 >
 <span style="background-color: #f5f0ff">`npm` 덕에 모듈을 서로 공유할 수 있게 됨 ></span>
    
    Q1. npm을 node.js 설치하면서 받았는데 무슨 관계이지.
    Q2.애초에 npm이 뭐지? 모듈 규칙인 건가?

<span style="background-color: #f5f0ff">브라우저의 모듈은 서버와 다르다.</span>
여기서 집중을 놓치다... 역사를 알면 좋겠지만 너무 어렵다.

---

#### 부록. 관련 채용 공고

빠른 개발 환경을 선호하는 팀에서, `5년차 이상의 TypeScript 웹 프론트엔드 개발자` 에게 요구(?)하는 스킬으로 보인다.