//Assign active class to menu button

document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname;
    console.log("currentPage is " + currentPage);
    var menuLinks = document.querySelectorAll("#main-menu a");

    menuLinks.forEach(function(link) {
        var linkPath = link.getAttribute("href");
        console.log("linkPath is " + linkPath);
        currentPage = currentPage.replace(/^\//, '');
        if (linkPath === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
