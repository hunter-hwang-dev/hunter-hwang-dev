function goToNextPage() {
    window.location.href = "2_eng_quiz.html"; // 다음 페이지로 이동
}

function submitQuiz() {
    window.location.href = "3_quiz_result.html"; // 결과 페이지로 이동
}

function showResult() {
    // 세션에 저장된 정답 여부를 바탕으로 결과를 표시합니다.
    let score = 0;

    // (여기에서 세션에 저장된 데이터를 가져와 점수를 계산할 수 있습니다.)
    // 예시:
    // if (sessionStorage.getItem("mathCorrect") === "true") { score += 1; }
    // if (sessionStorage.getItem("englishCorrect") === "true") { score += 1; }

    document.getElementById("resultText").innerText = `총 2문제 중 ${score}문제를 맞췄습니다.`;
}
