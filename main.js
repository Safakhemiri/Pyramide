
var x = window.prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
console.log("> " + x);
console.log("Voici la pyramide :");
function renderPyramid(n) {
    for (var i = 0; i < n; i++) {
        var str = '';
        for (var j = 1; j < n - i; j++) {
            str = str + ' ';
        }
        for (var k = 1; k <= (2 * i + 1); k++) {
            str = str + '#';
        }
        console.log(str);
    }
}
if (x <= 25) { renderPyramid(x); }
else console.log(" ");





