// $(document).ready(function() {
//     // '신청'이라는 문구가 떴을 때만 '취소하기' 버튼 생성
//     if ($('.board span:contains("신청")').length) {
//         $('.board button').show();
//     } else {
//         $('.board button').hide();
//     }
// });

// JavaScript로 '신청구분'을 확인하고 취소하기 버튼을 동적으로 추가합니다.
document.addEventListener('DOMContentLoaded', function() {
    var 신청구분 = document.querySelector('.board').querySelectorAll('span')[5].innerText;
    if (신청구분 === '신청') {
        var cancelButton = document.createElement('button');
        cancelButton.textContent = '취소하기';
        cancelButton.id = 'cancelButton';
        document.querySelector('.action').appendChild(cancelButton);
    }
});