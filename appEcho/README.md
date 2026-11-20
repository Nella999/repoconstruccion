# AppEcho

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 22.2.6.

## Descripción general

AppEcho es una pequeña aplicación web desarrollada con Angular para una tienda de flores y arreglos florales. La interfaz permite mostrar una página de inicio, navegar a una sección de productos y presentar una vista de error cuando la ruta no existe.

## Características principales

- Página principal con mensaje promocional de la tienda.
- Navegación entre inicio y productos.
- Catálogo de arreglos consultado desde una API REST Spring Boot.
- Registro de arreglos mediante una solicitud POST desde el formulario Angular.
- Indicadores de disponibilidad y agotado.
- Diseño visual simple y amigable con estilos personalizados.
- Manejo de rutas con Angular Router.

## Levantar la aplicación en el laboratorio

Se necesitan Java 25, Maven y Node.js/npm. Ejecuta cada proceso en una terminal distinta desde la raíz del repositorio.

### 1. Iniciar el backend Spring Boot

```bash
cd appEcho/backend
mvn spring-boot:run
```

La API queda disponible en `http://localhost:8080`:

- `GET http://localhost:8080/api/productos`: lista el catálogo.
- `POST http://localhost:8080/api/productos`: registra un arreglo. Ejemplo del JSON:

```json
{
  "nombre": "Ramo de rosas blancas",
  "categoria": "Rosas",
  "precio": 49.9,
  "stock": 5
}
```

El catálogo se mantiene en memoria y vuelve a los datos iniciales al reiniciar Spring Boot. CORS permite el origen local de Angular (`http://localhost:4200`).

### 2. Iniciar Angular

En otra terminal, desde la raíz del repositorio:

```bash
cd appEcho
npm install
npm start
```

Abre `http://localhost:4200/` y entra en **Nuestros arreglos**. La vista consulta el catálogo al abrirse y también ofrece el botón **Consultar catálogo (GET)**. Completa y envía el formulario para hacer el POST y agregar la respuesta a la tabla. Para la demostración, deja ambas terminales ejecutándose.

### Cómo se integraron

1. `ProductosService` usa `HttpClient` para las operaciones GET/POST contra `/api/productos`.
2. `provideHttpClient()` habilita las solicitudes HTTP de Angular.
3. La vista `productos.component.html` presenta el formulario y el catálogo. Su componente dispara el GET al inicializarse y el POST al enviar el formulario.
4. `ProductoController` expone los endpoints REST, responde JSON y habilita CORS para el servidor local de Angular.
5. El backend asigna un ID a cada producto nuevo y mantiene las altas en memoria mientras el proceso sigue activo.

## Generación de componentes

Angular CLI incluye herramientas para crear componentes rápidamente. Por ejemplo:

```bash
ng generate component nombre-componente
```

Para ver la lista completa de comandos y plantillas disponibles, usa:

```bash
ng generate --help
```

## Compilación

Para compilar la aplicación, ejecuta:

```bash
ng build
```

Esto genera la versión compilada en la carpeta `dist/`. La construcción de producción optimiza el rendimiento y el tamaño de la aplicación.

## Pruebas unitarias

Para ejecutar pruebas unitarias, usa:

```bash
ng test
```

## Pruebas end-to-end

Para pruebas E2E, puedes ejecutar:

```bash
ng e2e
```

Angular CLI no incluye un framework de pruebas end-to-end por defecto, pero puedes agregar uno según las necesidades del proyecto.

## Recursos adicionales

Para más información sobre Angular CLI y sus comandos, consulta la documentación oficial:

[Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)

## Nota final

Este proyecto sirve como ejemplo de una aplicación básica con Angular, enfocada en la estructura de una tienda de flores, el uso de componentes, rutas y estilos personalizados para crear una experiencia visual simple y funcional.
