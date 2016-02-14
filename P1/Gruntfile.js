module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          sizes: [{
            width: 400
          }, {
            width: 800
          }, {
            width: 1200
          }]
        },
        files: [{
          expand: true,
          src: ['images/*.{jpg,jpeg,gif,png}'],
          dest: 'dist/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);
};

