// Import stylesheets
import './style.css';
import * as Game from 'src/Game.ts';
import * as THREE from "three"; 


// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
//Game.Game.main()

// instantiate a loader
var loader = new THREE.ImageLoader();

// load a image resource
loader.load(
	// resource URL
	'king_of_hearts2.png',

	// onLoad callback
	function ( image ) {
		// use the image, e.g. draw part of it on a canvas
		var canvas = document.createElement( 'canvas' );
		var context = canvas.getContext( '2d' );
		context.drawImage( image, 100, 100 );
	},

	// onProgress callback currently not supported
	undefined,

	// onError callback
	function () {
		console.error( 'An error happened.' );
	}
);
