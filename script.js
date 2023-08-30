$(document).ready(function () {
  $("#generate-quote").on("click", onclick);
});

function onclick() {
  //    $("#text").text("test");
  setQuote();
}

function setQuote() {
  $.ajax({
    url: "http://localhost:3000/api/random",
    type: "GET",
    dataType: "json",
    headers: {
      accept: "application/json",
    },
    success: function (data) {
      // data is a quote in JSON form
      //   {
      //     "id": 307,
      //     "quote": "1998... I'll never forget it... It was the year when those grisly murders occurred in the Arklay Mountains.",
      //     "character": "Leon Kennedy",
      //     "title": "Resident Evil 4",
      //     "esrb": "M",
      //     "release": 2005
      // }
      console.log(data);
      // TODO: Use the data object to set the text of the #text & #author element like line 6
    },
    error: function (xhr, status) {
      alert("error");
    },
  });
}
