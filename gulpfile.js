var gulp = require("gulp");
var ts = require("gulp-typescript");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var rename = require("gulp-rename");

gulp.task("tsmin", function() {
    return gulp.src("ts/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(ts())
        .pipe(uglify())
        .pipe(rename({ extname: ".min.js" }))
        .pipe(sourcemaps.write("../maps"))
        .pipe(gulp.dest("js"));
});

gulp.task("watch:tsmin", ["tsmin"], function() {
    gulp.watch("ts/**/*.ts", ["tsmin"]);
});

gulp.task("default", ["tsmin"]);