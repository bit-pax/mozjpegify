// mozjpegify.mjs

import path from 'path';
import glob from 'glob';
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';

// Github: https://github.com/imagemin/imagemin-mozjpeg

const srcdir = 'card_images/core';
const distdir = 'card_images_done/core';

/*
spellbook // 2 MB
arsenal // 4 MB
premium_deck // 14 MB
vanguard // 15 MB
from_the_vault // 15 MB
alchemy // 40 MB
archenemy // 40 MB
treasure_chest // 40 MB
funny // 105 MB
masterpiece // 111 MB
token // 162 MB
planechase // 172 MB
starter // 321 MB
duel_deck // 331 MB
memorabilia // 393 MB
box // 608 MB
promo // 722 MB // --> failed (too many images)
masters // 1.5 GB
draft_innovation // 1.9 GB
commander // 2.73 GB

core // 4 GB
expansion // 13.6 GB
*/

Main();

async function Main() {
    GetPath(srcdir, GetPathCallback);
}

function GetPath( src, callback ) {
    glob(src + '/**/*', callback);
};

async function GetPathCallback(err, filePath) {
    if (!err) {
        for(let i=0; i<filePath.length; i++) {
            //console.log( filePath[i] + ' -> ' + filePath[i].replace(srcdir, distdir) ); // source -> target

            let ext = filePath[i].split('.').pop(); // get file extension

            if( ext == 'jpg' || ext == 'jpeg' || ext == 'png' ) { // make sure it's an image and not a folder
                await Optimize( filePath[i], ParsePath(filePath[i].replace(srcdir, distdir)) );
            }
        }
    } 
    else {
        console.log('Error:', err);
    }
}

async function Optimize( src, destFolder ) {
    const files = await imagemin(
        [src],
        {
            destination: destFolder,
            plugins: [
                imageminMozjpeg({ quality: 75 })
            ]
        }
    );

    console.log( src + '...Done' );
}

function ParsePath(filepath) {
    return path.parse(filepath).dir;
}





