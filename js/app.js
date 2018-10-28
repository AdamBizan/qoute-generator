$(function() {

    function getQuote(text, author) {
        var forismaticURL = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"
        $.getJSON(forismaticURL, function (data) {
            $(".quote").html("\"" + data.quoteText + "\"");
            if (data.quoteAuthor == "") {
                $(".author").html(" -Anonymous");
            } else {
                $("div.author").html(" -" + data.quoteAuthor);
            }
        });
        $("#star").on("click", function(event) {
            var param1 = $("#quote").text();
            var param2 = $("#author").text();
            var qoute = param1 + param2;
            var locStor = localStorage.setItem("fav", qoute);
            var lastItem = localStorage.getItem("fav");
            $('ul').append('<li>' + lastItem);
            $( this ).off( event );
        })
    };

    var author = $("#author");
    var text = $("#quote");

    getQuote(text, author);

    $("#getQuote").click(function(event) {
        event.preventDefault();
        $('#quote-box').fadeOut(1);
        getQuote(text, author);
        $('#quote-box').delay(100).fadeIn(500);

    });

    $("#tweet").click(function () {
        var param1 = encodeURIComponent($("#quote").text());
        var param2 = encodeURIComponent($("#author").text());
        var newUrl = "https://twitter.com/intent/tweet?text=" + param1 + param2;
        $(".btn-twitter").attr("href", newUrl);
    });

    $("#face").click(function () {
          var newUrlFb = "https://www.facebook.com/sharer/sharer.php?u=" + location.href;
        $(".btn-facebook").attr("href", newUrlFb);
    });

    // $("#star").on("click", function(event) {
    //     var param1 = $("#quote").text();
    //     var param2 = $("#author").text();
    //     var qoute = param1 + param2;
    //     var locStor = localStorage.setItem("fav", qoute);
    //     var lastItem = localStorage.getItem("fav");
    //     $('ul').append('<li>' + lastItem);
    //     $( this ).off( event );
    // })
});