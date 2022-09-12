public class EjemploString {
    public static void main(String[] args) {
        String curso = "Curso en Java";
        String nombre = "Jorge Alonso";
        String resultado = new String ("Curso en Java");
        System.out.println("resultado = " + resultado );
        boolean esIgual = curso == resultado;
        System.out.println("esigual = " + esIgual);

        esIgual = curso.equals(resultado);
        System.out.println("esigual = " + esIgual);
    }
}
