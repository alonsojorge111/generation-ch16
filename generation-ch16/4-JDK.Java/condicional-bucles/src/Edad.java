import java.util.Scanner;

public class Edad {
    public static void main(String[] args){
        System.out.println("Esta es la clase Edad");
        //DETERMINAR SI UNA ES MAYOR DE EDAD
        //TENER LA EDAD - PEDIR AL USUARIO
        //CONDICIONAL PARA SABER SI ES MENOR DE 18

        Scanner escaner = new Scanner(System.in);
        System.out.println("Escribe tu edad: ");
        int edad = escaner.nextInt();
        escaner.close();

        System.out.println(edad);

        if(edad >= 18){
            System.out.println("Eres mayor de edad");
        }else{
            System.out.println("Eres menor de edad");
        }


    }
}