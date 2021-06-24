$(document).ready(function() {
    $(".show").click(function() {
        $(".show").toggle(2000);
        $(".hide").toggle(2000);
    });
    $(".hide").click(function() {
        $(".hide").toggle(2000);
        $(".show").toggle(2000);

    });
    $(".show1").click(function() {
        $(".show1").toggle(2000);
        $(".hide1").toggle(2000);
    });
    $(".hide1").click(function() {
        $(".hide1").toggle(2000);
        $(".show1").toggle(2000);
    });
    $(".show2").click(function() {
        $(".show2").toggle(2000);
        $(".hide2").toggle(2000);
    });
    $(".hide2").click(function() {
        $(".hide2").toggle(2000);
        $(".show2").toggle(2000);
    });
});




$(document).ready(function() {
    $(".pic").hover(function() {
        $("#pic").toggle(400, "linear");
    });
    $(".pic1").hover(function() {
        $("#pic1").toggle(500);
    });

    $(".pic2").hover(function() {
        $("#pic2").toggle(500);
    });

    $(".pic3").hover(function() {
        $("#pic3").toggle(400);
    });

    $(".pic4").hover(function() {
        $("#pic4").toggle(400, "linear");
    });

    $(".pic5").hover(function() {
        $("#pic5").toggle(400);
    });

    $(".pic6").hover(function() {
        $("#pic6").toggle(400);
    });
    $(".pic7").hover(function() {
        $("#pic7").toggle(400);
    });
});


// Used formspree on contact us for email purposes

function myFunction() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("mwania-EMAIL").value;

    if ((name) && (email)) {

        alert(name + ",We have received your message. Thank you for reaching out to us");
    } else {
        alert("Please Enter you email address")
    }
}
