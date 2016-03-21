chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {
        var serif = "'Times New Roman', Georgia, serif";
        var sans_serif = "'Helvetica Neue', Helvetica, Arial, sans-serif";
        var titles = $("h1, h2, h3");
        var paragraphs = $("p");

        console.log(titles.length, paragraphs.length);

        titles.css("font-family", serif);
        paragraphs.css("font-family", sans_serif);
    }
});
