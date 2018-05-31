# TypeScript Gulp Template

Template project that demonstrates compiling and minifying TypeScript files using Gulp.

## Usage

Use the Gulp toolkit to automatically compile your TypeScript files as they're saved.

`watch:tsmin` --  While the task is running, any `.ts` files saved within the `ts` directory will be compiled to JavaScript files, compressed with Uglify, and saved in the `js` directory with the extension `.min.js`.

Also, the task creates source maps to make debugging easier, which are saved in the `maps` directory.

## Instructions

1. Install npm
2. Clone this repository
3. Open a terminal and navigate to this folder on your machine
4. Type `npm install` to install the required packages
5. Type `gulp watch:tsmin`.
6. That's it! Remember to change the values in `package.json` if you're going to publish this app.