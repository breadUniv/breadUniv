// 수정 삭제
function editComment(button) {
    var commentText = button.previousSibling;
    var editInput = document.createElement("input");
    editInput.classList.add("commentNewInput");
    editInput.value = commentText.innerText.trim();

    function applyEdit() {
        commentText.innerText = editInput.value;
        editInput.replaceWith(commentText);
        // 수정이 적용된 후에 수정 버튼에 대한 이벤트 리스너를 다시 등록
        button.addEventListener("click", editComment);
    }

    editInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            applyEdit();
        }
    });

    // 현재의 이벤트 리스너를 제거
    button.removeEventListener("click", editComment);
    button.addEventListener("click", function() {
        applyEdit();
    });

    commentText.replaceWith(editInput);
    editInput.focus();
}


function deleteComment(button) {
    var previousSibling = button.previousElementSibling;
    if (previousSibling) {
        var secondPreviousSibling = previousSibling.previousElementSibling;
        var nextSibling = button.nextElementSibling;
        if (secondPreviousSibling) {
            secondPreviousSibling.remove();
        }
        if (previousSibling) {
            previousSibling.remove();
        }
        if (nextSibling) {
            nextSibling.remove();
        }
        button.remove();
    }
}

// 등록 댓글생성
document.addEventListener("DOMContentLoaded", function() {
    var inputField = document.querySelector('.commentContainer input[type="text"]');
    var submitButton = document.querySelector('.commentContainer button[type="submit"]');
    

    inputField.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            submitComment();
        }
    });
    
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        submitComment();
    });
});

function submitComment() {
    var inputText = document.querySelector('.commentContainer input[type="text"]').value;
    if (inputText.trim() === '') {
        return;
    }
    
    var targetElement = document.querySelector(".commentText");
    var paragraph = document.createElement("span");
    paragraph.textContent = inputText;
    targetElement.appendChild(paragraph);

    var editButton = document.createElement("button");
    editButton.textContent = "수정";
    editButton.onclick = function() {
        editComment(this);
    };
    
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.onclick = function() {
        deleteComment(this);
    };
    
    targetElement.appendChild(editButton);
    targetElement.appendChild(deleteButton)
    targetElement.appendChild(document.createElement("br"));

    document.querySelector('.commentContainer input[type="text"]').value = '';
}
