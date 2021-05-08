const sharp = require("sharp");

for(let i = 1; i <= 16; i++) {
    sharp('./assets/original/textures/lambert8SG_baseColor.png')
        .modulate({
            hue: i * 20
        })
        .toFile(`./assets/src/textures/textureA${i}.png`, function (err) {
            console.log(`textureA${i} created`);
        });
    sharp('./assets/original/textures/lambert9SG_baseColor.jpg')
        .modulate({
            hue: i * 20
        })
        .toFile(`./assets/src/textures/textureB${i}.jpg`, function (err) {
            console.log(`textureB${i} created`);
        });
}