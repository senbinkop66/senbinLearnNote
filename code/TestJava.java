abstract class Animal{
  abstract void makeSound();  //抽象方法
}

class Duck extends Animal{ // 鸭子类
  public void makeSound(){
    System.out.println("嘎嘎嘎");
  }
}
class Chicken extends Animal{ // 鸡类
  public void makeSound(){
    System.out.println("咯咯咯");
  }
}

//现在剩下的就是让 AnimalSound 类的 makeSound 方法接受 Animal 类型的参数，而不是具体的Duck 类型或者 Chicken 类型：

class AnimalSound {
  public void makeSound(Animal animal){
    animal.makeSound();
  }
}

public class TestJava {
  public static void main( String args[] ){
    AnimalSound animalSound = new AnimalSound();
    Animal duck=new Duck();
    Animal chicken=new Chicken();

    animalSound.makeSound(chicken);
    animalSound.makeSound(duck);
  }
}