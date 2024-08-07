document.getElementById("question").innerHTML = "왜 Java에서 boolean은 true 또는 false 두 개의 값만 가지는데, 차지하는 비용은 1 byte인가요?";
document.getElementById("answer").innerHTML = "1bit가 아닌 8bit = 1byte를 차지하는 이유는 메모리 접근을 1byte씩 하고, 실제 하드웨어도 1byte 단위를 생각해 만들어졌어요. 아주 옛날이라면 모르겠지만, 지금은 1bit에 접근하는게 코스트가 더 많이 듭니다!";
document.getElementById("hashtags").innerHTML = "#Java #data-type #boolean";