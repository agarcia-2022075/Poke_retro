// TABLA DE TIPOS: Aquí puse todas las debilidades y resistencias según la primera generación
const typeMatrix = {
    'Fuego': { 'Planta': 2.0, 'Agua': 0.5, 'Roca': 0.5, 'Fuego': 0.5, 'Bicho': 2.0, 'Hielo': 2.0, 'Acero': 2.0 },
    'Agua': { 'Fuego': 2.0, 'Tierra': 2.0, 'Roca': 2.0, 'Agua': 0.5, 'Planta': 0.5, 'Dragón': 0.5 },
    'Planta': { 'Agua': 2.0, 'Tierra': 2.0, 'Roca': 2.0, 'Fuego': 0.5, 'Planta': 0.5, 'Veneno': 0.5, 'Volador': 0.5, 'Bicho': 0.5, 'Dragón': 0.5, 'Acero': 0.5 },
    'Eléctrico': { 'Agua': 2.0, 'Volador': 2.0, 'Planta': 0.5, 'Eléctrico': 0.5, 'Tierra': 0.0, 'Dragón': 0.5 },
    'Normal': { 'Roca': 0.5, 'Fantasma': 0.0, 'Acero': 0.5 },
    'Volador': { 'Planta': 2.0, 'Lucha': 2.0, 'Bicho': 2.0, 'Eléctrico': 0.5, 'Roca': 0.5, 'Acero': 0.5 },
    'Psíquico': { 'Lucha': 2.0, 'Veneno': 2.0, 'Psíquico': 0.5, 'Acero': 0.5, 'Siniestro': 0.0 },
    'Veneno': { 'Planta': 2.0, 'Veneno': 0.5, 'Tierra': 0.5, 'Roca': 0.5, 'Fantasma': 0.5, 'Acero': 0.0 },
    'Tierra': { 'Fuego': 2.0, 'Eléctrico': 2.0, 'Veneno': 2.0, 'Roca': 2.0, 'Acero': 2.0, 'Planta': 0.5, 'Bicho': 0.5, 'Volador': 0.0 },
    'Roca': { 'Fuego': 2.0, 'Hielo': 2.0, 'Volador': 2.0, 'Bicho': 2.0, 'Lucha': 0.5, 'Tierra': 0.5, 'Acero': 0.5 },
    'Lucha': { 'Normal': 2.0, 'Hielo': 2.0, 'Roca': 2.0, 'Acero': 2.0, 'Veneno': 0.5, 'Volador': 0.5, 'Psíquico': 0.5, 'Bicho': 0.5, 'Fantasma': 0.0 },
    'Hielo': { 'Planta': 2.0, 'Tierra': 2.0, 'Volador': 2.0, 'Dragón': 2.0, 'Fuego': 0.5, 'Agua': 0.5, 'Hielo': 0.5, 'Acero': 0.5 },
    'Fantasma': { 'Psíquico': 2.0, 'Fantasma': 2.0, 'Normal': 0.0 },
    'Dragón': { 'Dragón': 2.0, 'Acero': 0.5, 'Hada': 0.0 },
    'Bicho': { 'Planta': 2.0, 'Psíquico': 2.0, 'Fuego': 0.5, 'Lucha': 0.5, 'Veneno': 0.5, 'Volador': 0.5, 'Fantasma': 0.5, 'Acero': 0.5 }
}

// Función para calcular que tan efectivo es un golpe
function getEffectiveness(attackType, defenderTypes) {
    let multiplier = 1.0
    // Recorro los tipos del que defiende para ver si el ataque le duele más o menos
    defenderTypes.forEach(type => {
        if (typeMatrix[attackType] && typeMatrix[attackType][type] !== undefined) {
            multiplier *= typeMatrix[attackType][type]
        }
    })
    return multiplier
}

// Esta es la lógica principal del daño 
function calculateDamage(move, attackerAtk, defenderDef, defenderTypes) {
    // Si el ataque no tiene poder (es defensa), no hace daño
    if (move.power === 0) return { damage: 0, isHit: true } 
    
    // Aquí checo si el ataque falla o no (usando la precisión que le puse en data.js)
    const hitRoll = Math.random() * 100
    if (hitRoll > move.accuracy) {
        return { damage: 0, isHit: false }
    }

    const effectiveness = getEffectiveness(move.type, defenderTypes)
    // Si es inmune pues no le hace nada
    if (effectiveness === 0) return { damage: 0, isHit: true, effectiveness: 0 }

    // Probabilidad de 10% para que sea golpe crítico
    const isCrit = Math.random() > 0.90
    const critMultiplier = isCrit ? 1.5 : 1.0
    
    // LA FORMULA: ( (poder * (atk/def)) /10)+2 y luego los multiplicadores
    let damage = (((move.power * (attackerAtk / defenderDef)) / 10) + 2) * effectiveness * critMultiplier
    
    return {
        damage: Math.max(1, Math.floor(damage)), // Al menos le quita 1 de vida siempre
        isHit: true,
        isCrit: isCrit,
        effectiveness: effectiveness
    }
}