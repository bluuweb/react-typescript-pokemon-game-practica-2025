# 👾 ¿Quién es ese Pokémon? - Proyecto de React con TypeScript

¡Bienvenido al proyecto "¿Quién es ese Pokémon?"! Este es un emocionante juego interactivo desarrollado con **React** y **TypeScript**, diseñado para ayudarte a consolidar tus conocimientos en el desarrollo frontend moderno.

En este proyecto, el objetivo es adivinar el nombre del Pokémon que aparece en pantalla, ¡al estilo del famoso segmento de la serie animada! Consumirás datos de la **PokeAPI** y aprenderás a manejar el estado de la aplicación de forma eficiente.

## 🚀 Primeros Pasos

Sigue estas instrucciones para tener una copia del proyecto funcionando en tu máquina local para desarrollo y pruebas.

### Prerrequisitos

Asegúrate de tener instalado lo siguiente:

*   **Node.js**: Se recomienda la versión LTS. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
*   **npm** (Node Package Manager) o **Yarn**: Generalmente viene incluido con Node.js.

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/poke-proyecto.git # Reemplaza con la URL real de tu repositorio
    cd poke-proyecto
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    # o si usas yarn
    # yarn install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    # o si usas yarn
    # yarn dev
    ```
    Esto iniciará la aplicación en modo de desarrollo, usualmente en `http://localhost:5173`. Abre esta URL en tu navegador.

### Construcción para Producción

Para construir la aplicación para producción:

```bash
npm run build
# o si usas yarn
# yarn build
```
Esto creará una carpeta `dist` con los archivos optimizados para despliegue.

## 📚 ¿Qué aprenderás en este proyecto?

Este proyecto es una excelente oportunidad para practicar y entender conceptos clave de React y TypeScript:

*   **Configuración de un proyecto moderno:** Aprenderás a configurar un entorno de desarrollo con **Vite**, **React** y **TypeScript**.
*   **Consumo de APIs externas:** Realizarás peticiones HTTP a la **PokeAPI** para obtener datos de Pokémon.
*   **Manejo del estado en React:**
    *   **`useState`**: Hook fundamental para añadir estado a tus componentes funcionales. Verás cómo `useState` se utiliza para manejar el nombre del Pokémon, el estado de carga, errores y el estado del juego (`gameState`).
    *   **`useEffect`**: Hook para manejar efectos secundarios en tus componentes, como la carga de datos después de que el componente se monta o cuando ciertas dependencias cambian. En este proyecto, `useEffect` se usa para cargar un nuevo Pokémon al inicio o cuando se reinicia el juego.
    *   **`useCallback`**: Hook para memorizar funciones, evitando que se creen nuevas instancias en cada renderizado si sus dependencias no han cambiado. Esto es útil para optimizar el rendimiento, especialmente cuando pasas funciones como props a componentes hijos. Aquí se utiliza para `handlePokemonNameSubmit` y `loadNewPokemon`.
*   **Creación de componentes reutilizables:** Estructurarás la aplicación en componentes más pequeños y manejables (`PokemonDisplay`, `PokemonForm`, `PokemonResult`, `Spinner`).
*   **Lógica de juego:** Implementarás la lógica para verificar la respuesta del usuario y gestionar los diferentes estados del juego (jugando, correcto, incorrecto).
*   **TypeScript en React:** Utilizarás TypeScript para definir tipos de datos (como la interfaz `Pokemon`), lo que te ayudará a escribir código más robusto y con menos errores.
*   **Procesamiento de formularios y manejo de eventos de entrada.**
*   **Estilización con Bootstrap:** Integrarás Bootstrap para dar un diseño responsivo y atractivo a la aplicación.

## 🌐 Demo

Puedes ver una demostración en vivo del proyecto aquí: [Demo del Juego "¿Quién es ese Pokémon?"](https://quien-es-ese-pokemon-bluuweb.netlify.app/)

## 🔗 Recursos Adicionales

*   [Canal de YouTube de bluuweb](https://youtube.com/bluuweb)
*   [Artículo del proyecto en bluuweb.dev](https://bluuweb.dev/react-ts/03-practica-pokemon.html)

---
¡Esperamos que disfrutes construyendo y aprendiendo con este proyecto! Si tienes alguna pregunta o encuentras algún problema, no dudes en consultar los recursos o buscar ayuda en la comunidad.