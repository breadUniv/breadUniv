window.onload = function() {
    document.getElementById("boarderTitleCheckbox").addEventListener("change", function() {
        var isChecked = this.checked;

        // 모든 클래스명이 "boardCheckbox"인 요소를 찾습니다.
        var checkboxes = document.querySelectorAll(".boardCheckbox");

        // 찾은 모든 요소에 대해 반복하면서 체크 상태를 변경합니다.
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = isChecked; // 현재 체크박스의 상태와 동일하게 설정
        });
    });
};