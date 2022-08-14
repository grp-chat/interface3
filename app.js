const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const PORT = process.env.PORT || 3000;

const app = express();

const clientPath = `${__dirname}/client`;
console.log(`Serving static files from path ${clientPath}`);

app.use(express.static(clientPath));
const server = http.createServer(app);
const io = socketio(server);

server.listen(PORT);
console.log("Server listening at " + PORT);

//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

var ServerVals = {
    currTurn: "",
    currSelTask: "",
    teamAScore: 0,
    teamBScore: 0,
    activeInd: [0,1,2,3,4,5,6,7,8,9,10,11]
}
var startFrom = 12;
var incr = 1;



io.sockets.on('connection', function (sock) {

    sock.on('newuser', (data) => {

        sock.id = data;

        io.emit('spliceArr', ServerVals.activeInd);

        var player = ServerVals.currTurn;
        io.emit('glow', player);

        var unFill = "";
        var taskId = ServerVals.currSelTask;
        io.emit('clrFill', { taskId, unFill });

        var text = data + " connected"
        io.emit('chat-to-clients', text);


    });

    /* sock.id = Math.random();
    SOCKET_LIST[sock.id] = sock;
    Player.onConnect(sock); */
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - CONNECTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    /* sock.on('disconnect', function() {
        delete SOCKET_LIST[sock.id];
        Player.onDisconnect(sock);
    }); */
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - CONNECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    sock.on('setScore', function (data) {
        slots.forEach((slot) => {
            if (slot.stu === data) {
                slot.score++;
                var stu = slot.stu;
                var score = slot.score;
                //sock.emit('updateScore', {stu, score});
            }

        });

    });

    sock.on('chat-to-server', (data) => {
        io.emit('chat-to-clients', data);
    });

    sock.on('gameStart', () => {
        io.emit('startGame');
        standbyMode = false;
    });

    sock.on('activate', (data) => {
        var player = data;
        ServerVals.currTurn = data;
        io.emit('glow', player);
    });

    sock.on('deActivate', (data) => {
        var player = data;
        io.emit('unGlow', player);
    });

    sock.on('selTask', (data) => {
        var unFill = ServerVals.currSelTask
        ServerVals.currSelTask = data;
        var taskId = data;
        io.emit('clrFill', { taskId, unFill });
    });

    sock.on('userClicked', (data) => {
        var unFill = ServerVals.currSelTask
        ServerVals.currSelTask = data;
        var taskId = data;
        io.emit('clrFill', { taskId, unFill });
    });

    sock.on('spliceIdx', (data) => {
        var index = ServerVals.activeInd.indexOf(parseInt(data) -1);
        ServerVals.activeInd.splice(index, 1);
        ServerVals.activeInd.push(startFrom);
        startFrom++;
        incr++;
        io.emit('spliceArr', ServerVals.activeInd);
    });

    sock.on('updScores', (data) => {
        
        if (data.watTeam === "teamA " && data.oper === "add") {
            ServerVals.teamAScore += parseInt(data.slicedMessage2);
        } else if (data.watTeam === "teamB " && data.oper === "add") {
            ServerVals.teamBScore += parseInt(data.slicedMessage2);
        } else if (data.watTeam === "teamA " && data.oper === "minus") {
            ServerVals.teamAScore -= parseInt(data.slicedMessage2);
        } else if (data.watTeam === "teamB " && data.oper === "minus") {
            ServerVals.teamBScore -= parseInt(data.slicedMessage2);
        }
    });

    sock.on('resetserverval', () => {
        //io.emit('startGame');
        standbyMode = true;
        slots.forEach((slot) => {
            slot.stu = "";
            slot.score = 0;
            slot.life = 3;
        });

    });
});

setInterval(function () {
    io.emit('pushServerVals', ServerVals);

}, 1000);