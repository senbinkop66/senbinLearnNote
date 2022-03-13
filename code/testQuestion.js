var MacroCommand=function(){
   return {
      commandList:[],
      add:function(command){
         this.commandList.push(command);
      },
      execute:function(){
         for (let i=0;i<this.commandList.length;i++){
            this.commandList[i].execute()
         }
      }
   }
};
var openAcCommand = {
   execute: function(){
      console.log( '打开空调' );
   }
};

//家里的电视和音响是连接在一起的，所以可以用一个宏命令来组合打开电视和打开音响的命令
var openTvCommand = {
   execute: function(){
      console.log( '打开电视' );
   }
};
var openSoundCommand = {
   execute: function(){
      console.log( '打开音响' );
   }
};
var macroCommand1 = MacroCommand();
macroCommand1.add( openTvCommand );
macroCommand1.add( openSoundCommand );


var closeDoorCommand = {
   execute: function(){
      console.log( '关门' );
   }
};
var openPcCommand = {
   execute: function(){
      console.log( '开电脑' );
   }
};
var openQQCommand = {
   execute: function(){
      console.log( '登录 QQ' );
   }
};

var macroCommand2 = MacroCommand();
macroCommand2.add( closeDoorCommand );
macroCommand2.add( openPcCommand );
macroCommand2.add( openQQCommand );

//现在把所有的命令组合成一个“超级命令”

var macroCommand = MacroCommand();
macroCommand.add( openAcCommand );
macroCommand.add( macroCommand1 );
macroCommand.add( macroCommand2 );

(function( command ){
   command.execute();
   }
)( macroCommand );