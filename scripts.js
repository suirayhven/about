document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname.split("/").pop(); // Extract filename from URL
    console.log("currentPage is " + currentPage);
    var menuLinks = document.querySelectorAll("#main-menu a");

    menuLinks.forEach(function(link) {
        var linkPath = link.getAttribute("href").split("/").pop(); // Extract filename from link href
        console.log("linkPath is " + linkPath);
        if (linkPath === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
