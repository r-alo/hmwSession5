// Display today's day and date
let todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {

    function hourTracker () {
        //Constant w/ the current hour
        const currentHour = moment().hour();

        //check schedule blocks time to set background color
        $(".scheduleBlock").each(function () {

            let blockTime = parseInt($(this).attr("id"));

            // Conditional to check time and add background color to the schedule Block
            if (blockTime < currentHour) {
                $(this).css("background-color", "#d3d3d3");
            }
            else if (blockTime === currentHour) {
                $(this).css("background-color", "#619bff");
            }
            else {
                $(this).css("background-color", "#77dd77");
            }
        })
    };

    hourTracker();

})
