console.clear();
// const btn_level_1 = document.querySelector('#level-1')
// if (btn_level_1) {
//     btn_level_1.addEventListener('click', function () {
//         BTweens(0);
//         window.onresize = function () {
//             TwL.killDelayedCallsTo(BTweens);
//             TwL.delayedCall(0.4, BTweens);
//         };
//         document.getElementById('draggable-items').style.display = 'block';
//         sessionStorage.setItem('count_point', 0)
//         sessionStorage.setItem('level', 1)
//         // document.getElementById( 'level-2' ).style.display = 'none';
//         // document.getElementById( 'level-3' ).style.display = 'none';
//     })
//
// }
// const btn_level_2 = document.querySelector('#level-2')
// if (btn_level_2) {
//
//     btn_level_2.addEventListener('click', function () {
//         // window.location.reload()
//         document.getElementById('draggable-items').style.display = 'block';
//         sessionStorage.setItem('count_point', 5)
//         BTweens(5);
//         window.onresize = function () {
//             TwL.killDelayedCallsTo(BTweens);
//             TwL.delayedCall(0.4, BTweens);
//         };
//
//     })
// }
//
// const btn_level_3 = document.querySelector('#level-3')
// if (btn_level_3) {
//     btn_level_3.addEventListener('click', function () {
//         document.getElementById('draggable-items').style.display = 'block';
//         sessionStorage.setItem('count_point', 10)
//         BTweens(2);
//         window.onresize = function () {
//             TwL.killDelayedCallsTo(BTweens);
//             TwL.delayedCall(0.4, BTweens);
//         };
//
//     })
// }



function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

let count_point = 0;
// let level_speed = 5;
let level = 1;
// const scoreSection = document.querySelector(".score");
const correctSpan = document.querySelector(".correct");

let correct = 0;


function drop(ev) {

    ev.preventDefault();
    const draggableElementBrand = ev.dataTransfer.getData("text"); // тащить
    const droppableElementBrand = ev.target.getAttribute("data-drop"); // отпускать

    var data = ev.dataTransfer.getData("Text");
    var dragged = document.getElementById(data);


    if (ev.target.tagName == "IMG") {
        // var parent = ev.target.parentElement || ev.target.parentNode;
        // dragged.parentElement.appendChild(ev.target);
        // parent.appendChild(dragged);
        console.log("not operation")
    } else {
        if (draggableElementBrand == droppableElementBrand) {
            ev.target.appendChild(dragged);
        }
    }
}

var MR = function (X) {
    return Math.random() * X
}, TwL = TweenLite, G = document.querySelectorAll('.crystal');

function BTweens(speed) {
    var C = 100;
    for (var i = G.length; i--;) {
        var c = C, BA = [], GWidth = G[i].offsetWidth, GHeight = G[i].offsetHeight;
        while (c--) {
            BA.push({x: MR(GWidth), y: MR(GHeight)});
        }
        G[i].T = TweenMax.to(G[i], C * speed, {
            bezier: {timeResolution: 0, type: "soft", values: BA},
        });
    }
};