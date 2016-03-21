chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {

        /*
        ** ---- IDEIA INICIAL ----
        ** fazer um clone de todos os elementos do body para uma nova variável. após isso,
        ** remover todas as classes e estilos desse "novo body"
        **
        ** ---- INITIAL IDEA ----
        ** make a clone of all the elements that are inside the body to a new variable. after that,
        ** remove all the classes and styles from this "new body"
        */

        var serif = "'Times New Roman', Georgia, serif";
        var sans_serif = "'Helvetica Neue', Helvetica, Arial, sans-serif";
        var titles = $("h1, h2, h3");
        var paragraphs = $("p");

        titles.css("font-family", serif);
        paragraphs.css("font-family", sans_serif);

        $("link[rel='stylesheet'], style").remove();

        // $('link[rel="stylesheet"], style').remove();
        // $('*').removeAttr('style');
    }
});
