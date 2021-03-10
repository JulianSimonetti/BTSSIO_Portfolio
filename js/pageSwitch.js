function loadPage(id) {
    $.ajax({
        url: "./pages/"+id+".html",
        dataType: "html",
        success: function (page) {
            $("#content").fadeOut(200).delay(400).html(page).fadeIn(200);
        }
    });
}