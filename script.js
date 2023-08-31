$(document).ready(function () {
  // * Sets the quote when the page loads
  setQuote();
  // * Listens for the new quote button click, on the click, run onclick function below
  $("#generate-quote").on("click", onclick);
});
let var_url = "http://localhost:3000/api/random";
$("#game-select").on("change", function () {
  let menu = this.value;
  if (menu == "Elden Ring") {
    var_url = "http://localhost:3000/api/quote/game?title=elden+ring";
  } else if (menu == "Mass Effect 3") {
    var_url = "http://localhost:3000/api/quote/game?title=mass+effect+3";
  } else if (menu == "Animal Crossing: New Horizons") {
    var_url = "http://localhost:3000/api/quote/game?title=animal+crossing+new+horizons";
  } else if (menu == "Horizon Zero Dawn") {
    var_url = "http://localhost:3000/api/quote/game?title=horizon+zero+dawn"
  } else {
    var_url = "http://localhost:3000/api/random";
  }
  console.log(var_url);
});


function setQuote() {

  // * API call using the ajax method in jQuery
  $.ajax({
    // * Settings that are used to send the API call
    url: var_url,
    type: "GET",
    dataType: "json",
    headers: {
      accept: "application/json",
    },
    // * What happens after the API call comes back if it's successful
    success: function (data) {
      $("#text").text('"' + data.quote + '"');
      $("#author").text("-" + data.character);
      $("#game").text(", " + data.title);
      // data is a quote in JSON form
      //   {
      //     "id": 307,
      //     "quote": "1998... I'll never forget it... It was the year when those grisly murders occurred in the Arklay Mountains.",
      //     "character": "Leon Kennedy",
      //     "title": "Resident Evil 4",
      //     "esrb": "M",
      //     "release": 2005
      // }
      console.log(var_url);
      console.log(data);
    },
    // * What happens if the API call fails
    error: function (xhr, status) {
      alert("error");
    },
  });
}
function onclick() {
  // * Sets a new quote
  setQuote();
}