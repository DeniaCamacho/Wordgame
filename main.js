$(document).ready(function() {
  var commonWords = [
    "the",
    "of",
    "and",
    "a",
    "to",
    "in",
    "is",
    "you",
    "that",
    "it",
    "he",
    "was",
    "for",
    "on",
    "are",
    "as",
    "with",
    "his",
    "they",
    "I",
    "at",
    "be",
    "this",
    "have",
    "from",
    "or",
    "one",
    "had",
    "by",
    "word",
    "but",
    "not",
    "what",
    "all",
    "were",
    "we",
    "when",
    "your",
    "can",
    "said",
    "there",
    "use",
    "an",
    "each",
    "which",
    "she",
    "do",
    "how",
    "their",
    "if",
    "will",
    "up",
    "other",
    "about",
    "out",
    "many",
    "then",
    "them",
    "these",
    "so",
    "some",
    "her",
    "would",
    "make",
    "like",
    "him",
    "into",
    "time",
    "has",
    "look",
    "two",
    "more",
    "write",
    "go",
    "see",
    "number",
    "no",
    "way",
    "could",
    "people",
    "my",
    "than",
    "first",
    "water",
    "been",
    "call",
    "who",
    "oil",
    "its",
    "now",
    "find",
    "long",
    "down",
    "day",
    "did",
    "get",
    "come",
    "made",
    "may",
    "part"
  ]
  //this filters words containing 3 or more letters

  var wordChoices = commonWords.filter(word => word.length >= 3)
  //choices one word randomly from new array

  var random = wordChoices[
    Math.floor(Math.random() * wordChoices.length)
  ].split("")

  //makes a matching array of underscores for random word chosen
  var underscores = random.map(l => "_")
  document.querySelector("#word").innerHTML = underscores.join(" ")

  var turns = 6
  $("#turns").html("You Have " + turns + " Tries Left.")

  let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ]
  let buttons = ""
  letters.forEach(guess => {
    buttons += `<button> ${guess.toUpperCase()}</button>`
  })
  $("#buttons").html(buttons)

  //above assigns a letter to teach button
  $("#buttons").on("click", "button", function(e) {
    e.preventDefault()
    var guessLetter = $(this)
      .html()
      .toUpperCase()
    $(this).attr("disabled", true)
    // console.log(random)
    console.log(guessLetter)
    console.log(random)

    if (random.includes(guessLetter)) {
      for (let i = 0; i < underscores.length; i++) {
        if (random[i] === underscores.toUppercase()) {
          underscores[i] === guessLetter
          $("#word").html(underscores.join(" "))

          if (underscores.join("") === random) {
            $("#results").html("You Win!")
            $("#buttons").hide()
            $("#turns").hide()
          }
        }
      }
    } else if (random.includes(guessLetter) === false) {
      turns--
      $("#turns").html("You Have " + turns + " Tries Left.")
      if (turns === 0) {
        $("#result").html("Sorry, You Lose!")
        $("#buttons").hide()
        $("#turns").hide()
      }
    }
  })
})
