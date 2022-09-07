public class EjemploVariables {
    public static void main(String[] args) {
        String nombre = "Jorge";
        String saludo = "Hola esto es un ejemplo de variables";
        char espacio = '\u0020';
        char caracter = 'a';
        System.out.println(saludo + espacio + nombre);
        System.out.println("char corresponde en bytes: " + Character.BYTES );
        System.out.println("char corresponde en bits: " + Character.SIZE);
        System.out.println("Valor máximo del char es : " + Character.MAX_VALUE);
        System.out.println("Valor mínimo del char es : " + Character.MIN_VALUE);

        int numeroEntero = 2;
        System.out.println("El número entero es: " + numeroEntero);
        System.out.println("int corresponde en bytes : " + Integer.BYTES);
        System.out.println("int corresponde en bits  : " + Integer.SIZE);
        System.out.println("Valor máximo de un entero es : " + Integer.MAX_VALUE);
        System.out.println("Valor mínimo de un entero es : " + Integer.MIN_VALUE);

        float numeroFlotante = 0.000000000015f;
        System.out.println("Número float : " + numeroFlotante);
        System.out.println("float corresponde en bytes: " + Float.BYTES);
        System.out.println("float corresponde en bits : " + Float.SIZE);
        System.out.println("Valor máximo de un float es : " + Float.MAX_VALUE);
        System.out.println("Valor mínimo de un float es : " + Float.MIN_VALUE);

        double numeroDouble = 3.444545E39;
        System.out.println("Número double : " + numeroDouble);
        System.out.println("double corresponde en bytes: " + Double.BYTES);
        System.out.println("double corresponde en bits : " + Double.SIZE);
        System.out.println("Valor máximo de un double es : " + Double.MAX_VALUE);
        System.out.println("Valor mínimo de un double es : " + Double.MIN_VALUE);

        boolean valorBoolean = (3-2 == 1);
        System.out.println("valorBoolean = " + valorBoolean );

        long valorLong = 36456464665l;
        System.out.println("Valor Long : " + valorLong);
        System.out.println("long corresponde en bytes: " + Long.BYTES);
        System.out.println("long corresponde en bits : " + Long.SIZE);
        System.out.println("Valor máximo de un long es : " + Long.MAX_VALUE);
        System.out.println("Valor mínimo de un long es : " + Long.MIN_VALUE);

        byte valorByte = 5;
        System.out.println("Valor byte : " + valorByte);
        System.out.println("byte corresponde en bytes: " + Byte.BYTES);
        System.out.println("byte corresponde en bits : " + Byte.SIZE);
        System.out.println("Valor máximo de un byte es : " + Byte.MAX_VALUE);
        System.out.println("Valor mínimo de un byte es : " + Byte.MIN_VALUE);

        short valorShort = 5;
        System.out.println("Valor short : " + valorShort);
        System.out.println("short corresponde en bytes: " + Short.BYTES);
        System.out.println("short corresponde en bits : " + Short.SIZE);
        System.out.println("Valor máximo de un short es : " + Short.MAX_VALUE);
        System.out.println("Valor mínimo de un short es : " + Short.MIN_VALUE);

        var miVar = '2';
        System.out.println("miVar" + miVar);






    }
}



