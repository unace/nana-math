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
    let overTen = [];
    let notOverTen = [];
    for (let i = 51; i < 90; ++i) {
        if (i % 10 != 0) {
            for (let j = 51; j < 90; ++j) {
                if (j % 10 != 0) {
                    if ((i % 10) + (j % 10) >= 10) {
                        overTen.push([i, j]);
                    }
                    else {
                        notOverTen.push([i, j]);
                    }
                }
            }
        }
    }
    shuffle(overTen);
    shuffle(notOverTen);
    list = [];
    list.push(...overTen.slice(0, 5));
    list.push(...notOverTen.slice(0, 5));
    shuffle(list);

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
    document.getElementById("num2").innerHTML = `+${item[1]}`;
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