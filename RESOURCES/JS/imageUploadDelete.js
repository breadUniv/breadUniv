        //Image upload & delete
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