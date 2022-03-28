class RefreshMenuBarCommand implements Command{
	constructor (){
	}
	execute(){
		console.log( '刷新菜单界面' );
	}
}

class AddSubMenuCommand implements Command{
	constructor (){
	}
	execute(){
		console.log( '增加子菜单' );
	}
}
class DelSubMenuCommand implements Command{
	constructor (){
	}
	// 忘记重写 execute 方法
}

var refreshMenuBarCommand = new RefreshMenuBarCommand(),
addSubMenuCommand = new AddSubMenuCommand(),
delSubMenuCommand = new DelSubMenuCommand();

refreshMenuBarCommand.execute(); // 输出：刷新菜单界面
addSubMenuCommand.execute(); // 输出：增加子菜单
delSubMenuCommand.execute(); // 输出：Uncaught TypeError: undefined is not a function