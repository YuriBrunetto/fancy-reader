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

        // init variables
        var $window = $(window);
        var $body = $("body");

        // fonts variables
        var serif = "'Times New Roman', Georgia, serif";
        var sans_serif = "'Helvetica Neue', Helvetica, Arial, sans-serif";
        var titles = $("h1, h2, h3");
        var paragraphs = $("p");

        // remove all styles stuff
        $("script[type='text/javascript'], link[rel='stylesheet'], style").remove();
        $("*").removeAttr("style");

        // creates fancy-reader element
        $body.append("<article class='new-body'></article>");
        var $fancy_reader = $("new-body");



        // $('link[rel="stylesheet"], style').remove();
        // $('*').removeAttr('style');
    }
});
