
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump= loadSound("jump.wav")
	mario_coin= loadSound("coin.wav")
	mario_kick= loadSound("kick.wav")
	mario_die= loadSound("mariodie.wav")
	mario_over_legend_number_join_ANAKG_126_1_2_3_4_5_6_7_8_9_10= loadSound("gameover.wav")
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(500,200)
	video.parent("Gaming_Legendary_console");
	posenet=ml5.poseNet(video , modelloaded)
	posenet.on("pose" , gotposes);	
}
function modelloaded()
{
	console.log("model is not working!")
}
function gotposes(result)
{
	if(result.length > 0)
	{	console.log(result)
		noseX=result[0].pose.nose.x;
		noseY=result[0].pose.nose.y
	}

}

function draw() {
	game()
}






