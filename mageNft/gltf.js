const fs = require('fs');


let randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
let randomSkinColor = () => {
    const number = randomIntFromInterval(0, 4);
    switch (number) {
        case 1:
            return [0.32694560289382935,0.10152623057365417,0.05927089974284172,1]
            break;
        case 2:
            return [0.5778115391731262, 0.23347531259059906, 0.11534765362739563,1]
            break;
        case 3:
            return [0.7029160857200623,0.4253237545490265,0.20689357817173004,1]
            break;
        default:
            return [0.9215819239616394,0.5271151065826416,0.33245164155960083, 1]
    }
}
const Color = () => {
    var RGB = {
        R: "0.",
        G: "0.",
        B: "0."
    };
    for (let i = 0; i <= 16; i++) {
        RGB.R += randomIntFromInterval(0, 9);
        RGB.G += randomIntFromInterval(0, 9);
        RGB.B += randomIntFromInterval(0, 9);
    }

    return [Number(RGB.R), Number(RGB.G), Number(RGB.B),1]

}

fs.copyFile('./original/mage.bin', './build/mesh/mage.bin', (err) => {
    if (err) throw err;
    console.log('original/mage.bin was copied to build/mesh/mage.bin');
});

const data = fs.readFileSync('./original/mage.gltf',{ encoding: 'utf8', flag: 'r' });

const json = JSON.parse(data);

for (let i = 0; i <= 99; i++) {
    const colors = Color();
    const details = Color();
    const face = Color();
    json.materials[0].pbrMetallicRoughness.baseColorFactor = [colors[0], colors[1], colors[2], 1];
    json.materials[1].pbrMetallicRoughness.baseColorFactor = [colors[0] / 6, colors[1] / 6, colors[2] / 6, 1];
    json.materials[3].pbrMetallicRoughness.baseColorFactor = [colors[0] /3, colors[1] /3, colors[2] / 3, 1];
    json.materials[4].pbrMetallicRoughness.baseColorFactor = randomSkinColor()
    json.materials[5].pbrMetallicRoughness.baseColorFactor = [face[0] / 5, face[1] / 5,face[2] / 5,1];
    json.materials[6].pbrMetallicRoughness.baseColorFactor = details;
    json.materials[7].pbrMetallicRoughness.baseColorFactor = face;
    json.materials[8].pbrMetallicRoughness.baseColorFactor = details
    json.buffers[0].uri = `mesh/mage.bin`       
    fs.writeFileSync(`./build/mage${i}.gltf`, JSON.stringify(json), {flag: 'w'});
}
