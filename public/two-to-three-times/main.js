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
    let list2 = [];
    for (let i = 2; i < 10; ++i) {
        list2.push([2, i]);
    }
    shuffle(list2);
    let list3 = [];
    for (let i = 2; i < 10; ++i) {
        list3.push([3, i]);
    }
    shuffle(list3);
    list = [];
    list.push(...list2.slice(0, 5));
    list.push(...list3.slice(0, 5));
    shuffle(list);

    for (let i = 0; i < list.length; ++i) {
        const item = list[i];
        console.log(`[${i + 1}] ${item[0]} x ${item[1]}`);
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