
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

// When submitting the form

function myFunction() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("mce-EMAIL").value;

    if ((name) && (email)) {

        alert(name + ",We have received your message. Thank you for reaching out to us");
    } else {
        alert("Please Enter you email address")
    }
}