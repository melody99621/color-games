var numofsquares = 6;
var color = generatecolor(numofsquares);
var squares = document.querySelectorAll(".square");
var correctcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var messagedisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybtn = document.getElementById("Easy");
var hardbtn = document.getElementById("Hard");


easybtn.addEventListener("click",function(){
	numofsquares = 3;
	resetbutton.textContent = "New Colors";
	h1.style.background  ="steelblue";
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	color = generatecolor(numofsquares);
	correctcolor = pickcolor();
	colordisplay.textContent = correctcolor;
	for(i=0;i<squares.length;i++){
		if(color[i]){
			squares[i].style.background = color[i];
		}else{
			squares[i].style.display="none";
		}
	}
})
hardbtn.addEventListener("click",function(){
	numofsquares = 6;
	resetbutton.textContent = "New Colors";
	h1.style.background  ="steelblue";
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	color = generatecolor(numofsquares);
	correctcolor = pickcolor();
	colordisplay.textContent = correctcolor;
	for(i=0;i<squares.length;i++){
		squares[i].style.background = color[i];
		squares[i].style.display="block";
		}
})

colordisplay.textContent = correctcolor;

resetbutton.addEventListener("click", function(){
	resetbutton.textContent = "New Colors";
	color = generatecolor(numofsquares);
	correctcolor = pickcolor();
	colordisplay.textContent = correctcolor;
	for(i=0;i<squares.length;i++){
		squares[i].style.background = color[i];
	}
	h1.style.background = "steelblue";
})

for(i = 0;i<squares.length;i++){
	squares[i].style.background = color[i];
	squares[i].addEventListener("click",function(){
		var clickcolor = this.style.background;
		console.log(clickcolor,correctcolor);
		if(clickcolor === correctcolor){
			messagedisplay.textContent = "Correct!!";
			resetbutton.textContent = "Play Again?";
			changecolor(clickcolor);
			h1.style.background = clickcolor;
		}else{
			this.style.background ="#232323";
			messagedisplay.textContent = "Try Again!!";
		}	
	})
}

function changecolor(color){
	for(i = 0;i<squares.length;i++){
		squares[i].style.background = color;
	}
}

function pickcolor(){
	var random = Math.floor(Math.random()*color.length);
	return color[random];
}

function generatecolor(num){
	var arr = [];
	for(i = 0;i<num;i++){
		arr.push(randomcolor());
	}
	return arr;
}

function randomcolor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r +", " + g  + ", " + b +")";
}