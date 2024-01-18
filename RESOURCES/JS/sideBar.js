// sideBarToggle
type = "text/javascript" >
    $(document).ready(function () {
        $(".sideBarDropdown ul.sub").hide();
        $(".sideBarDropdown ul.sideBarDropdownToggle li").click(function () {
            $("ul", this).slideToggle("normal");
        });
    });