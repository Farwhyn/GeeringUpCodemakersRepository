// Libraries
//*** VARIABLES:

// game grid
var GRID_WIDTH = 30;
var GRID_HEIGHT = 30;
var WALL_WIDTH = 3;
var numRows = CANVAS_WIDTH/GRID_HEIGHT;
var numCols = CANVAS_HEIGHT/GRID_WIDTH;

// colors for UI & Pacman
var BG_COLOR = "black";
var BORDER_COLOR = "blue";
var BEAN_COLOR = "white";
var PACMAN_COLOR = "yellow";

// game parameters
var intervalId;
var restartTimer = 0;
var timerDelay = 80;
var speed = 5;
var score = 0;
var lives = [];
var MAX_LIFE = 3;
var life = MAX_LIFE;
var weakBonus = 200;
var MAX_BEANS = 136;
var beansLeft = MAX_BEANS;
var weakCounter;
var WEAK_DURATION = 10000/timerDelay;

//bean cases
var NORMAL_BEAN = 1
var POWER_BEAN = 2;

//spirtes instances
var welcomePacman;
var welcomeBlinky;
var welcomeInky;
var mrPacman;
var blinky;
var inky;
var pinky;
var clyde;
var ghosts;

// colors for ghost
var RED = "red";
var PINK = "#ff9cce";
var CYAN = "#00ffde";
var ORANGE = "#ffb847";
var WEAK_COLOR = "#0031ff";
var BLINKING_COLOR = "white";

// size of sprites
var NORMAL_BEAN_RADIUS = 2;
var POWER_BEAN_RADIUS = 5;
var PACMAN_RADIUS = 9;
var GHOST_RADIUS = 9;

// directions
var UP = 1;
var DOWN = 2;
var LEFT = 3;
var RIGHT = 4;


//game state and map
var level = 1;
var gameOn = false;
var gamePaused = false;
var maze = new Array(CANVAS_HEIGHT/GRID_HEIGHT);


// grids that don't redraw
var staticGrids = [];
var staticGridsIndex = 0;


// start location of pacman
var pacmanStartLoc = [];

// grids with no beans
var noBean = [];
var noBeanIndex=noBean.length;


// power beans in maze
var powerBeans = [];

// ghost house
var ghostHouse = [];
var ghostHouseIndex = 0;

// Write your code!

// Canvas - where your game will be played!
function initCanvas(width, height){}

// Draw your maze! Where are your energy pills? How should you place them? What about power ups?
function initMaze(){}

// Get opposite direction
function oppositeDir (dir) {}

// See if sprite can move one more step at the given (x,y) facing the given direction
function canMove (x,y,dir) {}

// draw instructions
function printInstruction () {}

//show welcome screen
function welcomeScreen(){}

//welcome screen animation **OPTIONAL
function updateWelcomeScreen () {}


//show || update score
function showScore(){
	ctx.fillStyle="black";
	ctx.fillRect(CANVAS_WIDTH-250, 10, 190, 40);
	ctx.fillStyle = "white";
	ctx.font = "24px monospace";
	ctx.textAlign = "left";
	ctx.fillText("score: " + parseInt(score), CANVAS_WIDTH-250, 37);
}

//show win message
function winMessage(){
	//draw popup

	//write message

}

//show lose message
function loseMessage(){
	//draw popup

	//write message
}

function gameOver(){}

function pacmanWon(){}

// ------------------------------Game Control-------------------------//

function controlPacman(keycode){
}

//run the game. Create mrPacman and 4 ghosts. Reset their positions.
function run() {}

/*-----------GAME START-----------*/
initFields();
initCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
canvas.addEventListener('keydown', onKeyDown, false);
canvas.setAttribute('tabindex','0');
canvas.focus();
welcomeScreen();
