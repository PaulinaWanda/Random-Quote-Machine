$(document).ready(function(){
    $.getJSON('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', function(data){
        var citation = data[0];
        $("blockquote p").remove();
        $("blockquote").prepend(citation.content);
        $("cite").text("—"+citation.title);
        $("#twitter").prepend("<a href='https://twitter.com/intent/tweet?text="+$("blockquote p").text()+" "+$("cite").text()+"' target='_blank'></a>");
    });
    $(".next").on("click", function(){
        $.ajax({
            dataType: "json",
            url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            cache: false,
            beforeSend: function(){
                $("blockquote").addClass("is-loading");
            },
            complete: function(){
                $("blockquote").removeClass("is-loading");
            },
            success: function(data) {
                var citation = data[0];
                $("blockquote p").remove();
                $("blockquote").prepend(citation.content);
                $("cite").text("—"+citation.title);
                $("#twitter").prepend("<a href='https://twitter.com/intent/tweet?text="+$("blockquote p").text()+" "+$("cite").text()+"' target='_blank'></a>");
            }
        });
    });
});