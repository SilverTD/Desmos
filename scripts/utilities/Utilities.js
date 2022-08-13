function randomBetween(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
}

function generatorColors(a = 1) {
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);

        return `rgba(${r}, ${g}, ${b}, ${a})`;
}
