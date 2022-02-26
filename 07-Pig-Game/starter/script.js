'use strict';

//global variables.
var player,currentScore,score,lastWinner=0,session=0,lastDice=0,winningScore;

initGame();

function initGame(){

if(session >0){
	document.querySelector('body > main > section.player.player--'+lastWinner).classList.remove('player--winner');
	document.querySelector('#name--'+lastWinner).textContent='PLAYER '+(lastWinner+1);
	
	if(document.querySelector('body > main > section.player.player--'+lastWinner).classList.contains('player--winner')){
	document.querySelector('body > main > section.player.player--'+lastWinner).classList.remove('player--winner');	
	}
	/*
	if(document.querySelector('body > main > section.player.player--'+(lastWinner+1)%2).classList.contains('player--active')){
	document.querySelector('body > main > section.player.player--1').classList.remove('player--active');
	}
	*/
	session=0;
	lastWinner=0;
}

/* comments block 1 */
winningScore=100;//predifined winning score.
document.querySelector('body > section > div > p').textContent=winningScore;
player=0; //initially player 1 is active player and starts the dice game.
//check if the classList of the player --0 has class 'player--active'.

//console.log(document.querySelector('body > main > section.player.player--1').classList.contains('player--active'));

if(document.querySelector('body > main > section.player.player--1').classList.contains('player--active')){
	document.querySelector('body > main > section.player.player--1').classList.remove('player--active');
	}	

if(!document.querySelector('body > main > section.player.player--0').classList.contains('player--active')){
	document.querySelector('body > main > section.player.player--0').classList.add('player--active');
	}

currentScore=[0,0];
document.querySelector('#current--0').textContent=0;
document.querySelector('#current--1').textContent=0;
score=[0,0];//initially scores are zero.
document.querySelector('#score--0').textContent=0;
document.querySelector('#score--1').textContent=0;

//initially dice was hidden
let imageDice=document.querySelector("body > main > img").style.display='none';
document.querySelector("body > main > button.btn.btn--roll").style.display='block';
document.querySelector("body > main > button.btn.btn--hold").style.display='block';


}

document.querySelector('.btn--roll').addEventListener('click',()=>{
	let imageDice=document.querySelector("body > main > img");
	let dice=1+Math.floor(Math.random()*6)//generate a random number for dice
	//let dice=4+Math.floor(Math.random()*3)//only generate 4-6
	imageDice.style.display='block';
	imageDice.src='dice-'+dice+'.png';
	var currentPlayerScoreBoard=document.querySelector('#current--'+player);
	//console.log(currentPlayerScoreBoard);
	if(lastDice===6 && dice ===6){
		score[player]=0;
		document.querySelector('#score--'+player).textContent=0;
		currentScore[player]=0;
		currentPlayerScoreBoard.textContent=currentScore[player];
		switchPlayer();
		lastDice=0;
		return;

	}



	if(dice !=1){
		currentScore[player]+=dice;
		currentPlayerScoreBoard.textContent=currentScore[player];
		lastDice=dice;
	}
	else{
		currentScore[player]=0;
		currentPlayerScoreBoard.textContent=0;
		switchPlayer();
		lastDice=0;
	}

	//#current--0
	
});
 //body > main > section.player.player--0.player--active #current--0

function switchPlayer(){
			document.querySelector('body > main > section.player.player--'+player).classList.remove('player--active');
			player=(player+1)%2;//if player==0 -> player=1 else if player==1 -> player=0
			document.querySelector('body > main > section.player.player--'+player).classList.add('player--active');
		}

document.querySelector('body > main > button.btn.btn--new').addEventListener('click',initGame)

document.querySelector('body > main > button.btn.btn--hold').addEventListener('click',()=>{
		score[player]+=currentScore[player];
		document.querySelector('#score--'+player).textContent=score[player];
		document.querySelector('#current--'+player).textContent=0;
		currentScore[player]=0;
		if(score[player]>=winningScore){
			document.querySelector('#name--'+player).textContent='Winner!';
			document.querySelector('body > main > section.player.player--'+player).classList.add('player--winner');
			document.querySelector("body > main > img").style.display='none';
			document.querySelector("body > main > button.btn.btn--roll").style.display='none';
			document.querySelector("body > main > button.btn.btn--hold").style.display='none';
			lastWinner=player;
			session+=1;
			
		}
		switchPlayer();
	});
	

document.querySelector('body > section > div > button').addEventListener('click',()=>{
winningScore=document.querySelector('#inputFieldWin').value;
document.querySelector('body > section > div > p').textContent=winningScore;

})



/*//comments block1
document.querySelector('#name--0').textContent='PLAYER 1';
document.querySelector('#name--1').textContent='PLAYER 2';




if(document.querySelector('body > main > section.player.player--0').classList.contains('player--winner')){
	document.querySelector('body > main > section.player.player--0').classList.remove('player--winner');	
	}
if(document.querySelector('body > main > section.player.player--1').classList.contains('player--winner')){
	document.querySelector('body > main > section.player.player--1').classList.remove('player--winner');	
	}
if(document.querySelector('body > main > section.player.player--1').classList.contains('player--active')){
	document.querySelector('body > main > section.player.player--1').classList.remove('player--active');
	}
if(!document.querySelector('body > main > section.player.player--0').classList.contains('player--active')){
	document.querySelector('body > main > section.player.player--0').classList.add('player--active');
	}
*/

