var RaspiCam = require("raspicam");

var translate = require('node-google-translate-skidz');

const vision = require('@google-cloud/vision')({
  projectId: 'guiame-184521',
  keyFilename: 'guiame-b0b18f450951.json'
});

var camera = new RaspiCam({
	mode: "photo",
	output: "/home/pi/Desktop/Guiame/resources/vista.jpg",
	e: "jpg",
	//p: '200,200,200,200',
	v:true,
	n:true
});

camera.start();

setTimeout(function() {
    prueba();
}, 7000);

function prueba(){
	const fileName = './resources/vista.jpg';

	vision.labelDetection({ source: { filename: fileName } })
		.then((results) => {
			const labels = results[0].labelAnnotations;
			console.log('Labels:');
			labels.forEach((label) => translate(
				{text: label.description, source: 'en', target: 'es'},
				function(result) {
					console.log(result.translation);
					})
			)
		})
		.catch((err) => {
			console.error('ERROR:', err);
	});
}
