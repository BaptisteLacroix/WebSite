/* created by LACROIX Baptiste */

function fonction_noir() {
    document.getElementById("monpara").style.backgroundColor = "grey";
    document.getElementById("monpara").style.color = "black";
    alert("Vous venez d'activer le mode sombre du site ! Attention le mode sombre ne reste que sur cette page !");
}

function fonction_blanc() {
    document.getElementById("monpara").style.backgroundColor = "grey";
    document.getElementById("monpara").style.color = "white";
    alert("Vous venez d'activer le mode clair du site ! Attention le mode clair ne reste que sur cette page !");
}



/*

<div id="google_translate_element"></div>

<script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
</script>

<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

<p>You can translate the content of this page by selecting a language in the select box.</p>

*/



/*

function fonction_note() {
    note = document.forms['note'];
    if (note.notersite[0] == 1) {
        message = "Whouaaaa ! Merci ♥ !";
    } else if (note.notersite[0] == 1) {
        message = "Mon site est si mauvais que ça ?!";
    } else if (note.notersite[1] == 2) {
        message = "je pensais qu'il vallait plus !";
    } else if (note.notersite[2] == 3) {
        message = "Note moyenne pour un site moyen ?";
    } else if (note.notersite[3] == 4) {
        message = "Super ! Merci pour les encouragements ! Mais je pense que tu peux mieux faire...";
    } else {
        alert("Veuillez mettre une note à ce site");

    }
    alert(message);
}
*/


/*
google.load("language", "1");

function translate(lang) {
    var text = document.getElementById("text").innerHTML; //on récupère le texte d'origine
    var org = document.getElementById("lang_origin").value; // on récupère la langue d'origine
    var trans = document.getElementById("translation"); // Nom de la div où afficher le texte
    if (lang == org) // Si te texte choisis est le même que celui d'origine
    {
        trans.innerHTML = text; //aucune modification
    } else //Sinon on le traduit
    {
        google.language.translate(text, org, lang, function (result) { //tiré de l'API Google translate
            if (!result.error) {
                trans.innerHTML = result.translation;
            }
        });
    }
}

function chargertxt() //On affiche le texte dans sa langue d'origine au chargement de la page
{
    document.getElementById('translation').innerHTML = document.getElementById('text').innerHTML;
}
*/