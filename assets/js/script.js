$(document).ready(function() {
$("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
});
$("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
});
$("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
});
}); 

// challenge and jquery events examples

// $("p").click(function() {
//         $("p").css("color", "red");
//     });

//     $("h2").hover(function() {
//         $("h2").css("background", "lightblue");
//     });

//     $(".card-panel").mouseenter(function() {
//         $("body").css("background-color", "black");
//     });

//     $(".card-panel").mouseleave(function() {
//         $("body").css("background-color", "#e1e2e2");
//     });

// jQuery effects examples

// $("#card-panel-1").click(function() {
//         $("#card-panel-1").hide("slow");
//     });

//     $("#card-panel-2").click(function() {
//         $("#card-panel-2").hide("medium");
//     });

//     $("#card-panel-3").click(function() {
//         $("#card-panel-3").hide("fast");
//     });

//     $("#card-panel-4").click(function() {
//         $("#card-panel-4").hide(3000);
//     });

// method chaining examples

// $("button").mouseenter(function(){
//         $("button").removeClass("make-red").addClass("make-border");
//     });

//     $("button").mouseleave(function() {
//         $("button").removeClass("make-border").addClass("make-red");
//     });