const raceDefaults = {
    humano: {
        fuerza: 5,
        destreza: 5,
        inteligencia: 5,
        carisma: 5
    },
    elfo: {
        fuerza: 3,
        destreza: 7,
        inteligencia: 6,
        carisma: 4
    },
    enano: {
        fuerza: 8,
        destreza: 3,
        inteligencia: 4,
        carisma: 5
    },
};

function createCharacter(
    race,
    strengthPoints,
    dexterityPoints,
    intelligencePoints,
    charismaPoints
) {

    const defaultAttributes = raceDefaults[race];

    const attributes = {
        fuerza: defaultAttributes.fuerza + strengthPoints,
        destreza: defaultAttributes.destreza + dexterityPoints,
        inteligencia: defaultAttributes.inteligencia + intelligencePoints,
        carisma: defaultAttributes.carisma + charismaPoints,
    };

    return attributes;
}

const character = createCharacter("elfo", 2, 1, 0, 1);

console.log(character);