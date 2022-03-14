abstract class Beverage{
  final void init(){  //模板方法
    boilWater();
    brew();
    pourInCup();
    addCondiments();
  }
  void boilWater(){// 具体方法 boilWater
    System.out.println("把水煮沸");
  }
  abstract void brew();  // 抽象方法 brew
  abstract void addCondiments(); // 抽象方法 addCondiments
  abstract void pourInCup(); // 抽象方法 pourInCup
}

class Coffee extends Beverage{// Coffee 类
  @Override
  void brew() { // 子类中重写 brew 方法
    System.out.println( "用沸水冲泡咖啡" );
  }
  @Override
  void pourInCup(){ // 子类中重写 pourInCup 方法
    System.out.println( "把咖啡倒进杯子" );
  }
  @Override
  void addCondiments() { // 子类中重写 addCondiments 方法
    System.out.println( "加糖和牛奶" );
  }
}

class Tea extends Beverage{ // Tea 类
  @Override
  void brew() { // 子类中重写 brew 方法
    System.out.println( "用沸水浸泡茶叶" );
  }
  @Override
  void pourInCup(){ // 子类中重写 pourInCup 方法
    System.out.println( "把茶倒进杯子" );
  }
  @Override
  void addCondiments() { // 子类中重写 addCondiments 方法
    System.out.println( "加柠檬" );
  }
}

public class TestJava {
  private static void prepareRecipe(Beverage beverage){
    beverage.init();
  }
  public static void main( String args[] ){
    Beverage coffee = new Coffee(); // 创建 coffee 对象
    prepareRecipe( coffee ); // 开始泡咖啡
    // 把水煮沸
    // 用沸水冲泡咖啡
    // 把咖啡倒进杯子
    // 加糖和牛奶
    Beverage tea = new Tea(); // 创建 tea 对象
    prepareRecipe( tea ); // 开始泡茶
    // 把水煮沸
    // 用沸水浸泡茶叶
    // 把茶倒进杯子
    // 加柠檬
  }
}