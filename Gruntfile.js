module.exports = function(grunt) {
	'use strict';

	require('matchdep')
		.filterDev('grunt-*')
		.forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		jsSource: 'leaflet.geojsoncss.js',
		banner: 
			'/**\n' +
			' * Leaflet.geojsonCSS\n' +
			' * @author Alexander Burtsev, http://burtsev.me, <%= grunt.template.today("yyyy") %>\n' +
			' * @author José María Martínez, jmmluna@gmail.com, http://about.me/jmmluna, 2017, <%= grunt.template.today("yyyy") %>\n' +
			' * @license MIT\n' +
			' */\n',

		jshint: {
			app: ['<%= jsSource %>']
		},

		jscs: {
			options: {
				config: '.jscs.json'
			},
			app: ['<%= jsSource %>']
		},

		uglify: {
			options: {
				banner: '<%= banner %>'
			},
			geojsoncss: {
				files: {
					'leaflet.geojsoncss.min.js': ['<%= jsSource %>']
				}
			}
		},

		watch: {
			geojsoncss: {
				files: ['<%= jsSource %>'],
				tasks: ['jshint', 'jscs', 'uglify']
			}
		}
	});

	grunt.registerTask('default', ['jshint', 'jscs', 'uglify', 'watch']);
};
