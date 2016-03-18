var f_serif = "'Times New Roman', Georgia, serif";
var f_sans_serif = "'Helvetica Neue', Helvetica, Arial, sans-serif";
var titles = document.getElementsByTagName("h1");
var paragraphs = document.getElementsByTagName("p");

console.log(titles.length, paragraphs.length);

for (numTitles = 0; numTitles < titles.length; numTitles++) {
    titles[numTitles].style.fontFamily = f_serif+" !important";
}

for (numParagrahps = 0; numParagrahps < titles.length; numParagrahps++) {
    paragraphs[numParagrahps].style.fontFamily = f_sans_serif+" !important";
}
