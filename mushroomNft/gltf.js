const fs = require('fs');

fs.copyFile('./assets/original/scene.bin', './assets/build/mesh/scene.bin', (err) => {
    if (err) throw err;
    console.log('original/scene.bin was copied to build/mesh/scene.bin');
});

const data = fs.readFileSync('./assets/original/scene.gltf',
    { encoding: 'utf8', flag: 'r' });

const json = JSON.parse(data);
// Display the file data

var index = 0;
for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
        console.log(`${index}-${i}-${j}`);
        json.images[0].uri = `textures/textureA${i}.png`
        json.images[1].uri = `textures/textureB${j}.jpg`
        json.buffers[0].uri = `mesh/scene.bin`       
        index++;
        fs.writeFileSync(`./assets/build/mushroom${index}.gltf`, JSON.stringify(json));
    }
}