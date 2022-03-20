function Player(name,teamColor){
    this.state = 'alive'; // 玩家状态
    this.name = name; // 角色名字
    this.teamColor = teamColor; // 队伍颜色
};
Player.prototype.win=function(){
    console.log( this.name + ' won ' );
};
Player.prototype.lose=function(){
    console.log( this.name +' lost' );
};

Player.prototype.die=function(){
    this.state = 'dead';
    playerDirector.reciveMessage('playerDead', this ); // 给中介者发送消息，玩家死亡
};
Player.prototype.remove=function(){
    playerDirector.reciveMessage("removePlayer",this);  // 给中介者发送消息，移除一个玩家
};
Player.prototype.changeTeam=function(color){
    playerDirector.reciveMessage("changeTeam",this,color);  //给中介者发送消息，玩家换队
}

//最后定义一个工厂来创建玩家：
var playerFactory=function(name,teamColor){
    var newPlayer=new Player(name,teamColor);  //创建新玩家
    playerDirector.reciveMessage("addPlayer",newPlayer);  //给中介者发送消息，新增玩家
    return newPlayer;
}

var playerDirector=(function(){
    var players={};  //保存所有玩家
    var operations={};  // 中介者可以执行的操作

    operations.addPlayer=function(player){
        //新增一个玩家
        var teamColor=player.teamColor;  //玩家的队伍颜色
        players[teamColor]=players[teamColor] || [];  // 如果该颜色的玩家还没有成立队伍，则新成立一个队伍
        players[teamColor].push(player);  //添加玩家进队伍
    };

    operations.removePlayer=function(player){
        //移除一个玩家
        var teamColor=player.teamColor;
        var teamPlayers=players[teamColor] || [];  //该队伍所有成员
        for (let i=teamPlayers.length-1;i>=0;i--){
            //遍历删除
            if (teamPlayers[i]===player) {
                teamPlayers.splice(i,1);
            }
        }
    };

    operations.changeTeam=function(player,newTeamColor){
        //玩家换队
        operations.removePlayer(player);  //从原队伍中删除
        player.teamColor=newTeamColor;  //改变队伍颜色
        operations.addPlayer(player);  //增加到新队伍中
    };

    operations.playerDead=function(player){
        //玩家死亡
        var teamColor=player.teamColor;
        teamPlayers=players[teamColor];  //玩家所在队伍

        var all_dead=true;

        for (let i=0;i<teamPlayers.length;i++){
            //遍历队友列表
            if (teamPlayers[i].state!=="dead") {
                //如果还有一个队友没有死亡，则游戏还未失败
                all_dead=false;
                break;
            }
        }
        if (all_dead===true) {  // 如果队友全部死亡
            for (let i=0;i<teamPlayers.length;i++){
                // 通知所有队友玩家游戏失败
                teamPlayers[i].lose();  //本队所有玩家 lose
            }
            for(let color in players){
                if (color!==teamColor) {
                    var teamPlayers = players[ color ];  // 其他队伍的玩家
                    for (let i=0;i<teamPlayers.length;i++){
                        teamPlayers[i].win();  // 其他队伍所有玩家 win
                    }
                }
            }
            
        }
    };

    var reciveMessage=function(){
        var message=Array.prototype.shift.call(arguments);  //arguments 的第一个参数为消息名称
        operations[message].apply(this,arguments);
    };

    return {reciveMessage:reciveMessage}
})();



var player1=playerFactory("Mane","red");
var player2=playerFactory("Alison","red");
var player3=playerFactory("Arnold","red");
var player4=playerFactory("Salah","red");

var player5=playerFactory("mendy","blue");
var player6=playerFactory("kaipa","blue");
var player7=playerFactory("lukaku","blue");
var player8=playerFactory("mount","blue");
/*
player5.die();
player6.die();
player7.die();
player8.die();
*/
/*
player1.remove();
player2.remove();
player3.die();
player4.die()
*/

player1.changeTeam( 'blue' );
player2.die();
player3.die();
player4.die();