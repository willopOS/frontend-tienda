# 🛍️ FakeStore - Tienda Online (Frontend)

Aplicación web interactiva desarrollada con **React** y **Vite**, que consume la **Fake Store API** para gestionar un catálogo de productos, visualización detallada, carrito de compras global y tramitación de pedidos.

---

## 🚀 Funcionalidades Principales

- **Navegación con Enrutador:** Implementación de rutas dinámicas con `react-router-dom` (`Home`, `ProductDetail` y `Checkout`).
- **Consumo de API:** Peticiones asíncronas a Fake Store API mediante un Custom Hook reutilizable (`useFetch`) con soporte para cancelación (`AbortController`).
- **Estado Global de Carrito:** Gestión centralizada de artículos, cantidades y totales mediante `useContext` (`CartContext`).
- **Validación de Formularios:** Captura y validación de datos de envío en tiempo real usando `react-hook-form`.
- **Rendimiento Optimizado:** Uso de `React.memo` en componentes clave (`ProductCard`) para mitigar re-renderizados innecesarios durante las búsquedas.
- **Diseño Full Responsive:** Adaptabilidad completa a dispositivos móviles y escritorio usando CSS Grid y Flexbox.

---

## 🛠️ Tecnologías Utilizadas

- **Entorno & Bundler:** Vite, React 18
- **Enrutamiento & Navegación:** React Router DOM
- **Gestión de Estado:** Context API (`useContext`), React Hooks (`useState`, `useEffect`, `useMemo`)
- **Formularios & Validación:** React Hook Form
- **Consumo de API:** Fetch API con `AbortController` (Fake Store API)
- **Optimización & Rendimiento:** `React.memo`
- **Diseño & Maquetación:** CSS puro con enfoque *Mobile First*, Flexbox y CSS Grid (Full Responsive)

---

## 📂 Estructura del Proyecto

\`\`\`text
src/
├── components/   # Componentes reutilizables (Navbar, ProductCard)
├── context/      # Estado global (CartContext)
├── hooks/        # Custom Hooks (useFetch)
├── pages/        # Vistas de la aplicación (Home, ProductDetail, Checkout)
├── App.jsx       # Enrutamiento principal
├── main.jsx      # Punto de entrada de React
└── index.css     # Estilos globales y reseteo responsive
\`\`\`

---

## 💻 Instalación y Ejecución Local

### Clonar el repositorio
```bash
git clone https://github.com/willopOS/proyecto-backend
```

### Instalar dependencias
```bash
npm install
```

### Iniciar el servidor (Modo desarrollo)
```bash
npm run dev
```
La aplicación correrá localmente en `http://localhost:5173`.

---

## 🧭 Vistas y Rutas Principales

### Catálogo General (`/`)
- Carga asíncrona de productos desde la API externa.
- Búsqueda y filtrado interactivo en tiempo real por título.
- Tarjetas modulares optimizadas para evitar re-renderizados innecesarios.

### Detalle del Producto (`/producto/:id`)
- Ruta dinámica que captura el parámetro `:id` mediante `useParams`.
- Petición específica del producto consultado.
- Botón interactivo para añadir unidades al carrito global.

### Carrito y Checkout (`/checkout`)
- Resumen interactivo con desglose de artículos, precios unitarios, cantidades y total acumulado.
- Opción de eliminar artículos individuales o vaciar el carrito completo.
- Formulario de contacto y envío validado en tiempo real con `react-hook-form`.
- Pantalla de confirmación y agradecimiento tras simular la compra exitosa.

---

## 💡 Aspectos Técnicos Destacados

- **Custom Hook (`useFetch`):** Abstrae la lógica de comunicación HTTP, manejando de forma limpia los estados de datos (`data`), carga (`loading`) y error (`error`), además de cancelar peticiones activas si el componente se desmonta.
- **Estado Global (`CartContext`):** Permite compartir el estado del carrito y la cantidad total de artículos entre componentes sin incurrir en *prop drilling*.
- **Optimización con `React.memo`:** Se implementó memorización en el componente `ProductCard` para evitar renderizados redundantes de la cuadrícula completa al escribir en el buscador.
- **Diseño Full Responsive:** Maquetación elástica sin desbordamiento horizontal (*horizontal overflow*), adaptada tanto para dispositivos móviles como para pantallas de escritorio.

---

## 🧑‍💻 Autor
Alejandra Wilches