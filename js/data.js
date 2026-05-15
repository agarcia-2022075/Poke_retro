const playerPokemon = [
    {
        id: 'ivysaur', name: 'Ivysaur', types: ['Planta', 'Veneno'],
        hp: 60, maxHp: 60, atk: 62, def: 63, spd: 60,
        spriteFront: 'assets/img/ivysaur-front.png', spriteBack: 'assets/img/ivysaur-back.png',
        attacks: [
            { name: 'Látigo Cepa', type: 'Planta', category: 'Ataque', power: 60, accuracy: 100 },
            { name: 'Hoja Afilada', type: 'Planta', category: 'Ataque', power: 90, accuracy: 95 },
            { name: 'Placaje', type: 'Normal', category: 'Ataque', power: 40, accuracy: 100 },
            { name: 'Crecimiento', type: 'Normal', category: 'Defensa', power: 0, accuracy: 100 }
        ]
    },
    {
        id: 'charmeleon', name: 'Charmeleon', types: ['Fuego'],
        hp: 58, maxHp: 58, atk: 64, def: 58, spd: 80,
        spriteFront: 'assets/img/charmeleon-front.png', spriteBack: 'assets/img/charmeleon-back.png',
        attacks: [
            { name: 'Ascuas', type: 'Fuego', category: 'Ataque', power: 60, accuracy: 100 },
            { name: 'Lanzallamas', type: 'Fuego', category: 'Ataque', power: 90, accuracy: 100 },
            { name: 'Arañazo', type: 'Normal', category: 'Ataque', power: 40, accuracy: 100 },
            { name: 'Furia', type: 'Fuego', category: 'Defensa', power: 0, accuracy: 100 }
        ]
    },
    {
        id: 'wartortle', name: 'Wartortle', types: ['Agua'],
        hp: 59, maxHp: 59, atk: 63, def: 80, spd: 58,
        spriteFront: 'assets/img/wartortle-front.png', spriteBack: 'assets/img/wartortle-back.png',
        attacks: [
            { name: 'Burbuja', type: 'Agua', category: 'Ataque', power: 60, accuracy: 100 },
            { name: 'Pistola Agua', type: 'Agua', category: 'Ataque', power: 60, accuracy: 100 },
            { name: 'Mordisco', type: 'Normal', category: 'Ataque', power: 40, accuracy: 100 },
            { name: 'Refugio', type: 'Agua', category: 'Defensa', power: 0, accuracy: 100 }
        ]
    },
    {
        id: 'pikachu', name: 'Pikachu', types: ['Eléctrico'],
        hp: 45, maxHp: 45, atk: 55, def: 40, spd: 90,
        spriteFront: 'assets/img/pikachu-front.png', spriteBack: 'assets/img/pikachu-back.png',
        attacks: [
            { name: 'Impactrueno', type: 'Eléctrico', category: 'Ataque', power: 60, accuracy: 100 },
            { name: 'Rayo', type: 'Eléctrico', category: 'Ataque', power: 90, accuracy: 100 },
            { name: 'Portazo', type: 'Normal', category: 'Ataque', power: 40, accuracy: 75 },
            { name: 'Agilidad', type: 'Eléctrico', category: 'Defensa', power: 0, accuracy: 100 }
        ]
    },
    {
        id: 'kadabra', name: 'Kadabra', types: ['Psíquico'],
        hp: 40, maxHp: 40, atk: 105, def: 30, spd: 105,
        spriteFront: 'assets/img/kadabra-front.png', spriteBack: 'assets/img/kadabra-back.png',
        attacks: [
            { name: 'Psicorrayo', type: 'Psíquico', category: 'Ataque', power: 60, accuracy: 100 },
            { name: 'Psíquico', type: 'Psíquico', category: 'Ataque', power: 90, accuracy: 100 },
            { name: 'Triataque', type: 'Normal', category: 'Ataque', power: 80, accuracy: 100 },
            { name: 'Meditación', type: 'Psíquico', category: 'Defensa', power: 0, accuracy: 100 }
        ]
    },
    {
        id: 'haunter', name: 'Haunter', types: ['Fantasma'],
        hp: 45, maxHp: 45, atk: 95, def: 45, spd: 95,
        spriteFront: 'assets/img/haunter-front.png', spriteBack: 'assets/img/haunter-back.png',
        attacks: [
            { name: 'Lengüetazo', type: 'Fantasma', category: 'Ataque', power: 60, accuracy: 100 },
            { name: 'Puño Sombra', type: 'Fantasma', category: 'Ataque', power: 60, accuracy: 100 },
            { name: 'Tinieblas', type: 'Fantasma', category: 'Ataque', power: 90, accuracy: 100 },
            { name: 'Rencor', type: 'Fantasma', category: 'Defensa', power: 0, accuracy: 100 }
        ]
    },
    {
        id: 'graveler', name: 'Graveler', types: ['Roca', 'Tierra'],
        hp: 55, maxHp: 55, atk: 95, def: 115, spd: 35,
        spriteFront: 'assets/img/graveler-front.png', spriteBack: 'assets/img/graveler-back.png',
        attacks: [
            { name: 'Lanzarrocas', type: 'Roca', category: 'Ataque', power: 60, accuracy: 90 },
            { name: 'Terremoto', type: 'Tierra', category: 'Ataque', power: 90, accuracy: 100 },
            { name: 'Magnitud', type: 'Tierra', category: 'Ataque', power: 60, accuracy: 100 },
            { name: 'Fortaleza', type: 'Normal', category: 'Defensa', power: 0, accuracy: 100 }
        ]
    },
    {
        id: 'machoke', name: 'Machoke', types: ['Lucha'],
        hp: 80, maxHp: 80, atk: 100, def: 70, spd: 45,
        spriteFront: 'assets/img/machoke-front.png', spriteBack: 'assets/img/machoke-back.png',
        attacks: [
            { name: 'Golpe Karate', type: 'Lucha', category: 'Ataque', power: 60, accuracy: 100 },
            { name: 'Sumisión', type: 'Lucha', category: 'Ataque', power: 90, accuracy: 80 },
            { name: 'Patada Baja', type: 'Lucha', category: 'Ataque', power: 40, accuracy: 100 },
            { name: 'Corpulencia', type: 'Lucha', category: 'Defensa', power: 0, accuracy: 100 }
        ]
    },
    {
        id: 'snorlax', name: 'Snorlax', types: ['Normal'],
        hp: 160, maxHp: 160, atk: 110, def: 65, spd: 30,
        spriteFront: 'assets/img/snorlax-front.png', spriteBack: 'assets/img/snorlax-back.png',
        attacks: [
            { name: 'Golpe Cuerpo', type: 'Normal', category: 'Ataque', power: 90, accuracy: 100 },
            { name: 'Hiperrayo', type: 'Normal', category: 'Ataque', power: 120, accuracy: 90 },
            { name: 'Fuerza', type: 'Normal', category: 'Ataque', power: 90, accuracy: 100 },
            { name: 'Amnesia', type: 'Normal', category: 'Defensa', power: 0, accuracy: 100 }
        ]
    },
    {
        id: 'lapras', name: 'Lapras', types: ['Agua', 'Hielo'],
        hp: 130, maxHp: 130, atk: 85, def: 80, spd: 60,
        spriteFront: 'assets/img/lapras-front.png', spriteBack: 'assets/img/lapras-back.png',
        attacks: [
            { name: 'Rayo Hielo', type: 'Hielo', category: 'Ataque', power: 90, accuracy: 100 },
            { name: 'Ventisca', type: 'Hielo', category: 'Ataque', power: 120, accuracy: 70 },
            { name: 'Surf', type: 'Agua', category: 'Ataque', power: 90, accuracy: 100 },
            { name: 'Hidropulso', type: 'Agua', category: 'Ataque', power: 60, accuracy: 100 }
        ]
    },
    {
        id: 'solgaleo', name: 'Solgaleo', types: ['Psíquico', 'Acero'],
        hp: 137, maxHp: 137, atk: 137, def: 107, spd: 97,
        spriteFront: 'assets/img/solgaleo-front.png', spriteBack: 'assets/img/solgaleo-back.png',
        attacks: [
            { name: 'Meteoimpacto', type: 'Acero', category: 'Ataque', power: 100, accuracy: 100 },
            { name: 'Psíquico', type: 'Psíquico', category: 'Ataque', power: 90, accuracy: 100 },
            { name: 'Cabezazo Zen', type: 'Psíquico', category: 'Ataque', power: 80, accuracy: 90 },
            { name: 'Defensa Férrea', type: 'Acero', category: 'Defensa', power: 0, accuracy: 100 }
        ]
    }
]

const trainers = [
    {
        name: 'El Novato',
        team: [
            {
                name: 'Pidgey', types: ['Volador', 'Normal'],
                hp: 40, maxHp: 40, atk: 45, def: 40, spd: 56,
                spriteFront: 'assets/img/pidgey-front.png',
                attacks: [
                    { name: 'Tornado', type: 'Volador', category: 'Ataque', power: 40, accuracy: 100 },
                    { name: 'Ataque Ala', type: 'Volador', category: 'Ataque', power: 60, accuracy: 100 },
                    { name: 'Picotazo', type: 'Volador', category: 'Ataque', power: 40, accuracy: 100 },
                    { name: 'Gruñido', type: 'Normal', category: 'Defensa', power: 0, accuracy: 100 }
                ]
            },
            {
                name: 'Rattata', types: ['Normal'],
                hp: 40, maxHp: 40, atk: 50, def: 35, spd: 72,
                spriteFront: 'assets/img/rattata-front.png',
                attacks: [
                    { name: 'Placaje', type: 'Normal', category: 'Ataque', power: 40, accuracy: 100 },
                    { name: 'Mordisco', type: 'Normal', category: 'Ataque', power: 40, accuracy: 100 },
                    { name: 'Hipercolmillo', type: 'Normal', category: 'Ataque', power: 60, accuracy: 90 },
                    { name: 'Furia', type: 'Normal', category: 'Defensa', power: 0, accuracy: 100 }
                ]
            },
            {
                name: 'Caterpie', types: ['Bicho'],
                hp: 45, maxHp: 45, atk: 30, def: 35, spd: 45,
                spriteFront: 'assets/img/caterpie-front.png',
                attacks: [
                    { name: 'Placaje', type: 'Normal', category: 'Ataque', power: 40, accuracy: 100 },
                    { name: 'Disparo Demora', type: 'Bicho', category: 'Defensa', power: 0, accuracy: 100 },
                    { name: 'Golpe Cabeza', type: 'Normal', category: 'Ataque', power: 60, accuracy: 100 },
                    { name: 'Refuerzo', type: 'Normal', category: 'Defensa', power: 0, accuracy: 100 }
                ]
            }
        ]
    },
    {
        name: 'El Montañero',
        team: [
            {
                name: 'Geodude', types: ['Roca', 'Tierra'],
                hp: 50, maxHp: 50, atk: 60, def: 100, spd: 20,
                spriteFront: 'assets/img/geodude-front.png',
                attacks: [
                    { name: 'Lanzarrocas', type: 'Roca', category: 'Ataque', power: 60, accuracy: 90 },
                    { name: 'Placaje', type: 'Normal', category: 'Ataque', power: 40, accuracy: 100 },
                    { name: 'Magnitud', type: 'Tierra', category: 'Ataque', power: 60, accuracy: 100 },
                    { name: 'Fortaleza', type: 'Normal', category: 'Defensa', power: 0, accuracy: 100 }
                ]
            },
            {
                name: 'Sandshrew', types: ['Tierra'],
                hp: 55, maxHp: 55, atk: 65, def: 85, spd: 40,
                spriteFront: 'assets/img/sandshrew-front.png',
                attacks: [
                    { name: 'Arañazo', type: 'Normal', category: 'Ataque', power: 40, accuracy: 100 },
                    { name: 'Acuchillar', type: 'Normal', category: 'Ataque', power: 60, accuracy: 100 },
                    { name: 'Ataque Arena', type: 'Tierra', category: 'Defensa', power: 0, accuracy: 100 },
                    { name: 'Defensa Férrea', type: 'Acero', category: 'Defensa', power: 0, accuracy: 100 }
                ]
            },
            {
                name: 'Onix', types: ['Roca', 'Tierra'],
                hp: 60, maxHp: 60, atk: 45, def: 160, spd: 70,
                spriteFront: 'assets/img/onix-front.png',
                attacks: [
                    { name: 'Atadura', type: 'Normal', category: 'Ataque', power: 40, accuracy: 85 },
                    { name: 'Lanzarrocas', type: 'Roca', category: 'Ataque', power: 60, accuracy: 90 },
                    { name: 'Placaje', type: 'Normal', category: 'Ataque', power: 40, accuracy: 100 },
                    { name: 'Fortaleza', type: 'Normal', category: 'Defensa', power: 0, accuracy: 100 }
                ]
            }
        ]
    },
    {
        name: 'El Teniente',
        team: [
            {
                name: 'Voltorb', types: ['Eléctrico'],
                hp: 45, maxHp: 45, atk: 50, def: 50, spd: 100,
                spriteFront: 'assets/img/voltorb-front.png',
                attacks: [
                    { name: 'Impactrueno', type: 'Eléctrico', category: 'Ataque', power: 60, accuracy: 100 },
                    { name: 'Rapidez', type: 'Normal', category: 'Ataque', power: 60, accuracy: 100 },
                    { name: 'Placaje', type: 'Normal', category: 'Ataque', power: 40, accuracy: 100 },
                    { name: 'Carga', type: 'Eléctrico', category: 'Defensa', power: 0, accuracy: 100 }
                ]
            },
            {
                name: 'Magnemite', types: ['Eléctrico', 'Acero'],
                hp: 40, maxHp: 40, atk: 55, def: 70, spd: 45,
                spriteFront: 'assets/img/magnemite-front.png',
                attacks: [
                    { name: 'Rayo', type: 'Eléctrico', category: 'Ataque', power: 90, accuracy: 100 },
                    { name: 'Impactrueno', type: 'Eléctrico', category: 'Ataque', power: 60, accuracy: 100 },
                    { name: 'Placaje', type: 'Normal', category: 'Ataque', power: 40, accuracy: 100 },
                    { name: 'Defensa Férrea', type: 'Acero', category: 'Defensa', power: 0, accuracy: 100 }
                ]
            },
            {
                name: 'Raichu', types: ['Eléctrico'],
                hp: 70, maxHp: 70, atk: 90, def: 55, spd: 100,
                spriteFront: 'assets/img/raichu-front.png',
                attacks: [
                    { name: 'Rayo', type: 'Eléctrico', category: 'Ataque', power: 90, accuracy: 100 },
                    { name: 'Impactrueno', type: 'Eléctrico', category: 'Ataque', power: 60, accuracy: 100 },
                    { name: 'Portazo', type: 'Normal', category: 'Ataque', power: 80, accuracy: 75 },
                    { name: 'Agilidad', type: 'Psíquico', category: 'Defensa', power: 0, accuracy: 100 }
                ]
            }
        ]
    },
    {
        name: 'El Ninja',
        team: [
            {
                name: 'Weezing', types: ['Veneno'],
                hp: 65, maxHp: 65, atk: 90, def: 120, spd: 60,
                spriteFront: 'assets/img/weezing-front.png',
                attacks: [
                    { name: 'Residuos', type: 'Veneno', category: 'Ataque', power: 60, accuracy: 100 },
                    { name: 'Bomba Lodo', type: 'Veneno', category: 'Ataque', power: 90, accuracy: 100 },
                    { name: 'Placaje', type: 'Normal', category: 'Ataque', power: 40, accuracy: 100 },
                    { name: 'Fortaleza', type: 'Normal', category: 'Defensa', power: 0, accuracy: 100 }
                ]
            },
            {
                name: 'Muk', types: ['Veneno'],
                hp: 105, maxHp: 105, atk: 105, def: 75, spd: 50,
                spriteFront: 'assets/img/muk-front.png',
                attacks: [
                    { name: 'Residuos', type: 'Veneno', category: 'Ataque', power: 60, accuracy: 100 },
                    { name: 'Bomba Lodo', type: 'Veneno', category: 'Ataque', power: 90, accuracy: 100 },
                    { name: 'Puño Lodo', type: 'Tierra', category: 'Ataque', power: 60, accuracy: 100 },
                    { name: 'Fortaleza', type: 'Normal', category: 'Defensa', power: 0, accuracy: 100 }
                ]
            },
            {
                name: 'Golbat', types: ['Veneno', 'Volador'],
                hp: 75, maxHp: 75, atk: 80, def: 70, spd: 90,
                spriteFront: 'assets/img/golbat-front.png',
                attacks: [
                    { name: 'Chupavidas', type: 'Bicho', category: 'Ataque', power: 60, accuracy: 100 },
                    { name: 'Ataque Ala', type: 'Volador', category: 'Ataque', power: 60, accuracy: 100 },
                    { name: 'Mordisco', type: 'Normal', category: 'Ataque', power: 40, accuracy: 100 },
                    { name: 'Agilidad', type: 'Psíquico', category: 'Defensa', power: 0, accuracy: 100 }
                ]
            }
        ]
    },
    {
        name: 'El Campeón',
        team: [
            {
                name: 'Gyarados', types: ['Agua', 'Volador'],
                hp: 95, maxHp: 95, atk: 125, def: 79, spd: 81,
                spriteFront: 'assets/img/gyarados-front.png',
                attacks: [
                    { name: 'Hidrobomba', type: 'Agua', category: 'Ataque', power: 120, accuracy: 80 },
                    { name: 'Mordisco', type: 'Normal', category: 'Ataque', power: 40, accuracy: 100 },
                    { name: 'Placaje', type: 'Normal', category: 'Ataque', power: 40, accuracy: 100 },
                    { name: 'Furia', type: 'Normal', category: 'Defensa', power: 0, accuracy: 100 }
                ]
            },
            {
                name: 'Alakazam', types: ['Psíquico'],
                hp: 55, maxHp: 55, atk: 135, def: 45, spd: 120,
                spriteFront: 'assets/img/alakazam-front.png',
                attacks: [
                    { name: 'Psíquico', type: 'Psíquico', category: 'Ataque', power: 90, accuracy: 100 },
                    { name: 'Psicorrayo', type: 'Psíquico', category: 'Ataque', power: 60, accuracy: 100 },
                    { name: 'Triataque', type: 'Normal', category: 'Ataque', power: 80, accuracy: 100 },
                    { name: 'Reflejo', type: 'Psíquico', category: 'Defensa', power: 0, accuracy: 100 }
                ]
            },
            {
                name: 'Dragonite', types: ['Dragón', 'Volador'],
                hp: 91, maxHp: 91, atk: 134, def: 95, spd: 80,
                spriteFront: 'assets/img/dragonite-front.png',
                attacks: [
                    { name: 'Furia Dragón', type: 'Dragón', category: 'Ataque', power: 90, accuracy: 100 },
                    { name: 'Hiperrayo', type: 'Normal', category: 'Ataque', power: 120, accuracy: 90 },
                    { name: 'Golpe Cuerpo', type: 'Normal', category: 'Ataque', power: 90, accuracy: 100 },
                    { name: 'Agilidad', type: 'Psíquico', category: 'Defensa', power: 0, accuracy: 100 }
                ]
            }
        ]
    }
]