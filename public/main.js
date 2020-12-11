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

    list = [];
    for (let j = 0; j < 10; ++j) {
        let list2 = [];
        for (let i = 1; i < 10; ++i) {
            list2.push([5, i]);
            list2.push([4, i]);
            list2.push([3, i]);
        }
        shuffle(list2);
        list.push(...list2);
    }

    index = 0;
}

makeList();

function nextQuestion() {
    var item = list[index];
    document.getElementById("num1").innerHTML = `${item[0]}`;
    document.getElementById("num2").innerHTML = `x${item[1]}`;
    document.getElementById("answer").innerHTML = `?`;
    index++;
}

function start() {
    startTime = Date.now();
    document.getElementById("start").style.display = "none";
    document.getElementById("next").style.display = "inline";
    nextQuestion();
    setTimeout(finish, 60 * 1000)
}

function finish() {
    document.getElementById("num1").innerHTML = `You finished`;
    document.getElementById("num2").innerHTML = `${index} items`;
    document.getElementById("next").style.display = "none";
    document.getElementById("start").style.display = "start";
}

function next() {
    if (index < list.length) {
        nextQuestion();
    }
}