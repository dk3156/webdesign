$(document).ready(function(){

    var total = 0;

    //when click the picture, the caption color changes
    $(".card-img-top").mouseover(function(){
        $(".card-title").css("color", "white");
        $(".card-text").css("color", "white");
        $(".card-body").css("background", "green");
    });

    $(".card-img-top").mouseleave(function(){
        $(".card-title").css("color","gray");
        $(".card-text").css("color", "gray");
        $(".card-body").css("background", "white");
    });

    //animate the title
    $(".navbar-brand").mouseover(function(){
        $(".navbar-brand").animate({
            width: "70%",
            opacity: 0.4,
            marginLeft: "0.6in",
            fontSize: "3em",
            borderWidth: "10px"
        }, 3000);
    });

    //make the carousel image opaque randomly everytime double clicked
    $(".carousel-item").dblclick(function(){
        $(".d-block").fadeTo( "fast", Math.random() );
        $(".carousel-caption").css("color", "black");
    })

    //change the background color to random
    $(window).keyup(function(){
        $("body").css("background", getRandomColor);
    });

    //in donate page
    //everytime user clicks the button, display the total amount
    $(".donate5").click(function(){
        total += 5;
        removeTotal();
        displayTotal();
    });

    $(".donate10").click(function(){
        total += 10;
        removeTotal();
        displayTotal();
    });

    $(".donate15").click(function(){
        total += 15;
        removeTotal();
        displayTotal();
    });

    $(".donate50").click(function(){
        total += 50;
        removeTotal();
        displayTotal();
    });

    $(".donate500").click(function(){
        total += 500;
        removeTotal();
        displayTotal();
    });

    $(".donate5000").click(function(){
        total += 5000;
        removeTotal();
        displayTotal();
    });

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i=0; i<6; i++){
            color += letters[Math.floor(Math.random()*16)]
        }
        return color;
    }

    function displayTotal() {
        $("#amountsaved").append(total);
    }

    function removeTotal() {
        $("#amountsaved").html("Total amount: $");
    }
});