$(document).ready(function () {
  // * Sets the quote when the page loads
  setQuote();
  // * Listens for the new quote button click, on the click, run onclick function below
  $("#generate-quote").on("click", function () {
    onclick();
    //is this correct way to run multiple functions with one jquery event?
    bgFade();
  })
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
});
function bgFade() {
  $('body'.background).fadeTo(5000, 0);
}

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
  selectElement = document.querySelector("#game-select")
  output = selectElement.value
  bgColor = ""
  txtColor = ""
  btnColor = ""
  if (output == "Elden Ring") {
    bgColor = "#D7BC2D";
    txtColor = "#D7BC2D";
    btnColor = "#D7BC2D";
  } else if (output == "Mass Effect 3") {
    bgColor = "#3A4E82";
    txtColor = "#3A4E82";
    btnColor = "#3A4E82";
  } else if (output == "Horizon Zero Dawn") {
    bgColor = "#43CAA3";
    txtColor = "#43CAA3";
    btnColor = "#43CAA3";
  } else if (output == "Animal Crossing: New Horizons") {
    bgColor = "#339957";
    txtColor = "#339957";
    btnColor = "#339957";
  } else {
    bgColor = "rgb(3, 128, 211)";
    txtColor = "rgb(3, 128, 211)";
    btnColor = "rgb(3, 128, 211)";
  }
  document.getElementById("generate-quote").style.backgroundColor = btnColor
  document.getElementById("tweet-quote").style.backgroundColor = btnColor
  document.body.style.backgroundColor = bgColor
  document.body.style.color = txtColor
  console.log(document.body.style.backgroundColor)
  // * Sets a new quote
  setQuote();
}