        // sideBarToggle
        document.addEventListener('DOMContentLoaded', function () {
            const sideBarItems = document.querySelectorAll('.sideBarDropdown ul.sideBarDropdownToggle li');
    
            sideBarItems.forEach(item => {
                item.addEventListener('click', function () {

                const toggleClass = 'toggled';
                const isToggled = this.classList.contains(toggleClass);
        
                if (!isToggled) {
                    this.classList.add(toggleClass);
                } else {
                    this.classList.remove(toggleClass);
                }

                    this.classList.add('active');

                    if(this.parentElement.previousElementSibling)
                        this.parentElement.previousElementSibling.classList.add('active')

                        // 선택된 아이템(this) 외의 다른 아이템(otherItem)에 active를 제거하고
                        // 다른 아이템의 a링크(children[0]) - 'active' remove
                        // this. 부모의 형제들을 모두 slideUp
                        // 내가 선택한 요소만 활성화

                    sideBarItems.forEach(otherItem => {
                        if (otherItem !== this) {
                            otherItem.classList.remove('active');
                            otherItem.children[0].classList.remove('active');

                            if(!this.parentElement.previousElementSibling) {
                            $("ul", otherItem).slideUp("normal");}
                        }

                        if(otherItem === this) {
                            otherItem.parentElement.parentElement.classList.add('active');
                        }
                    });

                    event.stopPropagation();
        
                    $("ul", this).slideToggle("normal");
                });
            });
        });


        // titleMenu span:active
        document.addEventListener('DOMContentLoaded', function () {
        
            const titleMenus = document.querySelectorAll('.titleMenu span');

            titleMenus.forEach(function(item) {
                item.addEventListener('click', function() {
                    document.querySelectorAll('.titleMenu span.active').forEach(function (activeItem) {
                        activeItem.classList.remove('active');
                    });
                    item.classList.add('active');
                });
            });
        });


        //profileImage upload
        document.addEventListener('DOMContentLoaded', function () {

    editProfileButton.addEventListener('click', function () {
        imageUploadInput.click();
    });

    imageUploadInput.addEventListener('change', function () {
        const selectedFile = imageUploadInput.files[0];
        if (selectedFile) {

            const imageUrl = URL.createObjectURL(selectedFile);
            profileImage.src = imageUrl;
        }
    });

    deleteProfileButton.addEventListener('click', function () {
        profileImage.src = "/RESOURCES/IMAGE/profile/none.png";
    });
});