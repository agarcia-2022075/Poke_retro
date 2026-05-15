// Objeto para manejar todo lo que se ve en la pantalla
const ui = {
    // Aquí agarro todas las secciones principales por su ID
    screens: {
        start: document.getElementById('screen-start'),
        selection: document.getElementById('screen-selection'),
        trainerSelect: document.getElementById('screen-trainer-select'),
        battle: document.getElementById('screen-battle'),
        result: document.getElementById('screen-result')
    },
    // Y aquí todos los botones y cosas que van cambiando durante la pelea
    elements: {
        playerSprite: document.getElementById('player-sprite'),
        playerName: document.getElementById('player-name'),
        playerHpBar: document.getElementById('player-hp-bar'),
        rivalSprite: document.getElementById('rival-sprite'),
        rivalName: document.getElementById('rival-name'),
        rivalHpBar: document.getElementById('rival-hp-bar'),
        battleText: document.getElementById('battle-text'),
        attackMenu: document.getElementById('attack-menu'),
        actionMenu: document.getElementById('action-menu'),
        pokemonPool: document.getElementById('pokemon-pool'),
        switchMenu: document.getElementById('switch-menu'),
        trainerPool: document.getElementById('trainer-pool')
    },

    // Variable global para la música de fondo para poder pararla o cambiarla
    bgMusic: null,

    // Función simple para cambiar de una pantalla a otra ocultando las demás
    showScreen(screenName) {
        Object.values(this.screens).forEach(screen => {
            screen.classList.add('hidden')
            screen.classList.remove('active')
        })
        this.screens[screenName].classList.remove('hidden')
        this.screens[screenName].classList.add('active')
    },

    // Función para poner música en bucle
    playMusic(fileName) {
        // Si ya hay música sonando la quito
        if (this.bgMusic) {
            this.bgMusic.pause();
            this.bgMusic = null;
        }
        // Creo el nuevo objeto de audio y le digo que sea infinito (loop)
        this.bgMusic = new Audio(`assets/sounds/${fileName}`);
        this.bgMusic.loop = true;
        this.bgMusic.volume = 0.3; // Bajito para que no moleste al hablar
        this.bgMusic.play().catch(e => console.log("La música no arrancó: " + e));
    },

    // Sonidos cortos como botones o golpes
    playSound(fileName) {
        const sound = new Audio(`assets/sounds/${fileName}`);
        sound.volume = 0.5;
        sound.play().catch(e => console.log("Faltó el sonidito: " + fileName));
    },

    // Función nueva para que el pokémon grite (los bajé de showdown)
    playCry(pokemonName) {
        const name = pokemonName.toLowerCase().replace(' ', '');
        const audio = new Audio(`assets/sounds/cries/${name}.mp3`);
        audio.volume = 0.4;
        audio.play().catch(e => console.log("No encontré el audio de " + name));
    },

    // Aquí actualizo las barras de vida y cambio el color según cuanta vida quede
    updateHp(isPlayer, currentHp, maxHp) {
        const percentage = Math.max(0, (currentHp / maxHp) * 100)
        const bar = isPlayer ? this.elements.playerHpBar : this.elements.rivalHpBar
        const textElement = isPlayer ? document.getElementById('player-hp-text') : document.getElementById('rival-hp-text')
        
        bar.style.width = percentage + '%'
        textElement.innerText = Math.floor(currentHp) + '/' + maxHp
        
        if (percentage > 50) {
            bar.style.backgroundColor = '#306230'
        } else if (percentage > 20) {
            bar.style.backgroundColor = '#8bac0f' 
        } else {
            bar.style.backgroundColor = '#0f380f' 
        }
    },

    setBattleText(text) {
        this.elements.battleText.innerText = text
    },

    renderPokemonPool(pool, onSelect) {
        this.elements.pokemonPool.innerHTML = ''
        pool.forEach(poke => {
            const card = document.createElement('div')
            card.className = 'poke-card'
            card.innerHTML = `
                <img src="${poke.spriteFront}" alt="${poke.name}">
                <span>${poke.name}</span>
            `
            
            card.onclick = () => {
                const isNowSelected = !card.classList.contains('selected')
                const canSelect = onSelect(poke, isNowSelected)
                
                if (canSelect) {
                    this.playSound('clic.wav'); // Suena el click al elegir
                    card.classList.toggle('selected')
                }
            }
            this.elements.pokemonPool.appendChild(card)
        })
    },

    renderTrainerPool(trainers, onSelect) {
        this.elements.trainerPool.innerHTML = ''
        const difficulties = ['Fácil', 'Normal', 'Difícil', 'Experto', 'Maestro']
        trainers.forEach((trainer, index) => {
            const card = document.createElement('div')
            card.className = 'trainer-card'
            card.innerHTML = `<span>${trainer.name}</span> <span class="difficulty">${difficulties[index]}</span>`
            card.onclick = () => {
                this.playSound('clic.wav');
                onSelect(index);
            }
            this.elements.trainerPool.appendChild(card)
        })
    },

    updatePokemonData(isPlayer, pokemon) {
        if (isPlayer) {
            this.elements.playerName.innerText = pokemon.name
            this.elements.playerSprite.src = pokemon.spriteBack
            this.updateHp(true, pokemon.hp, pokemon.maxHp)
            
            for (let i = 0; i < 4; i++) {
                const btn = document.getElementById('atk-' + (i + 1))
                if (pokemon.attacks[i]) {
                    btn.innerText = pokemon.attacks[i].name
                    btn.style.display = 'block'
                } else {
                    btn.style.display = 'none'
                }
            }
        } else {
            this.elements.rivalName.innerText = pokemon.name
            this.elements.rivalSprite.src = pokemon.spriteFront
            this.updateHp(false, pokemon.hp, pokemon.maxHp)
        }
    },

    renderSwitchMenu(team, currentActive) {
        for (let i = 0; i < 3; i++) {
            const btn = document.getElementById('switch-' + (i + 1))
            if (team[i]) {
                btn.innerText = team[i].name + ' ' + Math.floor(team[i].hp) + 'HP'
                btn.style.display = 'block'
                btn.disabled = team[i].hp === 0 || team[i].id === currentActive.id
            } else {
                btn.style.display = 'none'
            }
        }
    }
}