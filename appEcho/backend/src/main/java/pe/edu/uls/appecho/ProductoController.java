package pe.edu.uls.appecho;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = {"http://localhost:4200", "http://127.0.0.1:4200"})
public class ProductoController {

    private final AtomicInteger siguienteId = new AtomicInteger(13);
    private final List<Producto> productos = new CopyOnWriteArrayList<>(List.of(
            new Producto(1, "Ramo de rosas rojas", "Rosas", 45, 10),
            new Producto(2, "Ramo de girasoles", "Girasoles", 35, 8),
            new Producto(3, "Arreglo de tulipanes", "Tulipanes", 60, 5),
            new Producto(4, "Ramo de margaritas", "Margaritas", 30, 0),
            new Producto(5, "Caja de rosas", "Rosas", 75, 4),
            new Producto(6, "Arreglo de flores mixtas", "Variadas", 55, 0),
            new Producto(7, "Bouquet de lirios", "Lirios", 52, 7),
            new Producto(8, "Arreglo de orquídeas", "Orquídeas", 90, 3),
            new Producto(9, "Ramo de peonías", "Peonías", 68, 0),
            new Producto(10, "Caja de tulipanes", "Tulipanes", 58, 6),
            new Producto(11, "Arreglo premium", "Premium", 120, 2),
            new Producto(12, "Ramo de flores silvestres", "Variadas", 40, 9)
    ));

    @GetMapping
    public List<Producto> listarProductos() {
        return List.copyOf(productos);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Producto registrarProducto(@RequestBody ProductoRequest nuevoProducto) {
        if (nuevoProducto == null
                || nuevoProducto.nombre() == null || nuevoProducto.nombre().isBlank()
                || nuevoProducto.categoria() == null || nuevoProducto.categoria().isBlank()
                || nuevoProducto.precio() < 0
                || nuevoProducto.stock() < 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Datos del producto inválidos");
        }

        Producto producto = new Producto(
                siguienteId.getAndIncrement(),
                nuevoProducto.nombre().trim(),
                nuevoProducto.categoria().trim(),
                nuevoProducto.precio(),
                nuevoProducto.stock()
        );
        productos.add(producto);
        return producto;
    }
}
