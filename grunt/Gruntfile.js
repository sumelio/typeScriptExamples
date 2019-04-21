module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-ts');
    grunt.initConfig({
        ts: {
            default: {
                src: ['typescript/*.ts'],
                dest:'javascript/'
                //out:'javascript/main.js'
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts"]);
}