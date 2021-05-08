const sharp = require("sharp");

for(let i = 0; i < 256; i++) {
    sharp(`./assets/renders/mushroom${i}.png`)
    .resize(350, 350)
        .toFile(`./assets/src/preview/mushroom${i}.png`, (err, info) => { 
	console.log(`mushroom${i}.png`) 
	console.log(info) 
});
}