$(document).ready(function () {
    function onclick() {
        //    $("#text").text("test");
        setQuote();
    }
    $("#generate-quote").on("click", onclick)

});
function setQuote() {
    $.ajax({
        url: "https://ultima.rest/api/random",
        type: "GET",
        crossDomain: true,
        dataType: "json",
        headers: {
            "accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        success: function (response) {
            console.log(response)
            var resp = JSON.parse(response)
            alert(resp.status);
        },
        error: function (xhr, status) {
            alert("error");
        }
    });

}