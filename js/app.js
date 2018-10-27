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
        var pageUrl = encodeURIComponent(document.URL);
        var param3 = encodeURIComponent($("#quote").text());
        var param4 = encodeURIComponent($("#author").text());
        var pageTest=
        // var u = location.href;
        // var t = param3 + param4;
        var newUrlFb = "https://www.facebook.com/sharer/sharer.php?u=" + pageUrl;
        // var newUrlFb = "http://www.facebook.com/sharer.php?u=" + pageUrl", 'sharer', 'toolbar=0,status=0,width=626,height=436";


        $(".btn-facebook").attr("href", newUrlFb);
    });

    // function fbs_click() {
    //     u = location.href;
    //     t = document.title;
    //     window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t), 'sharer', 'toolbar=0,status=0,width=626,height=436');
    //     return false; }
});