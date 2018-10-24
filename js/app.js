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
        })
    };

    var author = $("#author");
    var text = $("#quote");

    getQuote(text, author);


    $("#tweet").click(function () {
        var param1 = encodeURIComponent($("#quote").text());
        var param2 = encodeURIComponent($("#author").text());
        var newUrl = "https://twitter.com/intent/tweet?text=" + param1 + param2;
        $(".btn-twitter").attr("href", newUrl);
    });
});