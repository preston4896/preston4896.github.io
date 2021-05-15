(function($){
    var url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fblog.prestonong.com%2Ffeed";
    var items;
    $.getJSON(url, function(json){
        items = json.items;
    }).done(() => {console.log(items[0]);})
})(jQuery);