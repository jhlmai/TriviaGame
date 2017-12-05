$(document).ready(function () {

    var number = 30;
    var intervalId;

    // trivia questions start off hidden
    $(".person").hide();
    $("#show-number").hide();
    // when START button clicked, hide button and show questions
    $("#button").click(function () {
        $("#show-number").show();
        $("#button").hide();
        $(".person").show();



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
                      alert("Time Up!");
                    }
                  }

        // var number = 100;
        
            //  Variable that will hold our interval ID when we execute
            //  the "run" function
            // var intervalId;
        
            //  When the stop button gets clicked, run the stop function.
            // $("#stop").on("click", stop);
        
            //  When the resume button gets clicked, execute the run function.
            // $("#resume").on("click", run);
        
            //  The run function sets an interval
            //  that runs the decrement function once a second.
          
        
            //  The stop function
            function stop() {
        
              //  Clears our intervalId
              //  We just pass the name of the interval
              //  to the clearInterval function.
              clearInterval(intervalId);
            }
        
            //  Execute the run function.
            run();


        // function run() {
        //     intervalId = setInterval(decrement, 1000);

        //     function decrement() {
        //         number--;

        //         //  Show the number in the #show-number tag.
        //         $("#timeLeft").html("<h2>" + number + "</h2>");
        //         run();
        // };
        // };








    });
});







