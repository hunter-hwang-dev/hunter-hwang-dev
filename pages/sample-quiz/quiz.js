// quiz.js

// 수학 퀴즈 제출 함수
function submitMathQuiz() {
    const selectedAnswer = document.querySelector('input[name="fruits"]:checked');
    if (selectedAnswer) {
        // 정답이 4일 때 맞췄다고 기록
        if (selectedAnswer.value === "4") {
            sessionStorage.setItem("mathCorrect", "true");
        } else {
            sessionStorage.setItem("mathCorrect", "false");
        }
    } else {
        sessionStorage.setItem("mathCorrect", "false");
    }
    // 다음 페이지로 이동
    window.location.href = "2_eng_quiz.html";
}

// 영어 퀴즈 제출 함수
function submitEngQuiz() {
    const answer = document.getElementById("skyColor").value.trim().toLowerCase();
    // 정답이 "blue"일 때 맞췄다고 기록
    if (answer === "blue") {
        sessionStorage.setItem("englishCorrect", "true");
    } else {
        sessionStorage.setItem("englishCorrect", "false");
    }
    // 결과 페이지로 이동
    window.location.href = "3_quiz_result.html";
}

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

// 결과 페이지 로드 시 결과 표시
if (document.getElementById("resultText")) {
    showResult();
}

//처음으로
function init() {
    window.location.href = "1_math_quiz.html";
}
