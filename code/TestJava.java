

public class TestJava {
  public static void main( String args[] ){
    String s1 = new String("HI There");
    String s2 = new String("HI There");
    String s3 = s1;
    System.out.println(s1 == s2);
    System.out.println(s1.equals(s2));
    System.out.println(s1 == s3);
    System.out.println(s1.equals(s3));
  }
}