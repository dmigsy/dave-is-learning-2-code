module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          sizes: [{
            width: 360,
            quality: 40
          }, {
            width: 868,
            quality: 40
          }, {
            width: 1200,
            quality: 80
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

