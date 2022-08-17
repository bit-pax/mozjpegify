# mozjpegify.mjs

I was having some trouble using other people's code to process gigabytes worth of images. Typically it would work for a small quantity of images but would crash when doing massive amounts. Well I made this to easily optimize images using the mozjpeg encoder. The code is robust and replicates the folder structure to make things easy but since it's doing everything synchronously it's slow but it gets the job done.

Install Dependencies:

    npm i path
    
    npm i glob
    
    npm i imagemin
    
    npm i imagemin-mozjpeg
    
Usage:

    Be sure to update the paths for srcdir (where the source images are), distdir (the destination path) variables in the code before running.
    
    node mozjpegify.mjs
