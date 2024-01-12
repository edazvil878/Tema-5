/* Rescribe la siguiente función de reemplazo de caracteres utilizando expresiones regulares

function esvapeHTML(text){
    var replacements = [["&", "&amp;"], ["\", "&quot;"], ["<", "&lt;"], [">", "&gt;"]];
    forEahch(replacements, function(replace){
        text = text.replace(replace[0], replace[1]);
    });
    return text;
}

*/

function esvapeHTML(text) {
    var replacements = [
        ["&", "&amp;"],
        ['"', "&quot;"],
        ["<", "&lt;"],
        [">", "&gt;"]
    ];

    replacements.forEach(function (replace) {
        var regex = new RegExp(replace[0], 'g');
        text = text.replace(regex, replace[1]);
    });

    return text;
}

