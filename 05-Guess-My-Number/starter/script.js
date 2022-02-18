'use strict';

let score=20;
let highscore =0;
//generate a random number between 1-20
let genrated=Math.floor((Math.random()*20)+1);
// console.log(genrated);


//every time the number check on when clicks on check button.

document.querySelector('.check').addEventListener('click',function () {
	let	guessed=Number(document.querySelector("body > main > section.left > input").value);
	// let guessed=10;
	console.log(guessed,typeof guessed);

if(score>0){
if(guessed === 0 || typeof guessed !=='number'){//if guessed value is not a number or 0 then print "⛔️ No number!"
	document.querySelector('.message').textContent="⛔️ No number!";
	return;
	}
//when the number > guess number then print "📈 Too high!"
if(guessed > genrated){
document.querySelector('.message').textContent="📈 Too high!";
}
else if( guessed < genrated){////when number is < guessed number then print "📉 Too low!"
	document.querySelector('.message').textContent="📉 Too low!";
}
else{
	//if number is equal to guessed then print "🎉 Correct Number!".
	document.querySelector('.message').textContent="🎉 Correct Number!";
	//when click on button again then highscore=max(highscore,currentfinal_score)
	highscore=Math.max(highscore,score);
	document.querySelector('.label-highscore .highscore').textContent=highscore;
	document.querySelector('body').style.background='#60b347';
	document.querySelector("body > header > div").textContent=guessed;
	return;
}

//each time score decrements for a guess.
score--;
document.querySelector('.label-score .score').textContent=score;

}


})

// console.log(document.querySelector("body > header > button"))
document.querySelector("body > main > section.left > input")

document.querySelector("body > header > button").addEventListener('click',function(){
	genrated=Math.floor((Math.random()*20)+1);
	document.querySelector("body > main > section.left > input").value=null;
	document.querySelector('.message').textContent="Start guessing...";
	document.querySelector('.label-score .score').textContent=score=20;
	document.querySelector('body').style.background='#222';
	document.querySelector("body > header > div").textContent='?';

})

/*
this is my first javascript project , html and css of this project is already given as a starter code.
what i have learnt from this:
->Every task is hard in begining , don't skip any very simple project because of it's simplicity.
->A very simple thing is better than nothing.
->don't worry about completion of a project.
->every beginner starts with very simple things at least you are trying to built your foundation.
 """HURRAY I HAVE COMPLETED MY FIRST TASK."""

*/