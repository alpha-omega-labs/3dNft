const fs = require('fs');
var faker = require('faker');

const data = fs.readFileSync('./assets/original/metadata/data.json',
    { encoding: 'utf8', flag: 'r' });

const json = JSON.parse(data);
let randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const fixName = (text) => {
    if (text.includes("Caiman")) {
        return text.replace("Caiman", "Mushroom")
    }
    if (text.includes("Alligator")) {
        return text.replace("Alligator", "Mushroom")
    }
    if (text.includes("Crocodile")) {
        return text.replace("Crocodile", "Mushroom")
    }
    return "Magic Mushroom"
}

const types = (Number) => {
    //console.log(Number)
    if (Number === 1) {
        return "Plant"
    }
    return "Poison"
}

for (let i = 0; i < 256; i++) {
    json.name = fixName(faker.animal.crocodilia());
    json.description = faker.lorem.paragraph(randomIntFromInterval(5, 10));
    json.image = `https://storageapi.fleek.co/lucasespinosa28-team-bucket/mushroomNft/images/mushroom${i}.png`;
    json.animation_url = `https://storageapi.fleek.co/lucasespinosa28-team-bucket/mushroomNft/mushroom${i}.gltf`;
    json.license = "https://sketchfab.com/3d-models/monster-mushroom-d66457ec74db400f903f946ab0bf21b4";
    json.attributes[0].value = types(randomIntFromInterval(0, 1));
    json.attributes[1].value = randomIntFromInterval(50, 99);
    json.attributes[2].value = randomIntFromInterval(50, 99);
    json.attributes[3].value = randomIntFromInterval(50, 99);
    console.log(`./assets/build/metadata/${i}.json`);
    fs.writeFileSync(`./assets/build/metadata/${i}.json`, JSON.stringify(json));
}