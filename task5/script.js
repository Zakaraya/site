console.clear();
console.log(localStorage)
const btn_level_1 = document.querySelector('#level-1')
if (btn_level_1) {
    btn_level_1.addEventListener('click', function () {
        BTweens(0);
        window.onresize = function () {
            TwL.killDelayedCallsTo(BTweens);
            TwL.delayedCall(0.4, BTweens);
        };
        document.getElementById('draggable-items').style.display = 'block';
        sessionStorage.setItem('count_point', 0)
        sessionStorage.setItem('level', 1)
        // document.getElementById( 'level-2' ).style.display = 'none';
        // document.getElementById( 'level-3' ).style.display = 'none';
    })

}
const btn_level_2 = document.querySelector('#level-2')
if (btn_level_2) {

    btn_level_2.addEventListener('click', function () {
        // window.location.reload()
        document.getElementById('draggable-items').style.display = 'block';
        sessionStorage.setItem('count_point', 5)
        BTweens(5);
        window.onresize = function () {
            TwL.killDelayedCallsTo(BTweens);
            TwL.delayedCall(0.4, BTweens);
        };

    })
}

const btn_level_3 = document.querySelector('#level-3')
if (btn_level_3) {
    btn_level_3.addEventListener('click', function () {
        document.getElementById('draggable-items').style.display = 'block';
        sessionStorage.setItem('count_point', 10)
        BTweens(2);
        window.onresize = function () {
            TwL.killDelayedCallsTo(BTweens);
            TwL.delayedCall(0.4, BTweens);
        };

    })
}


const button = document.querySelector('.button-new-user')
if (button) {
    sessionStorage.clear()
    button.addEventListener('click', function () {

        const username = document.getElementById('username').value;
        if (typeof localStorage[username] == 'undefined') {
            document.location = 'index.html';
            sessionStorage.setItem('username', username)
            localStorage.setItem(username, 0)
        } else {
            alert("That name's taken")
        }

    })
}
const button_play_again = document.querySelector('.play-again-btn')
if (button_play_again) {
    button_play_again.addEventListener('click', function () {
        localStorage.setItem(sessionStorage.getItem('username'), 0)
        sessionStorage.setItem('count_point', 0)
        sessionStorage.setItem('level', 1)
        window.location.reload();
    })
}

const rating_btn = document.querySelector('.rating')
if (rating_btn) {
    document.addEventListener("DOMContentLoaded", SortLocalStorage);
}

function SortLocalStorage() {
    let i;
// document.location = 'rating.html';
    var mass_elements = new Array();
    for (i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        mass_elements.push(localStorage.getItem(key));
    }

    mass_elements = mass_elements.sort(function (a, b) {
        return parseInt(a, 10) - parseInt(b, 10);
    }).reverse();
    console.log(mass_elements)
    for (i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        console.log(key)
        // document.getElementById('high_score').innerHTML += key + mass_elemets[i] + '\n';
        document.getElementById('rating-username').innerHTML += key + "<br />";
        document.getElementById('rating-score').innerHTML += mass_elements[i] + "<br />";
    }
}


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

    // const scoreSection = document.querySelector(".score");
    // const totalSpan = scoreSection.querySelector(".total");
    const playAgainBtn = document.querySelector("#play-again-btn");

    var data = ev.dataTransfer.getData("Text");
    var dragged = document.getElementById(data);


    if (ev.target.tagName == "IMG") {
        // var parent = ev.target.parentElement || ev.target.parentNode;
        // dragged.parentElement.appendChild(ev.target);
        // parent.appendChild(dragged);
        console.log("fdsf")
    } else {
        if (draggableElementBrand == droppableElementBrand) {
            ev.target.appendChild(dragged);
            if (sessionStorage.getItem('level') == 1) {
                correct = correct + 10
            }
            if (sessionStorage.getItem('level') == 2) {
                correct = correct + 20
            }
            if (sessionStorage.getItem('level') == 3) {
                correct = correct + 40
            }
            count_point = count_point + 1;
            localStorage.setItem(sessionStorage.getItem('username'), correct)
            if (count_point == 5) {
                alert("You unlocked LEVEL 2");
                sessionStorage.setItem('level', 2)
                sessionStorage.setItem('count_point', 5)
                window.location.reload();
            } else if (count_point == 10) {
                alert("You unlocked LEVEL 3");
                sessionStorage.setItem('level', 3)
                sessionStorage.setItem('count_point', 10)
                window.location.reload();
            } else if (count_point == 15) {
                alert("You WIN");
                window.location.href = "rating.html";
            }
        } else {
            correct = correct - 5
            localStorage.setItem(sessionStorage.getItem('username'), correct)
        }
    }
    setTimeout(() => {
        correctSpan.textContent = correct;
    }, 20);
}

function f() {
    count_point = Number(sessionStorage.getItem('count_point'))
    level = sessionStorage.getItem('level')
    correct = Number(localStorage.getItem(sessionStorage.getItem('username')));
    correctSpan.textContent = localStorage.getItem(sessionStorage.getItem('username'));
    if (level == 2) {
        document.getElementById("level-2").disabled = false;
    } else if (level == 3) {
        document.getElementById("level-2").disabled = false;
        document.getElementById("level-3").disabled = false;
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