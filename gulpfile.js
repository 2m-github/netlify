let project_folder = "dist";    //산출물 루트
let source_folder = "src";  //소스 루트

let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    src: {
        html: [source_folder + "/*.html", "!" + source_folder + "/inc"],
        css: source_folder + "/css/*.+(sass|scss|css)",
        js: source_folder + "/js/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico}",
        fonts: source_folder + "/fonts/*.ttf",
    },
    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/css/**/*.+(sass|scss|css)",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico}"
    },
    clean: "./" + project_folder + "/"
}

let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browsersync = require("browser-sync").create(),
    fileinclude = require("gulp-file-include"), //공통파일 include
    del = require("del"),   //삭제
    scss = require("gulp-sass"),
    imagemin = require("gulp-imagemin");

function browserSync(params){
    browsersync.init({
        server:{
            baseDir: "./" + project_folder + "/"
        },
        port: 3002,
        notify:false
    })
}

function html(){
    return src(path.src.html)
        .pipe(fileinclude())    //공통파일 include
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function css(){
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: "expanded"
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

function js(){
    return src(path.src.js)
        .pipe(fileinclude())    //공통파일 include
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

function images(){
    return src(path.src.img)
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

//비동기 함수 (소스 수정시 적극 반영)
function watchFiles(params) {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}

//빌드파일 삭제
function clean() {
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(images, js, css, html));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.images = images;
exports.js = js;
exports.css = css;
exports.scss = scss;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;