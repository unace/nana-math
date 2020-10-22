var list = []
var index = 0;
var startTime = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function makeList() {
    for (let i = 11; i < 19; ++i) {
        for (let j = 1; j < 10; ++j) {
            if ((i - j) < 10) {
                list.push([i, j]);
            }
        }
    }
    shuffle(list)
    for (let i = 0; i < list.length; ++i) {
        const item = list[i];
        console.log(`[${i + 1}] ${item[0]} - ${item[1]}`);
    }
    index = 0;
}

makeList();

function nextQuestion() {
    var item = list[index];
    document.getElementById("num1").innerHTML = `${item[0]}`;
    document.getElementById("num2").innerHTML = `-${item[1]}`;
    document.getElementById("answer").innerHTML = `?`;
    index++;
}


function start() {
    startTime = Date.now();
    document.getElementById("start").style.display = "none";
    document.getElementById("next").style.display = "inline";
    nextQuestion();
}

function next() {
    if (index < list.length) {
        nextQuestion();
    }
    else {
        document.getElementById("num1").innerHTML = `Congrats!`;
        const elapsedTime = Date.now() - startTime;
        document.getElementById("num2").innerHTML = `${Math.round(elapsedTime / 1000)} secs`;
        document.getElementById("next").style.display = "none";
        document.getElementById("start").style.display = "start";
    }
}