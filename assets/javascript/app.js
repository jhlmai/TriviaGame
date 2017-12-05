$(document).ready(function () {

    var number = 5;
    var intervalId;

    // trivia questions start off hidden
    $(".person").hide();
    $("#show-number").hide();
    // when START button clicked, hide button and show questions
    $("#button").click(function () {
        $("#button").hide();
        $(".person").show();
        $("#show-number").show();

        // run function 
        function run() {
            intervalId = setInterval(decrement, 1000);
        }

        function decrement() {

            //  Decrease number by one.
            number--;

            //  Show the number in the #show-number tag.
            $("#show-number").html("<h2>Time left: " + number + "</h2>");


            //  Once number hits zero...
            if (number === 0) {

                //  ...run the stop function.
                stop();

                //  Alert the user that time is up.
                $("#timeUp").html("<h2>Time Up!</h2>")
                $(".person").hide();
                $("#show-number").hide();
                $("#correctAnswers").show();


                $('input:radio').each(function() {
                    if($(".p").is(':checked')) {
                      // You have a checked radio button here...
                      $("#correctAnswers").html("<h2>good job</h2>");
                    } 
                    else {
                      // Or an unchecked one here...
                      console.log("uncheckeddd")
                    }
                  });

            }
        }

        //  The stop function
        function stop() {

            //  Clears our intervalId
            //  We just pass the name of the interval
            //  to the clearInterval function.
            clearInterval(intervalId);
        }
        //  Execute the run function.
        run();
    });
});
