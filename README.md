# Poké Retro - Simulador de Batallas (Gen 1)

Este proyecto es un simulador de combates Pokémon por turnos, inspirado fielmente en la estética y mecánicas de la **Primera Generación** (Pokémon Rojo/Azul) de la Game Boy original.

##  Autoría
*   **Nombre:** André Paolo García Valdéz
*   **Carné:** 2022075
*   **Grado:** 5to Informática A
*   **Institución:** Colegio Fundación Kinal

---

##  Tecnologías Utilizadas
*   **HTML5:** Estructura de las 4 vistas principales (Inicio, Selección, Batalla y Resultados).
*   **CSS3:** Diseño responsivo, estética retro de Game Boy y efectos de transparencia.
*   **JavaScript (ES6):** Lógica modular (IA, Motor de Daño, Gestión de Interfaz).

---

##  Instrucciones de Uso
1.  **Inicio:** Presiona el botón "START" para comenzar.
2.  **Selección de Equipo:** Debes elegir exactamente **3 Pokémon** entre las 10 opciones disponibles para formar tu equipo.
3.  **Desafío Rival:** Selecciona uno de los **5 Entrenadores**. Cada uno tiene un equipo de 3 Pokémon con dificultad ascendente.
4.  **Combate:** Gestiona tus ataques y cambios de Pokémon estratégicamente para vencer a los 3 Pokémon del rival.

---

##  Lógica de Combate y Mecánicas
*   **Iniciativa por Velocidad:** El Pokémon con la estadística `spd` más alta ataca primero.
*   **Sistema de Precisión:** Los ataques pueden fallar según su valor de `accuracy`.
*   **IA Enemiga:** El rival prioriza ataques **Súper Efectivos** contra tu tipo actual.
*   **Matriz de Tipos:** Sistema completo de debilidades, resistencias e inmunidades.

---

## 🐾 Pool de Pokémon (Jugador)

| Pokémon | Tipos | SPD | Ataques |
| :--- | :--- | :--- | :--- |
| ![Ivysaur](https://img.pokemondb.net/sprites/red-blue/normal/ivysaur.png) | Planta / Veneno | 60 | Látigo Cepa, Hoja Afilada, Placaje, Crecimiento |
| ![Charmeleon](https://img.pokemondb.net/sprites/red-blue/normal/charmeleon.png) | Fuego | 80 | Ascuas, Lanzallamas, Arañazo, Furia |
| ![Wartortle](https://img.pokemondb.net/sprites/red-blue/normal/wartortle.png) | Agua | 58 | Burbuja, Pistola Agua, Mordisco, Refugio |
| ![Pikachu](https://img.pokemondb.net/sprites/red-blue/normal/pikachu.png) | Eléctrico | 90 | Impactrueno, Rayo, Portazo, Agilidad |
| ![Kadabra](https://img.pokemondb.net/sprites/red-blue/normal/kadabra.png) | Psíquico | 105 | Psicorrayo, Psíquico, Triataque, Meditación |
| ![Haunter](https://img.pokemondb.net/sprites/red-blue/normal/haunter.png) | Fantasma | 95 | Lengüetazo, Puño Sombra, Tinieblas, Rencor |
| ![Graveler](https://img.pokemondb.net/sprites/red-blue/normal/graveler.png) | Roca / Tierra | 35 | Lanzarrocas, Terremoto, Magnitud, Fortaleza |
| ![Machoke](https://img.pokemondb.net/sprites/red-blue/normal/machoke.png) | Lucha | 45 | Golpe Karate, Sumisión, Patada Baja, Corpulencia |
| ![Snorlax](https://img.pokemondb.net/sprites/red-blue/normal/snorlax.png) | Normal | 30 | Golpe Cuerpo, Hiperrayo, Fuerza, Amnesia |
| ![Lapras](https://img.pokemondb.net/sprites/red-blue/normal/lapras.png) | Agua / Hielo | 60 | Rayo Hielo, Ventisca, Surf, Hidropulso |

---

## 🏆 Entrenadores Rivales y sus Equipos

| Entrenador | Dificultad | Equipo Pokémon |
| :--- | :--- | :--- |
| **El Novato** | Fácil | ![Pidgey](https://img.pokemondb.net/sprites/red-blue/normal/pidgey.png) ![Rattata](https://img.pokemondb.net/sprites/red-blue/normal/rattata.png) ![Caterpie](https://img.pokemondb.net/sprites/red-blue/normal/caterpie.png) |
| **El Montañero** | Normal | ![Geodude](https://img.pokemondb.net/sprites/red-blue/normal/geodude.png) ![Sandshrew](https://img.pokemondb.net/sprites/red-blue/normal/sandshrew.png) ![Onix](https://img.pokemondb.net/sprites/red-blue/normal/onix.png) |
| **El Teniente** | Difícil | ![Voltorb](https://img.pokemondb.net/sprites/red-blue/normal/voltorb.png) ![Magnemite](https://img.pokemondb.net/sprites/red-blue/normal/magnemite.png) ![Raichu](https://img.pokemondb.net/sprites/red-blue/normal/raichu.png) |
| **El Ninja** | Experto | ![Weezing](https://img.pokemondb.net/sprites/red-blue/normal/weezing.png) ![Muk](https://img.pokemondb.net/sprites/red-blue/normal/muk.png) ![Golbat](https://img.pokemondb.net/sprites/red-blue/normal/golbat.png) |
| **El Campeón** | Maestro | ![Gyarados](https://img.pokemondb.net/sprites/red-blue/normal/gyarados.png) ![Alakazam](https://img.pokemondb.net/sprites/red-blue/normal/alakazam.png) ![Dragonite](https://img.pokemondb.net/sprites/red-blue/normal/dragonite.png) |
