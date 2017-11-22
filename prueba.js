var translate = require('node-google-translate-skidz');

const vision = require('@google-cloud/vision')({
  projectId: 'guiame-184521',
  keyFilename: 'guiame-b0b18f450951.json'
});

const fileName = './ vista.jpg';

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


