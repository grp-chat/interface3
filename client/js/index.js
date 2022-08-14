const sock = io();

//---------------------------------------- USER PIN NUMBER PROMPT -----------------------------------------
const promptMsg = () => {
    var nick = prompt("Please enter your pin number:");
    while (nick.length == 0) {
        alert("Please enter your pin number!");
        nick = prompt("Please enter your pin number:");
    }


    if (nick === '9999') {
        nickname = 'AUM';
        correctPin = true;
    } else if (nick === '1888811') {
        nickname = 'Nina'
        correctPin = true;
    } else if (nick === '9852') {
        nickname = 'LK'
        correctPin = true;
    } else if (nick === '9035') {
        nickname = 'LXR'
        correctPin = true;
    } else if (nick === '6588') {
        nickname = 'TJY'
        correctPin = true;
    } else if (nick === '1072') {
        nickname = 'JL'
        correctPin = true;
    } else if (nick === '3839') {
        nickname = 'SZF'
        correctPin = true;
    } else if (nick === '5691') {
        nickname = 'JV'
    } else if (nick === '88888') {
        nickname = 'TCR'
    } else if (nick === '3583') {
        nickname = 'JHA'
        correctPin = true;
    } else if (nick === '5086') {
        nickname = 'CED'
    } else if (nick === '2105') {
        nickname = 'CJH'
    } else if (nick === '2167') {
        nickname = 'KX'
    } else if (nick === '7051') {
        nickname = 'KN'
    } else if (nick === '1198') {
        nickname = 'LOK'
    } else if (nick === '7089') {
        nickname = 'JW'
    } else if (nick === '3825') {
        nickname = 'JZ'
    } else if (nick === '1289') {
        nickname = 'JX'
    } else if (nick === '1399') {
        nickname = 'JAY'
    } else if (nick === '8579') {
        nickname = 'TWN'
    } else if (nick === '8828') {
        nickname = 'LJY'
    } else if (nick === '3191') {
        nickname = 'ELI'
    } else if (nick === '3307') {
        nickname = 'CUR'
    } else if (nick === '1529') {
        nickname = 'LSH'
    } else if (nick === '7385') {
        nickname = 'RYD'
    } else if (nick === '4162') {
        nickname = 'JT'
    } else if (nick === '2318') {
        nickname = 'CT'
    } else if (nick === '6139') {
        nickname = 'KSY'
    } else {
        alert("Wrong pin number!");
        promptMsg();
    }
};

promptMsg();
sock.emit('newuser', nickname);
//---------------------------------------- USER PIN NUMBER PROMPT -----------------------------------------

var blue = "--clr:#1aa7ec";
var pink = "--clr:#fc5f9b";
var purple = "--clr:#a362ea";
var orange = "--clr:ff6700";
var yellow = "--clr:#fca510";
//var yellow = "--clr:#e1ad01";
var green = "--clr:#0ed095";
var grey = "--clr:#505c62";

function TaskCreate(color, routine, id, text1, text2, rew) {
    this.color = color;
    this.routine = routine;
    this.id = id;
    this.text1 = text1;
    this.text2 = text2;
    this.rew = rew;
}


t1 = new TaskCreate(blue, "333", 1, "1x: 4s", "3 tries", "+ 8pts");
t2 = new TaskCreate(pink, "333", 2, "4x: 18s", "1 try", "+ 13pts");
t3 = new TaskCreate(purple, "333", 3, "4x: 17s", "1 try", "+ 15pts");
t4 = new TaskCreate(yellow, "333", 4, "4x: 14s", "1 try", "+ 20pts");
t5 = new TaskCreate(green, "363", 5, "1x: 5s", "3 tries", "+ 10pts");
t6 = new TaskCreate(grey, "363", 6, "2x: 13s", "1 try", "+ 12pts");
t7 = new TaskCreate(blue, "363", 7, "4x: 22s", "1 try", "+ 15pts");
t8 = new TaskCreate(pink, "363", 8, "1x: 4s", "1 try", "+ 20pts");
t9 = new TaskCreate(purple, "Cycle", 9, "1x: 17s", "1 try", "+ 8pts");
t10 = new TaskCreate(yellow, "Cycle", 10, "1x: 15s", "1 try", "+ 13pts");
t11 = new TaskCreate(green, "Cycle", 11, "1x: 13s", "1 try", "+ 15pts");
t12 = new TaskCreate(grey, "Cycle", 12, "1x: 10s", "1 try", "+ 22pts");
t13 = new TaskCreate(blue, "333", 13, "1x: 4s", "1 try", "+ 8pts");
t14 = new TaskCreate(pink, "333", 14, "1x: 3s", "1 try", "+ 16pts");
t15 = new TaskCreate(purple, "333", 15, "4x: 17s", "1 try", "+ 17pts");
t16 = new TaskCreate(yellow, "333", 16, "1x: 2s", "1 try", "+ 20pts");
t17 = new TaskCreate(green, "363", 17, "1x: 6s", "1 try", "+ 8pts");
t18 = new TaskCreate(grey, "363", 18, "2x: 13s", "1 try", "+ 14pts");
t19 = new TaskCreate(blue, "363", 19, "4x: 22s", "1 try", "+ 19pts");
t20 = new TaskCreate(pink, "363", 20, "1x: 4s", "2 tries", "+ 20pts");
t21 = new TaskCreate(purple, "H-Cyc", 21, "1x: 14s", "1 try", "+ 8pts");
t22 = new TaskCreate(yellow, "H-Cyc", 22, "1x: 12s", "1 try", "+ 13pts");
t23 = new TaskCreate(green, "H-Cyc", 23, "1x: 10s", "1 try", "+ 15pts");
t24 = new TaskCreate(grey, "Cycle", 24, "1x: 9s", "1 try", "+ 30pts");
t25 = new TaskCreate(blue, "R-Fire", 25, "1x: 3s", "3 tries", "+ 8pts");
t26 = new TaskCreate(pink, "R-Fire", 26, "1x: 2s", "3 tries", "+ 14pts");
t27 = new TaskCreate(purple, "333", 27, "vs Plyr(+5Pts)", "Best of 1", "+ 17pts");
t28 = new TaskCreate(yellow, "333", 28, "vs Plyr(+5Pts)", "Best of 1", "+ 20pts");
t29 = new TaskCreate(green, "R-Fire", 29, "1x: 2s", "3 tries", "+ 13pts");
t30 = new TaskCreate(grey, "363", 30, "4x: 27s", "1 try", "+ 10pts");
t31 = new TaskCreate(blue, "363", 31, "4x: 21s", "1 try", "+ 19pts");
t32 = new TaskCreate(pink, "363", 32, "4x: 17", "1 try", "+ 23pts");
t33 = new TaskCreate(purple, "9-Cyc", 33, "1x: 16s", "1 try", "+ 8pts");
t34 = new TaskCreate(yellow, "9-Cyc", 34, "1x: 10s", "1 try", "+ 15pts");
t35 = new TaskCreate(green, "Cycle", 35, "vs Plyr(+5Pts)", "Best of 1", "+ 20pts");
t36 = new TaskCreate(grey, "Cycle", 36, "vs Plyr(+5Pts)", "Best of 1", "+ 23pts");


var playerSlots = ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9"];
const Players = {
    //P1: "CUR", P2: "CT", P3: "JZ", P4: "LJY", P5: "ELI", P6: "RYD", P7: "TWN", P8: "JX", P9: "LSH"
    P1: "LOK", P2: "TJY", P3: "CJH", P4: "CED", P5: "KX", P6: "KN", P7: "JT", P8: "KSY", P9: "LSH"
};

var tagsArr = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, 
    t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36];

var teamA = 0, teamB = 0;
var currSlot = "";
var currTask = "";

var currTurn = "";
var currSelTask = "";
var teamAScore = 0;
var teamBScore = 0;
var clickChances = 3;

const TeamA = document.getElementById("teamA");
const TeamB = document.getElementById("teamB");



function appendMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.innerText = message;
    var div3 = document.getElementById("div3");
    div3.append(messageDiv);
    div3.scrollTop = div3.scrollHeight;
    if (message === "TCR: RESET SERVER") {
        if (nickname != "TCR") {
            window.location.reload();
        } else {
            sock.emit('resetserverval');
        }
    }


    if (message === "TCR: GAME START" && nickname === "TCR") {
        sock.emit('gameStart');
    }

    var slicedMessage = message.slice(0, 13);
    var watTeam = slicedMessage.slice(7);
    var slicedMessage2 = message.slice(13);
    if (slicedMessage === "TCR: + teamA " && nickname === "TCR") {
        var oper = "add";
        sock.emit('updScores', { watTeam, slicedMessage2, oper });
        sock.emit('chat-to-server', "Team A score added +" + slicedMessage2 + "Points");
    } else if (slicedMessage === "TCR: + teamB " && nickname === "TCR") {
        var oper = "add";
        sock.emit('updScores', { watTeam, slicedMessage2, oper } );
        sock.emit('chat-to-server', "Team B score added +" + slicedMessage2 + "Points");
    } else if (slicedMessage === "TCR: - teamA " && nickname === "TCR") {
        var oper = "minus";
        sock.emit('updScores', { watTeam, slicedMessage2, oper } );
        sock.emit('chat-to-server', "Team A score deducted -" + slicedMessage2 + "Points");
    } else if (slicedMessage === "TCR: - teamB " && nickname === "TCR") {
        var oper = "minus";
        sock.emit('updScores', { watTeam, slicedMessage2, oper } );
        sock.emit('chat-to-server', "Team B score deducted -" + slicedMessage2 + "Points");
    }

    var slicedMessage3 = message.slice(0, 14);
    var slicedMessage5 = message.slice(14);
    if (slicedMessage3 === "TCR: Rem task " && nickname === "TCR") {
        //document.getElementById(slicedMessage5).remove();
        sock.emit('spliceIdx', slicedMessage5);
        sock.emit('chat-to-server', "Task Id: " + slicedMessage5 + " completed and removed");
    } else if (slicedMessage3 === "TCR: Sel task " && nickname === "TCR") {
        sock.emit('selTask', slicedMessage5);
        sock.emit('chat-to-server', "Task Id: " + slicedMessage5 + " selected");

    }


    if (message === "TCR: NUMBER OF PLAYERS" && nickname === "TCR") {
        //let text = "[" + connectedArr.toString() + "]";
        sock.emit('chat-to-server', numberOfPlayers);
    }


    playerSlots.forEach((slot) => {
        if (message === "TCR: Go " + slot && nickname === "TCR") {

            //let text = "[" + connectedArr.toString() + "]";

            sock.emit('activate', slot);
            if (currSlot === "") { } else {
                sock.emit('deActivate', currSlot);
            }
            currSlot = slot;
            //let text = "Current Slot = " + currSlot;
            let text = Players[currSlot] + " - It's your turn!"
            sock.emit('chat-to-server', text);
        }
    });


}

function createTasks(color, routine, idNum, descr1, descr2, rew) {
    const taskSec = document.getElementById("tasks");
    const tagDiv = document.createElement("div");
    tagDiv.className = "tag";
    tagDiv.setAttribute("id", idNum);
    tagDiv.style = color;
    taskSec.appendChild(tagDiv);

    tagDiv.addEventListener("click", () => {

        if (Players[currTurn] === nickname && clickChances > 0) {
            sock.emit('userClicked', tagDiv.id);
            clickChances--;
        }
    });

    const iconDiv = document.createElement("div");
    iconDiv.className = "icon";
    iconDiv.innerHTML = routine;
    tagDiv.appendChild(iconDiv);

    const tagIdDiv = document.createElement("div");
    tagIdDiv.className = "tagid";
    tagIdDiv.innerHTML = "Id: " + idNum;
    tagDiv.appendChild(tagIdDiv);

    const textDiv = document.createElement("div");
    textDiv.className = "text";
    tagDiv.appendChild(textDiv);

    const desc1Div = document.createElement("div");
    desc1Div.className = "desc1";
    desc1Div.innerHTML = descr1;
    textDiv.appendChild(desc1Div);

    const desc2 = document.createElement("p");
    desc2.innerHTML = descr2;
    textDiv.appendChild(desc2);

    const rewardDiv = document.createElement("div");
    rewardDiv.className = "reward";
    rewardDiv.innerHTML = rew;
    tagDiv.appendChild(rewardDiv);

}

function createTasks2(obj) {
    const taskSec = document.getElementById("tasks");
    const tagDiv = document.createElement("div");
    tagDiv.className = "tag";
    tagDiv.setAttribute("id", obj.id);
    tagDiv.style = obj.color;
    taskSec.appendChild(tagDiv);

    tagDiv.addEventListener("click", () => {

        if (Players[currTurn] === nickname && clickChances > 0) {
            sock.emit('userClicked', tagDiv.id);
            sock.emit('chat-to-server', Players[currTurn] + " clicked Task Id:" + tagDiv.id);
            clickChances--;
        }
    });

    const iconDiv = document.createElement("div");
    iconDiv.className = "icon";
    iconDiv.innerHTML = obj.routine;
    tagDiv.appendChild(iconDiv);

    const tagIdDiv = document.createElement("div");
    tagIdDiv.className = "tagid";
    tagIdDiv.innerHTML = "Id: " + obj.id;
    tagDiv.appendChild(tagIdDiv);

    const textDiv = document.createElement("div");
    textDiv.className = "text";
    tagDiv.appendChild(textDiv);

    const desc1Div = document.createElement("div");
    desc1Div.className = "desc1";
    desc1Div.innerHTML = obj.text1;
    textDiv.appendChild(desc1Div);

    const desc2 = document.createElement("p");
    desc2.innerHTML = obj.text2;
    textDiv.appendChild(desc2);

    const rewardDiv = document.createElement("div");
    rewardDiv.className = "reward";
    rewardDiv.innerHTML = obj.rew;
    tagDiv.appendChild(rewardDiv);

}

function createChatDivs() {
    const chatSec = document.getElementById("chat");
    var chatDiv = document.createElement("div");
    //var chatDiv = document.getElementById("chatdiv");
    //chatDiv.setAttribute("id", "chatdiv");
    chatDiv.style.width = "370px";
    chatDiv.style.height = "320px";
    //chatDiv.style = "background:rgba(255, 255, 255, 0.5); color:black; overflow: auto;"
    chatDiv.style.background = "rgba(255, 255, 255, 0.5)";
    chatDiv.style.color = "black";
    chatDiv.style.overflow = "auto";
    chatDiv.style.overflowX = "hidden";
    //chatDiv.style.float = "right";
    //chatDiv.style.marginLeft = "2%";
    //chatDiv.style.position = "fixed";
    chatDiv.style.top = "30px";
    //chatDiv.style.right = "30px";


    chatSec.appendChild(chatDiv);

    var chatInput = document.createElement('input');
    //chatInput.className = "form-control";
    chatInput.style.width = "290px";
    chatInput.style.height = "45px";
    chatInput.setAttribute("id", "chatinput");
    chatInput.setAttribute("type", "text");
    chatInput.style.display = "inline";
    chatInput.style.fontSize = "1.2em";
    chatDiv.appendChild(chatInput);

    var chatBtn = document.createElement('button');

    chatBtn.className = "btn";
    chatBtn.setAttribute("id", "chatBtn");
    chatBtn.innerHTML = "Send";
    chatBtn.style.height = "50px";
    chatBtn.style.width = "55px";


    chatDiv.appendChild(chatBtn);

    var div3 = document.createElement('div');
    div3.setAttribute("id", "div3");
    div3.style.width = '350px';
    div3.style.height = '260px'
    div3.style.color = 'black';
    div3.style.background = 'rgba(236, 236, 236, 0.5)';
    div3.style.overflowY = "auto";
    chatDiv.appendChild(div3);

    chatBtn.addEventListener('click', function () {
        var message = nickname + ': ';
        message += chatInput.value;
        sock.emit('chat-to-server', message);
        chatInput.value = '';
    });

    chatInput.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("chatBtn").click();
        }

    });

    return chatSec;
}

function loadTasks() {

    for (var i = 0; i < 12; i ++) {
        createTasks2(tagsArr[i]);
    }
}

function loadTasks2(i) {
    createTasks2(tagsArr[i]);
    //tagsArr[i].id = i;
}

createChatDivs();
loadTasks();
/* createTasks(pink, "Cycle", 2, "1X: 30s", "1 try", "+ 20Pts");
createTasks(blue, "333", 3, "3X: 12s", "1 try", "+ 30Pts");
createTasks2(t4);
createTasks2(t5);
createTasks(blue, "333", 4, "3X: 12s", "1 try", "+ 30Pts"); */

//LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL


//LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL



sock.on('chat-to-clients', data => {
    appendMessage(data);
});

sock.on('glow', data => {

    if (data != "") {
        const player = document.getElementById(data);
        player.classList.add('active');
        clickChances = 3;
    }

});

sock.on('unGlow', data => {
    const player = document.getElementById(data);
    player.classList.remove('active');
});

sock.on('clrFill', data => {

    if (data.taskId != "") {
        const selTask = document.getElementById(data.taskId);
        
        selTask.classList.add('active');
        

        if (data.unFill != "") {
            const unSelTask = document.getElementById(data.unFill);
            unSelTask.classList.remove('active');
        }
    }

});

sock.on('spliceArr', data => {
    document.querySelectorAll('.tag').forEach(e => e.remove());
    for (var i = 0; i < data.length; i++) {
        //alert(data[i]);
        loadTasks2(data[i]);

    }
    
});

sock.on('pushServerVals', data => {
    currTurn = data.currTurn;
    currSelTask = data.currSelTask;
    teamAScore = data.teamAScore;
    teamBScore = data.teamBScore;
    TeamA.innerHTML = "Team A: " + teamAScore;
    TeamB.innerHTML = "Team B: " + teamBScore;
});