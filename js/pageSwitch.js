function loadPage(id) {
    $("#content").hide(200).delay(400);
    $.ajax({
        url: "./pages/"+id+".html",
        dataType: "html",
        success: function (page) {
            $("#content").html(page).show(200);
        }
    });
}