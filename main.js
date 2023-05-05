"use strict"
let extraPerday = 0;
let tollTag = Document.getElementById("TollTag").checked;
if (tollTag == true) {
    extraPerday += 3.95;
    {
        let gps = document.getElementById("gps").checked;
        if (gps == true) {
            extraPerday += 4.95;
        }
        let roadside = document.getElementById("roadside".checked;
        if (roadside == true) {
            extraPerday += 2.95;
        }
    }
}