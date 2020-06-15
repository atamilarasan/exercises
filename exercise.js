var content = "";
var boolShuffle = false;
var arrColor = [{ "id": 1, "color": "#6F98A8" },
{ "id": 2, "color": "#2B8EAD" },
{ "id": 3, "color": "#2F454E" },
{ "id": 4, "color": "#2B8EAD" },
{ "id": 5, "color": "#2F454E" },
{ "id": 6, "color": "#BFBFBF" },
{ "id": 7, "color": "#BFBFBF" },
{ "id": 8, "color": "#2B8EAD" },
{ "id": 9, "color": "#2F454E" }];

function shuffle(colorArray) {
    var ctr = colorArray.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = colorArray[ctr];
        colorArray[ctr] = colorArray[index];
        colorArray[index] = temp;
    }
    return colorArray;
}
function display(boolShuffle) {
    content = "";
    if (boolShuffle) {
        var newArrColor = [...arrColor]
        var arrShuffle = shuffle(newArrColor);
        for (var i = 0; i < arrShuffle.length; i++) {
            content += "<div class='cell' id='" + arrShuffle[i].id + "' style='background-color:" + arrShuffle[i].color + "'>" + arrShuffle[i].id + "</div>";
        }
    } else {
        for (var i = 0; i < arrColor.length; i++) {
            content += "<div class='cell' id='" + arrColor[i].id + "' style='background-color:" + arrColor[i].color + "'>" + arrColor[i].id + "</div>";
        }
    }
    document.getElementById('num').innerHTML = content;
}