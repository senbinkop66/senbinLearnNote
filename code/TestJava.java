interface Animal {
  abstract void makeSound(); // 抽象方法
}

class Duck implements Animal{ // 鸭子类
  public void makeSound(){  // 重写 Animal 接口的 makeSound 抽象方法
    System.out.println( "嘎嘎嘎" );
  }
}
class Chicken implements Animal{
  public void makeSound(){
    System.out.println( "咯咯咯" );
  }
}
class AnimalSound {
  public void makeSound( Animal animal ){ // (1) 只接受 Duck 类型的参数
    animal.makeSound();
  }
}

public class TestJava {
  public static void main( String args[] ){
    AnimalSound animalSound = new AnimalSound ();
    Animal duck = new Duck();
    Animal chicken = new Chicken();
    animalSound.makeSound( duck ); // 输出：嘎嘎嘎
    animalSound.makeSound( chicken ); // 输出：咯咯咯
  }
}