function loadPage(id, scroll = true) {
    $("#content").css('visibility', 'hidden').delay(400);
    $.ajax({
        url: "./pages/" + id + ".html",
        dataType: "html",
        success: function (page) {
            if (scroll) {
                c = document.getElementById("content");
                c.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            }
            $("#content").html(page).css('visibility', 'visible');
        }
    });
}

window.onload = function () {

};