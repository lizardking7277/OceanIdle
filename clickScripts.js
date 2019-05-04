var document = "index.html";
var placeHolder = document.getElementById("scoreKeeper");
var score = 1000000;
var taps = document.getElementById("tapper");
var cupRun = document.getElementById("addCup");
var bucketRun = document.getElementById("addBucket");
var tubRun = document.getElementById("addTub");
var tankRun = document.getElementById("addTank");
var spoonCounter = document.getElementById("spoonCounter");
var cupCounter = document.getElementById("cupCounter");
var bucketCounter = document.getElementById("bucketCounter");
var tubCounter = document.getElementById("tubCounter");
var tankCounter = document.getElementById("tankCounter");
var spoonValueBonus = document.getElementById("spoonvaluex2");
var cupValueBonus = document.getElementById("cupvaluex2");
var bucketValueBonus = document.getElementById("bucketvaluex2");
var cupSpeedBonus = document.getElementById("cupHalfTime");
var bucketSpeedBonus = document.getElementById("bucketHalfTime");
var tubValueBonus = document.getElementById("tubvaluex2");
var tankValueBonus = document.getElementById("tankvaluex2");
var tubSpeedBonus = document.getElementById("tubHalfTime");
var tankSpeedBonus = document.getElementById("tankHalfTime");


var Spoon = {
        name: "spoon", 
        volume: 1,
        cost: 10,
        run: false
    };

var Cup = {
        name: "cup",
        volume: 10,
        cost: 30,
        intervalSpeed: 4000,
      /*  interval: function () {
            setInterval(runningCup, 4000);
        },*/
        run: false
}

var Bucket = {
        name: "bucket",
        volume: 100,
        cost: 100,
        intervalSpeed: 10000,
        interval: function () {
            setInterval(runningBucket, 10000);
        },
        run: false
}

var Tub = {
        name: "tub",
        volume: 1200,
        cost: 1200,
        intervalSpeed: 15000,
        interval: function () {
            setInterval(runningTub, 15000);
        },
        run: false
}

var Tank = {
        name: "tank",
        volume: 3000,
        cost: 10000,
        intervalSpeed: 30000,
        interval: function () {
            setInterval(runningTank, 30000);
        },
        run: false
}

var Pool = {
        name: "pool",
        volume: 25000,
        cost: 25000,
        interval: function() {
            setInterval(runningPool, 70000);
        },
        run: false
}

var Pump = {
        name: "pump",
        volume: 50000,
        cost: 50000,
        interval: function () {
            setInterval(runningPump, 120000);
        },
        run: false
}


function tapResets() {
    spoonCounter.innerHTML = "";
    cupCounter.innerHTML = "";
    bucketCounter.innerHTML = "";
    tubCounter.innerHTML = "";
    tankCounter.innerHTML = "";
    
}

function spoonValue() {
    if (score >= 15000) {
        Spoon.volume *= 2;
        score = score - 15000;
    }
}
function cupValue() {
    if (score >= 25000) {
        Cup.volume *= 2;
        score = score - 25000;
    }
}
function bucketValue() {
    if (score >= 40000) {
        Bucket.volume *= 2;
        score = score - 40000;
    }
}
function cupSpeed() {
    if (score >= 30000) {
        var cupHalf = Cup.intervalSpeed * .5;
        Cup.interval =  function () {
            setInterval(runningCup, cupHalf);
        }
        score = score - 30000;
    }
}
function bucketSpeed() {
    if (score >= 50000) {
        var bucketHalf = Bucket.intervalSpeed / 2;
        Bucket.interval =  function () {
            setInterval(runningBucket, bucketHalf);
        }
        score = score - 50000;
    }
}
function tubValue() {
    if (score >= 55000) {
        Tub.volume *= 2;
        score = score - 55000;
    }
}
function tankValue() {
    if (score >= 70000) {
        Tank.volume *= 2;
        score = score - 70000;
    }
}
function tubSpeed() {
    if (score >= 70000) {
        var tubHalf = Tub.intervalSpeed / 2;
        Tub.interval =  function () {
            setInterval(runningTub, tubHalf);
        }
        score = score - 70000;
    }
}
function tankSpeed() {
    if (score >= 90000) {
        var tankHalf = Tank.intervalSpeed / 2;
        Tank.interval =  function () {
            setInterval(runningTank, tankHalf);
        }
        score = score - 90000;
    }
}


function tappingScore() {
    spoonCounter.innerHTML = Spoon.volume;
    score = score + Spoon.volume;
    placeHolder.innerHTML = score;
    return score;
}
function startCup() {
    var StartCup = setInterval(runningCup, 4000);
    return StartCup;
}

function runningCup(StartCup) {
    score = score + Cup.volume; 
    cupCounter.innerHTML = Cup.volume;
    placeHolder.innerHTML = score;
    if (Cup.run == false) {
        stopCup(StartCup);
    }
    return score;
}

/*function startCup() {
    Cup.interval(); 
  
}*/

function stopCup(StartCup) {
    clearInterval(StartCup);
    
}

function runningBucket() {
    score = score + Bucket.volume;
    bucketCounter.innerHTML = Bucket.volume;
    placeHolder.innerHTML = score;
    stopBucket();
    return score;
}

function startBucket() {
    Bucket.interval();   
}

function stopBucket() {
    clearInterval(Bucket.interval);
    return true;
}

function runningTub() {
    score = score + Tub.volume; 
    tubCounter.innerHTML = Tub.volume;
    placeHolder.innerHTML = score;
    stopTub();
    return score;
}

function startTub() {
    Tub.interval();   
}

function stopTub() {
    clearInterval(Tub.interval);
    return true;
}

function runningTank() {
    score = score + Tank.volume;
    tankCounter.innerHTML = Tank.volume;
    placeHolder.innerHTML = score;
    stopTank();
    return score;
}

function startTank() {
    Tank.interval();   
}

function stopTank() {
    clearInterval(Tank.interval);
    return true;
}

function runningPool() {
    score = score + Pool.volume;    
    placeHolder.innerHTML = score;
    stopPool();
    return score;
}

function startPool() {
    Pool.interval();   
}
function stopPool() {
    clearInterval(Pool.interval);
    return true;
}

function runningPump() {
    score = score + Pump.volume;    
    placeHolder.innerHTML = score;
    stopPump();
    return score;
}

function startPump() {
    Pump.interval();   
}

function stopPump() {
    clearInterval(Pump.interval);
    return true;
}

setInterval(tapResets, 1000);
taps.addEventListener("click", tappingScore);
cupRun.addEventListener("click", startCup);
bucketRun.addEventListener("click", startBucket);
tubRun.addEventListener("click", startTub);
tankRun.addEventListener("click", startTank);
/*poolRun.addEventListener("click", startPool);
pumpRun.addEventListener("click", startPump);*/
spoonValueBonus.addEventListener("click", spoonValue);
cupValueBonus.addEventListener("click", cupValue);
bucketValueBonus.addEventListener("click", bucketValue);
cupSpeedBonus.addEventListener("click", cupSpeed);
bucketSpeedBonus.addEventListener("click", bucketSpeed);
tubValueBonus.addEventListener("click", tubValue);
tankValueBonus.addEventListener("click", tankValue);
tubSpeedBonus.addEventListener("click", tubSpeed);
tankSpeedBonus.addEventListener("click", tankSpeed);





