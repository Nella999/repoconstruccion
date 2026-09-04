package pe.edu.uls.cos.demoexcepciones;
import java.util.Date;
import org.springframework.stereotype.Service;

@Service 
public class ServiceProductos {

    public Producto registrarProducto(Producto nuevo) throws ProductoInvalidoException {
        if (nuevo.getNombre().length()<2) {
            throw new ProductoInvalidoException(msg: "El producto debe tener almenos más de 2 caracteres")
        }
        Date ahora = new Date();
        nuevo.setId((int) ahora.getTime());
        return nuevo;
    }

}
