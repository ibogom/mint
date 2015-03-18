module.exports = function (grunt) {
    "use strict";
    //описываем конфигурацию 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), //подгружаем package.json, чтобы использовать его данные

        clean: {
            short: ["dest/js", "dest/assets"]
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/assets/imgs', src: ['**'], dest: 'dest/assets/imgs'},
                    {expand: true, cwd: 'src/assets/fonts', src: ['**'], dest: 'dest/assets/fonts'},
                    {expand: true, cwd: 'src/js/libs', src: ['**'], dest: 'dest/libs'}
                ]
            }
        },
        jshint: {     // описываем как будет проверять наш код - jsHint
            options: {
                strict: true,
                expr: true,
                onecase: true,
                maxcomplexity: 8,
                curly: false,     //change
                eqeqeq: false, //change
                forin: true,
                latedef: true,
                newcap: true,
                noarg: true,
                noempty: false, //change
                nonew: false,
                regexp: true,
                undef: true,
                evil: true,
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true,
                    window: true,
                    define: true
                },
                ignores: [
                    'src/js/app/config/*.js',
                    'src/js/app/init/*.js',
                    'src/js/libs/*.js',
                    'src/js/tests/*.js',
                    'src/js/app/App.js',
                    'src/js/app/templates/templateCollection.js'
                ]
            },
            uses_defaults: ['src/js/app/**/*.js']
        },

        handlebars: {
            compile: {
                options: {
                    namespace: "Mint",
                    amd: "handlebars.runtime",
                    partialsUseNamespace: true,
                    partialRegex: /.*/,
                    compilerOptions: {
                        knownHelpers: {
                            "each": true,
                            "if": true,
                            "unless": true
                        }
                    },
                    processPartialName: function (filePath) { // на входе получаем путь к шаблону:  templates/_header.hbs
                        var pieces = filePath.split("/");
                        return pieces[pieces.length - 1]; // на выходе поучаем только название шабона: _header.hbs
                    }
                },
                files: {
                    'src/js/app/templates/templateCollection.js': ['src/js/app/templates/*.hbs']
                }
            }
        },

        requirejs: {
            compile: {
                options: {
                    optimize: 'none',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    useSourceUrl: true,
                    mainConfigFile: "src/js/app/config/config.js", // главный файл с описанием конфигурации и билда require.js
                    baseUrl: "src/js/app",
                    name: 'init/ApiInit', // название файла запускающего приложение
                    out: "dest/js/main.min.js" // выходящий минифицированный и конкатенированный файл готовые для продакшена
                }
            }
        },

        sass: {
            dist: {
                options: {
                    //banner: '/*Minimalized CSS file <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',   //комментарий который будет в output файле.
                    style: 'compressed',
                    lineNumbers: true
                },
                files: {
                    // в эту папку получиться скомпелированный и сконкатенированный css файл готовый для продакшена
                    'dest/assets/css/main.min.css': ['src/assets/sass/main.scss']

                }
            }
        },

        watch: { //описываем работу плагина слежки за файлами.
            scripts: {
                files: ['src/js/app/**/*.js', 'src/js/app/html/**/*.html', 'src/js/libs/**/*.js'],  //следить за всеми js файлами в папке src
                tasks: ['jshint', 'handlebars', 'requirejs']  //при их изменении запускать следующие задачи
            },
            css: {
                files: ['src/assets/sass/**/*.scss'], //следить за всеми css файлами в папке src
                tasks: ['sass'] //при их изменении запускать следующую задачу
            },
            templates: {
                files: ['src/js/app/templates/*.hbs'],
                tasks: ['handlebars']
            },
            images: {
                files: ['src/assets/imgs/**/*.png', 'src/assets/imgs/**/*.jpg'],
                tasks: ['copy']
            }
        },

        connect: {
            apollo: {
                options: {
                    port: 8015,
                    hostname: '*',
                    keepalive: true,
                    protocol: 'http',
                    base: './dest',
                    middleware: function (connect, options) {
                        if (!Array.isArray(options.base)) {
                            options.base = [options.base];
                        }

                        // Setup the proxy
                        var middlewares = [require('grunt-connect-proxy/lib/utils').proxyRequest];

                        // Serve static files.
                        options.base.forEach(function (base) {
                            middlewares.push(connect.static(base));
                        });

                        // Make directory browse-able.
                        var directory = options.directory || options.base[options.base.length - 1];
                        middlewares.push(connect.directory(directory));

                        return middlewares;
                    }
                }
            }
        }
    });

//подгружаем необходимые плагины
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

//регистрируем задачу
    grunt.registerTask('default',
        ['clean', 'copy', 'jshint', 'sass', 'handlebars', 'requirejs', 'watch']); //задача по умолчанию, просто grunt

    grunt.registerTask('server', [
            'connect:apollo'
        ]);

    grunt.registerTask('test', ['jshint']);
}
;