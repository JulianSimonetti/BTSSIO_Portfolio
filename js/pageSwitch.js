function loadPage(id) {
    $("#content").fadeOut(200).delay(400);
    $.ajax({
        url: "./pages/"+id+".html",
        dataType: "html",
        success: function (page) {
            $("#content").html(page).fadeIn(200);
        }
    });
}