# mozjpegify.mjs

What is mozjpeg?

It's a production-quality JPEG encoder that improves compression while maintaining compatibility with the jpeg format.

Read more about it here: https://research.mozilla.org/2014/03/05/introducing-the-mozjpeg-project/

What is mozjpegify?

It's a bulk image processor which optimizes your image files using the mozjpeg encoder.

I was having some trouble using other people's code to process gigabytes worth of images. Typically it would work for a small quantity of images but would crash when doing massive amounts. Well I made this to easily optimize images using the mozjpeg encoder. The code is robust (I've tested on more than 25 GB worth of images) and replicates the folder structure to make things easy and it gets the job done. You can also easily change it for other plugins too if you want like imageminJpegtran, imageminPngquant, etc.

Install Dependencies:

    npm i path
    
    npm i glob
    
    npm i imagemin
    
    npm i imagemin-mozjpeg

Usage:

Be sure to update the paths for srcdir (where the source images are), distdir (the destination path) variables in the code before running.

    node mozjpegify.mjs
