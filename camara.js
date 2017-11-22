var RaspiCam = require("raspicam");


var camera = new RaspiCam({
								mode: "photo",
								output: "/home/pi/Desktop/Guiame/vista.jpg",
								e: "jpg",
								//p: '200,200,200,200',
								v:true,
								n:true
							});

camera.start()




