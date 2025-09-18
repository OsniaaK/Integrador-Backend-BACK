# Proyecto Integrador Backend - BACK (E-commerce)

Este es el Backend para la aplicación LAMM. Desarrollado con Node.js y Express, y su función principal es gestionar los datos de los productos a través de una API REST.

No utiliza una base de datos; los productos se almacenan y se sirven desde un archivo local (`products.js`).

La URL base para todos los endpoints es `http://localhost:3001`.

### Productos

#### 1. Obtener todos los productos

-   **Endpoint**: `GET /api/products`
-   **Descripción**: Devuelve un array con todos los productos disponibles.
-   **Respuesta Exitosa**:
    ```json
    [
      {
        "id": 1,
        "title": "Camisa",
        "price": 20,
        "description": "Camisa de algodón suave y transpirable...",
        "image": "/assets/Products/test.webp",
        "category": "Ropa",
        "discount": 20
      },
      { ... }
    ]
    ```

---

#### 2. Crear un nuevo producto

-   **Endpoint**: `POST /api/products`
-   **Descripción**: Añade un nuevo producto a la lista.
-   **Body (raw/json)**:
    ```json
    {
      "name": "Nuevo Producto",
      "price": 99.99,
      "category": "Categoria",
      "description": "Descripción opcional del nuevo producto.",
      "image": "URL de la imagen o datos en Base64 (opcional)",
      "discount": 15
    }
    ```
-   **Respuesta Exitosa**: Devuelve el objeto del producto recién creado, incluyendo su nuevo `id`.

---

#### 3. Actualizar un producto existente

-   **Endpoint**: `PUT /api/products/:id`
-   **Descripción**: Modifica los datos de un producto existente, identificado por su `id`.
-   **Parámetros de URL**:
    -   `id` (requerido): El ID del producto a actualizar.
-   **Body (raw/json)**: Incluye solo los campos que deseas modificar.
    ```json
    {
      "price": 150,
      "discount": 0
    }
    ```
-   **Respuesta Exitosa**: Devuelve el objeto completo del producto con los datos actualizados.
-   **Respuesta de Error (404 Not Found)**: Si no se encuentra ningún producto con el `id` proporcionado.

---

#### 4. Eliminar un producto

-   **Endpoint**: `DELETE /api/products/:id`
-   **Descripción**: Elimina un producto de la lista, identificado por su `id`.
-   **Parámetros de URL**:
    -   `id` (requerido): El ID del producto a eliminar.
-   **Respuesta Exitosa (204 No Content)**: La operación fue exitosa y no devuelve contenido.
-   **Respuesta de Error (404 Not Found)**: Si no se encuentra ningún producto con el `id` proporcionado.