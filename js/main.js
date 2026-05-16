// VARIABLES GLOBALES (Para saber como va el juego)
let currentTrainerIndex = 0
let currentEnemyIndex = 0
let currentRival = null
let currentPlayer = null
let playerTeam = []

// Lo primero que corre el juego cuando carga
function init() {
    // Al cargar la página pongo la música de inicio
    // Nota: A veces Chrome no deja que suene hasta que hagas un clic
    window.addEventListener('click', () => {
        if (!ui.bgMusic) ui.playMusic('inicio.mp3');
    }, { once: true });

    // Cuando le dan a "START"
    document.getElementById('btn-start').addEventListener('click', () => {
        ui.playSound('clic.wav');
        ui.showScreen('selection')
        ui.renderPokemonPool(playerPokemon, handleSelection)
    })

    // Botón para confirmar que ya elegí mi equipo de 3
    document.getElementById('btn-confirm-team').addEventListener('click', () => {
        if (playerTeam.length === 0) {
            alert('Elige al menos un Pokémon para tu equipo')
            return
        }
        ui.playSound('clic.wav');
        ui.showScreen('trainerSelect')
        ui.renderTrainerPool(trainers, handleTrainerSelection)
    })

    // Para pelear con otro entrenador después de ganar
    document.getElementById('btn-next-trainer').addEventListener('click', () => {
        ui.playSound('clic.wav');
        playerTeam.forEach(p => {
            p.hp = p.maxHp
            p.buffUses = 0
        })
        ui.showScreen('trainerSelect')
        ui.renderTrainerPool(trainers, handleTrainerSelection)
    })

    // Botón de luchar abre el menú de ataques
    document.getElementById('btn-fight').addEventListener('click', () => {
        ui.playSound('clic.wav');
        ui.elements.actionMenu.classList.add('hidden')
        ui.elements.attackMenu.classList.remove('hidden')
    })

    // Botón de volver para salir del menú de ataques
    document.getElementById('btn-back').addEventListener('click', () => {
        ui.playSound('clic.wav');
        ui.elements.attackMenu.classList.add('hidden')
        ui.elements.actionMenu.classList.remove('hidden')
    })

    // Botón de Pokémon para cambiar de equipo
    document.getElementById('btn-pokemon').addEventListener('click', () => {
        ui.playSound('clic.wav');
        ui.elements.actionMenu.classList.add('hidden')
        ui.elements.switchMenu.classList.remove('hidden')
        document.getElementById('btn-cancel-switch').style.display = 'block'
        ui.renderSwitchMenu(playerTeam, currentPlayer)
    })

    document.getElementById('btn-cancel-switch').addEventListener('click', () => {
        ui.playSound('clic.wav');
        ui.elements.switchMenu.classList.add('hidden')
        ui.elements.actionMenu.classList.remove('hidden')
    })

    // Listeners para los botones de cambio de pokémon
    for (let i = 1; i <= 3; i++) {
        document.getElementById('switch-' + i).addEventListener('click', () => {
            ui.playSound('clic.wav');
            handleSwitch(i - 1)
        })
    }

    // Listeners para los 4 ataques
    for (let i = 1; i <= 4; i++) {
        document.getElementById('atk-' + i).addEventListener('click', () => {
            ui.playSound('clic.wav');
            startTurn(i - 1)
        })
    }
    
    // Reiniciar
    document.getElementById('btn-restart').addEventListener('click', () => {
        location.reload()
    })
}

function handleSelection(pokemon, isSelecting) {
    if (isSelecting) {
        if (playerTeam.length >= 3) {
            alert('Tu equipo ya está lleno')
            return false
        }
        playerTeam.push({...pokemon, originalAtk: pokemon.atk, originalDef: pokemon.def})
        return true
    } else {
        playerTeam = playerTeam.filter(p => p.id !== pokemon.id)
        return true
    }
}

function handleTrainerSelection(index) {
    currentTrainerIndex = index
    currentEnemyIndex = 0
    currentPlayer = playerTeam[0]
    
    const trainer = trainers[currentTrainerIndex]
    trainer.team.forEach(p => {
        p.hp = p.maxHp
        p.buffUses = 0
        p.originalAtk = p.atk
        p.originalDef = p.def
    })
    
    currentRival = trainer.team[currentEnemyIndex]
    
    playerTeam.forEach(p => {
        p.atk = p.originalAtk
        p.def = p.originalDef
        p.buffUses = 0
    })

    // Cambio a música de batalla
    ui.playMusic('batalla.mp3');

    ui.showScreen('battle')
    ui.updatePokemonData(true, currentPlayer)
    ui.updatePokemonData(false, currentRival)
    ui.setBattleText('¡Entrenador ' + trainer.name + ' te desafía!')

    // Escondo menús por si acaso
    ui.elements.attackMenu.classList.add('hidden')
    ui.elements.switchMenu.classList.add('hidden')

    // Suena el grito del rival cuando aparece
    setTimeout(() => ui.playCry(currentRival.name), 500);

    // NUEVO: Después de 2 segundos, dejo que el jugador pueda elegir ataque
    setTimeout(() => {
        ui.elements.actionMenu.classList.remove('hidden')
        ui.setBattleText('¿Qué hará ' + currentPlayer.name + '?')
    }, 2000)
    }

// ESTA ES LA inteligencia del rival, elige un movimiento basado en la situación 
function chooseRivalMove() {
    const attacks = currentRival.attacks.filter(m => m.category === 'Ataque')
    const defenses = currentRival.attacks.filter(m => m.category === 'Defensa')
    
    if (currentRival.hp < currentRival.maxHp * 0.5 && defenses.length > 0 && currentRival.buffUses < 2) {
        if (Math.random() < 0.3) return defenses[0]
    }

    let bestMove = attacks[0]
    let maxEffectiveness = -1
    attacks.forEach(move => {
        const eff = getEffectiveness(move.type, currentPlayer.types)
        if (eff > maxEffectiveness) {
            maxEffectiveness = eff
            bestMove = move
        }
    })
    return Math.random() < 0.8 ? bestMove : attacks[Math.floor(Math.random() * attacks.length)]
}

function startTurn(moveIndex) {
    ui.elements.attackMenu.classList.add('hidden')
    const playerMove = currentPlayer.attacks[moveIndex]
    const rivalMove = chooseRivalMove()

    if (currentPlayer.spd >= currentRival.spd) {
        executeAction(currentPlayer, currentRival, playerMove, true, () => {
            if (currentRival.hp > 0) {
                setTimeout(() => executeAction(currentRival, currentPlayer, rivalMove, false), 1500)
            }
        })
    } else {
        executeAction(currentRival, currentPlayer, rivalMove, false, () => {
            if (currentPlayer.hp > 0) {
                setTimeout(() => executeAction(currentPlayer, currentRival, playerMove, true), 1500)
            }
        })
    }
}

function executeAction(attacker, defender, move, isPlayerAttacking, callback) {
    ui.setBattleText(attacker.name + ' usó ' + move.name)

    setTimeout(() => {
        if (move.category === 'Defensa') {
            if (attacker.buffUses < 2) {
                attacker.def = attacker.def * 1.25
                attacker.buffUses++
                ui.setBattleText('¡La defensa de ' + attacker.name + ' subió!')
            } else {
                ui.setBattleText('¡No puede subir más!')
            }
        } else {
            const hit = calculateDamage(move, attacker.atk, defender.def, defender.types)
            
            if (!hit.isHit) {
                ui.setBattleText('¡Pero el ataque falló!')
            } else {
                // Suena el clic (reutilizado para el golpe)
                ui.playSound('clic.wav');
                defender.hp = Math.max(0, defender.hp - hit.damage)
                ui.updateHp(!isPlayerAttacking, defender.hp, defender.maxHp)
                
                if (hit.effectiveness === 0) ui.setBattleText('No afecta a ' + defender.name)
                else if (hit.effectiveness > 1) ui.setBattleText('¡Es súper efectivo!')
                else if (hit.effectiveness < 1) ui.setBattleText('No es muy efectivo...')
                else if (hit.isCrit) ui.setBattleText('¡Un golpe crítico!')
            }
        }

        setTimeout(() => {
            if (currentRival.hp === 0) {
                ui.setBattleText(currentRival.name + ' se debilitó')
                setTimeout(handleRivalFaint, 1500)
            } else if (currentPlayer.hp === 0) {
                ui.setBattleText('¡' + currentPlayer.name + ' se debilitó!')
                setTimeout(handlePlayerFaint, 1500)
            } else if (callback) {
                callback()
            } else {
                ui.elements.actionMenu.classList.remove('hidden')
                ui.setBattleText('¿Qué hará ' + currentPlayer.name + '?')
            }
        }, 1500)
    }, 1000)
}

function handleRivalFaint() {
    currentEnemyIndex++
    const trainer = trainers[currentTrainerIndex]
    
    if (currentEnemyIndex < trainer.team.length) {
        currentRival = trainer.team[currentEnemyIndex]
        currentRival.buffUses = 0
        ui.updatePokemonData(false, currentRival)
        ui.setBattleText(trainer.name + ' envió a ' + currentRival.name)
        setTimeout(() => ui.playCry(currentRival.name), 500);
        setTimeout(() => {
            ui.elements.actionMenu.classList.remove('hidden')
            ui.setBattleText('¿Qué hará ' + currentPlayer.name + '?')
        }, 1500)
    } else {
        // Al ganar vuelvo a la música de inicio
        ui.playMusic('inicio.mp3');
        document.getElementById('result-title').innerText = '¡Victoria!'
        document.getElementById('result-stats').innerText = '¡Derrotaste a ' + trainer.name + '!'
        document.getElementById('btn-next-trainer').classList.remove('hidden')
        ui.showScreen('result')
    }
}

function handlePlayerFaint() {
    const hasAlive = playerTeam.some(p => p.hp > 0)
    if (hasAlive) {
        ui.setBattleText('¡Elige otro Pokémon!')
        ui.elements.actionMenu.classList.add('hidden')
        ui.elements.switchMenu.classList.remove('hidden')
        document.getElementById('btn-cancel-switch').style.display = 'none'
        ui.renderSwitchMenu(playerTeam, currentPlayer)
    } else {
        ui.playMusic('inicio.mp3');
        document.getElementById('result-title').innerText = 'Perdiste...'
        document.getElementById('result-stats').innerText = 'Tu equipo fue derrotado'
        document.getElementById('btn-next-trainer').classList.add('hidden')
        ui.showScreen('result')
    }
}

function handleSwitch(teamIndex) {
    const wasFainted = currentPlayer.hp === 0
    currentPlayer = playerTeam[teamIndex]
    currentPlayer.buffUses = 0
    currentPlayer.atk = currentPlayer.originalAtk
    currentPlayer.def = currentPlayer.originalDef
    
    ui.elements.switchMenu.classList.add('hidden')
    document.getElementById('btn-cancel-switch').style.display = 'block'
    
    ui.updatePokemonData(true, currentPlayer)
    ui.setBattleText('¡Ve ' + currentPlayer.name + '!')
    setTimeout(() => ui.playCry(currentPlayer.name), 500);

    setTimeout(() => {
        if (wasFainted) {
            ui.elements.actionMenu.classList.remove('hidden')
            ui.setBattleText('¿Qué hará ' + currentPlayer.name + '?')
        } else {
            const rivalMove = chooseRivalMove()
            executeAction(currentRival, currentPlayer, rivalMove, false)
        }
    }, 1500)
}

init()