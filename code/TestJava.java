abstract class Component{
  //add 方法，参数为 Component 类型
  public void add( Component child ){}
  //remove 方法，参数为 Component 类型
  public void remove( Component child ){}
}

class Composite extends Component{
  //add 方法，参数为 Component 类型
  public void add( Component child ){}
  //remove 方法，参数为 Component 类型
  public void remove( Component child ){}
}

class Leaf extends Component{
  //add 方法，参数为 Component 类型
  public void add( Component child ){
    throw new UnsupportedOperationException() // 叶对象不能再添加子节点
  }
  //remove 方法，参数为 Component 类型
  public void remove( Component child ){
  }
}

public class TestJava {
  public static void main( String args[] ){
    Component root = new Composite();
    Component c1 = new Composite();
    Component c2 = new Composite();

    Component leaf1 = new Leaf();
    Component leaf2 = new Leaf();
    root.add(c1);
    root.add(c2);
    c1.add(leaf1);
    c1.add(leaf2);
    root.remove();
  }
}