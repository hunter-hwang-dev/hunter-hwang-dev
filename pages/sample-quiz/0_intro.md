# 간단 퀴즈 페이지 만들기


MySQL/Oracle 중 하나는 공부해야 한다. 향후 정보처리기사를 딸 때에도 필요하고, 코딩 테스트에서 SQL 쿼리 작성은 고정 출연이기 때문이다. 유튜브 강의를 보거나, 정리된 글을 읽고 따라해 봤자 중요한 키워드가 머리에 들어오지 않는 것 같아 대책을 세웠다. 직접 문제를 내면 SQL 문법을 확실히 익히지 않을까?

#### 초기 기획 의도
그 이전에, **간단한 퀴즈 페이지**를 html + JS 를 이용해 짜 보기로 했다. 기본 틀을 만들어 활용하기 위함이다.


- **MVP `샘플 퀴즈 페이지 만들기`** HTML + JavaScript만 이용.
    입력: 라디오 버튼(택 1), 문자열
    판정: 저장된 값과 일치하는지 true/false > true일 시 count++
    출력: 문제 2개 중 몇 개 맞추었는지 결과 페이지에 표시

- **문제** 정답 count 변수를 어디다가 저장하고 불러와야 할지 난감했다.

- **해결** 

##### 1. 입력 `const ... = document.___("...")`
`const selectedAnswer = document.querySelector('input[name="fruits"]:checked');`
`const answer = document.getElementById("skyColor").value.trim().toLowerCase();`
와 같이, 각 입력 방식에 맞는 함수를 document에서 찾아 사용한다.

#####  2. 판정 `sessionStorage.setItem("...", "...")`

``` 
if (selectedAnswer) {
    if (selectedAnswer.value === "4") {
        sessionStorage.setItem("mathCorrect", "true");
    } else {
        sessionStorage.setItem("mathCorrect", "false");
        }
} else {
    sessionStorage.setItem("mathCorrect", "false");
}
```
const로 선언한, html에서의 입력값을 if문 조건으로 넣는다. 원하는 값과 일치할 시에는 (===임에 주의!) `sessionStorage.setItem("붙이고 싶은 이름", "true");` 으로 값을 저장한다.

```
if (answer === "blue") {
    sessionStorage.setItem("englishCorrect", "true");
} else {
    sessionStorage.setItem("englishCorrect", "false");
}
```

##### 3. 출력 `if (sessionStorage.setItem("...") === "...") {...}`

```
// 결과 페이지에서 점수 표시 함수
function showResult() {
    let score = 0;

    // 수학 퀴즈 정답 여부 확인
    if (sessionStorage.getItem("mathCorrect") === "true") { score += 1; }
    // 영어 퀴즈 정답 여부 확인
    if (sessionStorage.getItem("englishCorrect") === "true") { score += 1; }

    // 결과 표시
    document.getElementById("resultText").innerText = `총 2문제 중 ${score}문제를 맞췄습니다.`;
}
```

##### 4. 마무리 `document.getElementById("...")`

```
// 결과 페이지 로드 시 결과 표시
if (document.getElementById("resultText")) {
    showResult();
}

//처음으로
function init() {
    window.location.href = "1_math_quiz.html";
}
```



`작성일: 2024-08-21` | `최종 수정일: 2024-08-21`