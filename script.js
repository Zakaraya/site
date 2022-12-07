let latinPhrases = [
    'Consuetudo est altera natura',
    "Nota bene",
    'Nulla calamitas sola',
    'Per aspera ad astra',
];
let russianPhrases = [
    'Привычка - вторая натура',
    'Заметье хорошо!',
    'Беда не приходит одна',
    'Через тернии к звездам',
];

function addRow(id) {
    if (latinPhrases.length == 0) {
        alert('Фразы закончились');
    } else {
        var tbody = document.getElementById(id).getElementsByTagName("tbody")[0];
        var row = document.createElement("tr")
        row.className = "row";
        row.setAttribute("id", "test");
        var td1 = document.createElement("td")
        var rand_index = Math.floor(Math.random() * latinPhrases.length);
        td1.appendChild(document.createTextNode(latinPhrases[rand_index]))
        var td2 = document.createElement("td")
        td2.appendChild(document.createTextNode(russianPhrases[rand_index]))
        latinPhrases.splice(rand_index, 1)
        russianPhrases.splice(rand_index, 1)
        row.appendChild(td1);
        row.appendChild(td2);
        tbody.appendChild(row);
    }
}

function changeBold() {
    // document.querySelectorAll('.even-row-class').forEach(row => {
    //     row.style.fontWeight = 'bold';
    // });
    //   var tbody = document.getElementById("tbody")
    var val = test.style.backgroundColor;
    alert(val);
}

function altrows() {
    var tableElements = document.getElementsByTagName("table");
    for (var j = 0; j < tableElements.length; j++) {
        var table = tableElements[j];

        var rows = table.getElementsByTagName("tr");
        for (var i = 0; i <= rows.length; i++) {
            if (i % 2 != 0) {
                rows[i].style.fontWeight = 'bold';
            }
            // else{
            //     rows[i].style.backgroundColor = "black" ;
            // }
        }
    }
}