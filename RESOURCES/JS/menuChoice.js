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