package pe.edu.uls.cos.demoexcepciones;

public class ProductoInvalidoException extends RuntimeException{
    ProductoInvalidoException (String msg){
        super(msg);
    }

}
