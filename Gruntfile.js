module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        expand: true,
        cwd: '_book',
        src: ['*.html', 'advanced/*.html'],
        dest: 'dist/'
      }
    },
    cssmin: {
      files: {
        expand: true,
        cwd: '_book',
        src: ['gitbook/**/*.css'],
        dest: 'dist/'
      }
    },
    uglify: {
      main: {
        files: [{
          expand: true,
          cwd: '_book',
          src: ['gitbook/**/*.js', '!gitbook/gitbook-plugin-anchor-navigation-ex/**/*.js'],
          dest: 'dist/'
        }]
      }
    },
    unescape: {
      files: {
        src: ['_book/*.html', '_book/advanced/*.html'],
        dist: 'dist/'
      }
    },
    replace: {
      html: {
        src: ['_book/*.html', '_book/advanced/*.html'],
        overwrite: true,
        replacements: [{
          from: 'href="gitbook',
          to: 'href="https://cdn.jsdelivr.net/gh/wangding/nodejs@gh-pages/gitbook'
        }, {
          from: 'href="styles',
          to: 'href="https://cdn.jsdelivr.net/gh/wangding/nodejs@gh-pages/styles'
        }, {
          from: 'href="images',
          to: 'href="https://cdn.jsdelivr.net/gh/wangding/nodejs@gh-pages/images'
        }, {
          from: 'src="gitbook',
          to: 'src="https://cdn.jsdelivr.net/gh/wangding/nodejs@gh-pages/gitbook'
        }, {
          from: 'src="images',
          to: 'src="https://cdn.jsdelivr.net/gh/wangding/nodejs@gh-pages/images'
        }]
      }
    },
    copy: {
      html: {
        files: [
          {
            expand: true,
            cwd: 'dist',
            src: ['*.html', 'advanced/*.html'],
            dest: '_book/'
          }
        ]
      },
      js: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['gitbook/**'],
          dest: '_book/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-unescape-html');

  grunt.registerTask('minify', ['unescape', 'copy:html', 'replace', 'htmlmin', 'cssmin', 'uglify', 'copy:html', 'copy:js']);
};
