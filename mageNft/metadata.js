const fs = require('fs');
var faker = require('faker');

const data = fs.readFileSync('./original/metadata/data.json',
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

for (let i = 0; i <= 99; i++) {
    json.name = `${faker.name.firstName('female') } ${ faker.name.lastName() }`;
    json.description = faker.lorem.paragraph(randomIntFromInterval(5, 10));
    json.image = `https://storageapi.fleek.co/lucasespinosa28-team-bucket/mageNft/preview/mage${i}.png`;
    json.animation_url = `https://storageapi.fleek.co/lucasespinosa28-team-bucket/mageNft/mage${i}.gltf`;
    json.license = "(Creative Commons Zero, CC0)";
    json.attributes[1].value = randomIntFromInterval(50, 99);
    json.attributes[1].value = randomIntFromInterval(50, 99);
    json.attributes[2].value = randomIntFromInterval(50, 99);
    json.attributes[3].value = randomIntFromInterval(50, 99);
    fs.writeFileSync(`./build/metadata/${i}.json`, JSON.stringify(json), { flag: 'w' });
}
