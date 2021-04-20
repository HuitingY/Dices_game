var button = document.getElementById("enter");
var image1 = document.querySelectorAll("img")[0]
var image2 = document.querySelectorAll("img")[1]


function imageSoure(num) {
	var imagehref = "images/dice" + num + ".png";
	return imagehref
}


function changeImage(href) {
	image1.setAttribute("src", href);
	image2.setAttribute("src", href);
}


button.addEventListener("click", function(){
	var randomnum1 = Math.floor(Math.random()*6)+1;
	var randomnum2 = Math.floor(Math.random()*6)+1;
	image1.setAttribute("src", imageSoure(randomnum1));
	image2.setAttribute("src", imageSoure(randomnum2));
	if (randomnum1 > randomnum2) {
		document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
	}
	else if (randomnum1 < randomnum2) {
		document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
	}

	else {
		document.querySelector("h1").innerHTML = "Draw!";
	}
})

