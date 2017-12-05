$(document).ready(function () {

    var number = 30;
    var intervalId;

    // trivia questions start off hidden
    $(".person").hide();
    $("#timeLeft").hide();
    // when START button clicked, hide button and show questions
    $("#button").click(function () {
        $("#button").hide();
        $(".person").show();
        $("#timeLeft").show();
        function run() {
            intervalId = setInterval(decrement, 1000);
        }
        function decrement() {
            number--;
        }
    });

      //  Show the number in the #show-number tag.
      $("#timeLeft").html("<h2>" + number + "</h2>");
run();
});




