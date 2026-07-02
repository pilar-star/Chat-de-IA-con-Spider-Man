# ComicSansCon 🕸️ - ¡Chatea con Spider-Man!
---
## Vercel
Página: https://chat-ia-spiderman-i8hi643v0-pilarlugones0-8737s-projects.vercel.app/src/index.html

---
Bienvenidos a **ComicSansCon**, una aplicación web interactiva tipo SPA (Single Page Application) diseñada específicamente para comunicarte de forma directa con tu amigable vecino, **Spider-Man**. 
La inteligencia artificial detrás de Spidey está configurada para capturar toda su esencia de los cómics: entusiasmo, chistes ingeniosos, sarcasmo en momentos inoportunos y un gran sentido de la responsabilidad.

---
## 📁 Estructura del Proyecto
* *index.html* - El lienzo único donde se renderizan las vistas de la aplicación.
  
* *styles.css* - Estilos globales, variables de color e interfaz responsive (Mobile, Tablet, Desktop).
  
* *app.js* - El núcleo del Router y ciclo de vida de la SPA.
  
* *chat.js* - Lógica de actualización del DOM, llamadas fetch a la API y persistencia en memoria del historial.
  
* *utils.js* - Funciones auxiliares (como capitalización de texto).
  
* *api/functions.js* - Endpoint de Node.js que procesa el payload y se comunica con Gemini 2.5 Flash.
  
* *package.json* - Definición de dependencias del proyecto.
---
## 🛠️ Tecnología y Herramientas Utilizadas
Este proyecto fue diseñado con un enfoque ágil, priorizando el rendimiento nativo en el frontend y un backend serverless eficiente.
* **Frontend:**
    * *JavaScript:* Manipulación del DOM, manejo del estado del chat en tiempo real y enrutamiento dinámico sin librerías externas.
    * *CSS:* Diseño adaptivo con temática arácnida (rojo/azul), soporte nativo para *Dark Mode* implícito y transiciones fluidas.
    * *HTML5 Semántico:* Estructura limpia y accesible para motores de búsqueda y lectores de pantalla.
      
* **Backend:**
    * *Node.js & Vercel Serverless Functions:* Manejo del endpoint de la API (`/api/functions.js`) de manera aislada y escalable.
    * *Google Gen AI SDK (`@google/generative-ai`):* Integración nativa con el modelo de última generación de Google.
      
* **Modelo de IA:**
    * *Gemini 2.5 Flash:* Elegido por su velocidad de respuesta ultra rápida y bajo costo de latencia, ideal para simular un chat fluido en tiempo real.
      
* **Testing:**
    * **Vitest & JSDOM:* Configuración lista para ejecutar pruebas unitarias del entorno web y funciones utilitarias.
---
## 📐 Decisiones Técnicas y Arquitectura
### 1. Enrutamiento (Vanilla SPA Router)
Para evitar la sobrecarga de un framework como React o Vue, se optó por construir un **enrutador nativo basado en la API de History (`pushState` y el evento `popstate`)**. Esto permite cambiar de sección (`/home`, `/chat`, `/about`) instantáneamente sin recargar la página, mejorando drásticamente la experiencia de usuario.

### 2. Gestión de Contexto e Historial
Para que Spider-Man no sufra de amnesia a mitad de la conversación, la aplicación mantiene un array dinámico `chatHistory` con la estructura de roles requerida por Gemini (`user` / `model`). Este historial se envía completo en cada petición POST para garantizar que la IA recuerde el hilo de la charla.

### 3. System Instruction & Prompt Engineering
La personalidad se inyecta directamente desde el backend mediante `systemInstruction`. Se calibra con una **temperatura de 0.6** para darle el balance justo entre coherencia narrativa y destellos de creatividad/humor arácnido, limitando las respuestas a un `max_tokens: 100` para emular mensajes cortos de chat de texto.

---
## ⚙️ Instalación y Configuración
### Configura tus variables de entorno:
Crea un archivo .env en la raíz del proyecto y añade tu clave de API de Google AI:
GEMINI_API_KEY=tu_api_key_aqui

### Ejecuta el entorno de desarrollo:
Usando Vercel CLI (recomendado para simular las Serverless Functions de /api):
Bash
vercel dev

---
## 🚀 Forma de Uso
Al ingresar, serás recibido en la sección Inicio, donde se te invita formalmente a iniciar la aventura. Haz clic en ¡Chatea con...Spider-Man! o dirígete a la pestaña Chat en el menú de navegación. Escribe tu mensaje en la caja inferior y presiona "Enviar". Verás un indicador de estado ("Spider-Man está escribiendo...") mientras nuestro héroe te responde directamente desde Nueva York.

---
## 🧪 Estrategia de Testing
El proyecto viene preconfigurado con soporte robusto para pruebas utilizando Vitest. La presencia de dependencias como jsdom en el archivo package.json te permite escribir aserciones complejas que verifiquen el comportamiento de los componentes del frontend y de funciones utilitarias. 

---
## 🗺️ Próximas Mejoras
 Persistencia Local (LocalStorage): Guardar el historial de conversaciones del usuario en el navegador para que no se pierdan al recargar accidentalmente la página.
 Manejo de Respuestas Multimedia: Integrar enlaces de imágenes o GIFs cómicos dentro de las respuestas generadas por la IA.
 
---
Creado con ❤️ y entusiasmo arácnido por Pilar Lugones en el año 2026. 🕸️
