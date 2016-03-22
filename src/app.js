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

        // saves article content
        var $articles = $("h1, h2, p, img");
        var candidates = [];
        var paragraphs = "";

        // $articles.each(function(){
        //     candidates.push($(this).find("p"));
        // });

        // console.log(candidates);

        // remove all styles stuff
        $("link[rel='stylesheet'], script, style").remove();
        $("*").removeAttr("style");
        $(".carnival, .carnival-comment-indicator").remove();

        // creates a new body and the fancy-reader element
        $body.append("<div class='new-body'></div>");
        var $new_body = $(".new-body");

        $new_body.append("<article class='fancy-reader'></article>");
        var $fancy_reader = $(".fancy-reader");


        $fancy_reader.html($articles);


        // $('link[rel="stylesheet"], style').remove();
        // $('*').removeAttr('style');
    }
});
