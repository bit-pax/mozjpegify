// mozjpegify.mjs

import path from 'path';
import glob from 'glob';
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';

const srcdir = 'images/source';
const distdir = 'images/dist';

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





