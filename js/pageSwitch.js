function loadPage(id) {
    $("#content").css('visibility', 'hidden').delay(400);
    $.ajax({
        url: "./pages/"+id+".html",
        dataType: "html",
        success: function (page) {
            $("#content").html(page).css('visibility', 'visible');
        }
    });
}