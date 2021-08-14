var l1 = 0;
var l2 = 0;
var el = document.getElementById("container");
for (var i = 0; i < 100; i++) {
    if (i % 10 == 0) {
        l1 = 0;
        l2 = 0;
    }
    var divTag = document.createElement("div");
    // divTag.setAttribute("align", "center");
    divTag.style.marginLeft = l1 + "px";
    divTag.style.marginTop = l2 + "px";
    divTag.className = "dynamicDiv";
    //divTag.innerText="";
    el.appendChild(divTag);
    l1 += 50;
    l2 = -50;

}

var ele1 = document.getElementsByClassName('dynamicDiv');
var dr1 = 1;
var dr2 = 2;
var dr3 = 3;
var dr4 = 4;
var curr = 1;
var h = 2;
var t = 0;

ele1[0].style.backgroundColor = "blue";
ele1[0].innerText = "1";
ele1[1].style.backgroundColor = "blue";
ele1[1].innerText = "1";
ele1[2].style.backgroundColor = "red";
ele1[55].style.backgroundColor = "red";
ele1[55].innerText = "5";
var rd = 55;

function rel() {
    location.reload();
}
//ele1[1].innerText="1";
function set() {
    if (curr == dr1) {
        /*if(h%10==9){
           // alert("The End");
            rel();
        }*/
        var ch;
        if ((h + 1) % 10 == 0)
            ch = h - 9;
        else {
            ch = h + 1;
        }
        var char = ele1[ch].innerText;
        if (char != "" && char != "5") {
            rel();
        }
        ele1[t].style.backgroundColor = "yellow";
        ele1[h].innerText = "1";
        ele1[h].style.backgroundColor = "blue";
        ele1[ch].style.backgroundColor = "red";
        h = ch;
    } else if (curr == dr4) {
        /*if(h>=90){
            //alert("The End");
            rel();
        }*/
        var ch;
        if (h >= 90) {
            ch = h % 10;
        } else {
            ch = h + 10;
        }
        var char = ele1[ch].innerText;
        if (char != "" && char != "5") {
            rel();
        }
        ele1[t].style.backgroundColor = "yellow";
        ele1[h].innerText = "4";
        ele1[h].style.backgroundColor = "blue";
        ele1[ch].style.backgroundColor = "red";
        h = ch;
    } else if (curr == dr3) {
        /* if(h<10){
            // alert("The End");
             rel();  
         }*/
        var ch;
        if (h < 10) {
            ch = 90 + h;
        } else {
            ch = h - 10;
        }
        var char = ele1[ch].innerText;
        if (char != "" && char != "5") {
            rel();
        }
        ele1[t].style.backgroundColor = "yellow";
        ele1[h].innerText = "3";
        ele1[h].style.backgroundColor = "blue";
        ele1[ch].style.backgroundColor = "red";
        h = ch;
    } else if (curr == dr2) {
        /*if(h%10==0){
            //alert("The End");
            rel();
        }*/
        var ch;
        if (h % 10 == 0) {
            ch = h + 9;
        } else {
            ch = h - 1;
        }
        var char = ele1[ch].innerText;
        if (char != "" && char != "5") {
            rel();
        }
        ele1[t].style.backgroundColor = "yellow";
        ele1[h].innerText = "2";
        ele1[h].style.backgroundColor = "blue";
        ele1[ch].style.backgroundColor = "red";
        h = ch;
    }
    var char = ele1[h].innerText;
    if (char != "5") {
        var char = ele1[t].innerText;
        ele1[t].innerText = "";
        if (char == "1") {
            if (t % 10 == 9) {
                t = t - 9;
            } else {
                t++;
            }
        } else if (char == "2") {
            if (t % 10 == 0) {
                t = t + 9;
            } else {
                t--;
            }
        } else if (char == "3") {

            if (t < 10) {
                t += 90;
            } else {
                t -= 10;
            }
        } else if (char == "4") {
            if (t >= 90) {
                t = t - 90;
            } else {
                t += 10;
            }
        }
    } else {
        ele1[h].innerText = "";
        rd = (rd + 73) % 100;
        while (true) {
            if (rd == h) {
                rd = (rd + 69) % 100;
            }
            rd = (rd + 73) % 100;
            var k = ele1[rd].innerText;
            if (k == "") {
                break;
            }
        }
        ele1[rd].style.backgroundColor = "red";
        ele1[rd].innerText = "5";
    }
}
var ele2 = document.getElementsByTagName('button');
var el = 1;
ele2[0].addEventListener('click', function () {
    el = 1 - el;
    if (el == 0)
        ele2[0].innerText = "pause";
    else
        ele2[0].innerText = "resume";
});

function set1() {
    if (el == 0) {
        set();
        return;
    } else {
        return;
    }
}
document.addEventListener('keypress', function (event) {
    var char = String.fromCharCode(event.keyCode);
    if (el == 0) {
        if (char == 's') {
            if (curr != 3)
                curr = 4;
        } else if (char == 'w') {
            if (curr != 4)
                curr = 3;
        } else if (char == 'd') {
            if (curr != 2)
                curr = 1;
        } else if (char == 'a') {
            if (curr != 1)
                curr = 2;
        }
        set1();
    } else {
        return;
    }
});
setInterval(set1, 400);