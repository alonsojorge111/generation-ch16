import java.util.*;  //IMPORTAR TODO DE UNA

public class Colecciones3 {
    public static void main(String[] args) {
        //int -> Integer
        //char -> Character
        //float -> Float
        //double -> Double

        System.out.println("ArrayList");

        //FORMA CONVENCIONAL DE INICIAR UNA LISTA

        List<String> comidas = new ArrayList<>();
        comidas.add("Pozole");
        comidas.add("Tostadas");
        comidas.add("Ceviche");
        comidas.add(2, "Esquite");

        System.out.println(comidas);

        //OTRA FORMA DE INICIALIZAR UNA LISTA

        List<Integer> numeros = new ArrayList<Integer>(Arrays.asList(1, 2, 3));

        System.out.println(numeros);

        //USANDO HASHSET

        Set<String> ciudades = new HashSet<String>();
        ciudades.add("CDMX");
        ciudades.add("GDL");
        ciudades.add("MTY");

        System.out.println(ciudades);

        //OTRA FORMA DE CREAR UN HASHSET: NO ACEPTA VALORES DUPLICADOS

        Set<Boolean> verdad = new HashSet<Boolean>(Arrays.asList(true, false, false, true));
        System.out.println(verdad);


        System.out.println("-------------------");

        //HASHMAP

        System.out.println("HashMap");

        //NOS PERMITEN GUARDAR PARES DE VALORES

        Map<Integer, String> alumnos = new HashMap<Integer, String>();
        alumnos.put(0, "Jorge");
        alumnos.put(1, "Pedro");
        alumnos.put(2, "Sofia");
        alumnos.put(3, "Salma");
        alumnos.put(4, "Miguel");
        alumnos.put(5, "Miguel");

        System.out.println(alumnos);
        System.out.println(alumnos.size());//LISTA DE VALORES
        System.out.println(alumnos.values());//LISTA DE LLAVES
        System.out.println(alumnos.get(2));

        //RECORRER ELEMENTOS CON UN FOR

        for (int i = 0; i < alumnos.size(); i++) {
            Object llaves = alumnos.keySet().toArray()[i];
            System.out.println(alumnos.get(llaves));
        }

        for (Integer llave : alumnos.keySet()){
            System.out.println(llave + " - " + alumnos.get(llave));
        }







    }


}
